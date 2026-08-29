import assert from "node:assert/strict";
import { existsSync, readFileSync } from "node:fs";
import test from "node:test";

const projectFile = (path: string) => new URL(`../${path}`, import.meta.url);

const faviconLinks = [
  '<link rel="icon" href="/favicon.ico" sizes="any" />',
  '<link rel="icon" href="/favicon.svg" type="image/svg+xml" />',
  '<link rel="icon" href="/favicon-32x32.png" type="image/png" sizes="32x32" />',
  '<link rel="icon" href="/favicon-16x16.png" type="image/png" sizes="16x16" />',
  '<link rel="apple-touch-icon" href="/apple-touch-icon.png" sizes="180x180" />',
  '<link rel="manifest" href="/site.webmanifest" />',
] as const;

function pngDimensions(path: string) {
  const image = readFileSync(projectFile(path));
  const pngSignature = "89504e470d0a1a0a";

  assert.equal(image.subarray(0, 8).toString("hex"), pngSignature, `${path} should be a PNG`);
  return {
    width: image.readUInt32BE(16),
    height: image.readUInt32BE(20),
  };
}

function icoSizes(path: string) {
  const icon = readFileSync(projectFile(path));
  assert.equal(icon.readUInt16LE(0), 0, "ICO reserved field should be zero");
  assert.equal(icon.readUInt16LE(2), 1, "ICO type should be icon");

  const count = icon.readUInt16LE(4);
  return Array.from({ length: count }, (_, index) => {
    const offset = 6 + (index * 16);
    const width = icon[offset] || 256;
    const height = icon[offset + 1] || 256;
    return `${width}x${height}`;
  });
}

test("English and Persian entries declare the complete shared favicon set", () => {
  for (const entry of ["index.html", "fa/index.html"]) {
    const html = readFileSync(projectFile(entry), "utf8");

    for (const link of faviconLinks) {
      assert.ok(html.includes(link), `${entry} should include ${link}`);
    }
  }
});

test("favicon PNG assets have their declared dimensions", () => {
  const expectedSizes = {
    "public/favicon-16x16.png": 16,
    "public/favicon-32x32.png": 32,
    "public/favicon.png": 64,
    "public/apple-touch-icon.png": 180,
    "public/android-chrome-192x192.png": 192,
    "public/android-chrome-512x512.png": 512,
  } as const;

  for (const [path, size] of Object.entries(expectedSizes)) {
    assert.equal(existsSync(projectFile(path)), true, `${path} should exist`);
    assert.deepEqual(pngDimensions(path), { width: size, height: size });
  }
});

test("favicon.ico contains common browser sizes", () => {
  const sizes = icoSizes("public/favicon.ico");

  for (const expected of ["16x16", "32x32", "48x48", "64x64", "256x256"]) {
    assert.ok(sizes.includes(expected), `favicon.ico should include ${expected}`);
  }
});

test("the web app manifest uses the shared install icons", () => {
  const manifest = JSON.parse(readFileSync(projectFile("public/site.webmanifest"), "utf8"));

  assert.equal(manifest.name, "Tech Immigrants");
  assert.equal(manifest.short_name, "Tech Immigrants");
  assert.deepEqual(
    manifest.icons.map((icon: { src: string; sizes: string; type: string }) => icon),
    [
      { src: "/android-chrome-192x192.png", sizes: "192x192", type: "image/png" },
      { src: "/android-chrome-512x512.png", sizes: "512x512", type: "image/png" },
    ],
  );
});
