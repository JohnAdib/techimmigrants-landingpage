import assert from "node:assert/strict";
import { createHash } from "node:crypto";
import { existsSync, readFileSync } from "node:fs";
import test from "node:test";

const projectFile = (path: string) => new URL(`../${path}`, import.meta.url);

const originalAssetHashes = {
  "public/favicon.png": "2826bd8517c4b60f6385b8d2d1cffb6cbcc979631f403c8447e33a8110aa5427",
  "public/apple-touch-icon.png": "97f502ce84ce6dbc93e28d28395515e12668452975ab359e6f3947053cfe3304",
} as const;

const removedAssets = [
  "public/android-chrome-192x192.png",
  "public/android-chrome-512x512.png",
  "public/favicon-16x16.png",
  "public/favicon-32x32.png",
  "public/favicon.svg",
  "public/site.webmanifest",
] as const;

function sha256(contents: Buffer) {
  return createHash("sha256").update(contents).digest("hex");
}

function icoEntries(path: string) {
  const icon = readFileSync(projectFile(path));
  assert.equal(icon.readUInt16LE(0), 0, "ICO reserved field should be zero");
  assert.equal(icon.readUInt16LE(2), 1, "ICO type should be icon");

  const count = icon.readUInt16LE(4);
  return Array.from({ length: count }, (_, index) => {
    const offset = 6 + (index * 16);
    const width = icon[offset] || 256;
    const height = icon[offset + 1] || 256;
    const byteLength = icon.readUInt32LE(offset + 8);
    const imageOffset = icon.readUInt32LE(offset + 12);

    return {
      width,
      height,
      contents: icon.subarray(imageOffset, imageOffset + byteLength),
    };
  });
}

test("every HTML entry declares the shared favicon.ico", () => {
  for (const entry of ["index.html", "fa/index.html"]) {
    const html = readFileSync(projectFile(entry), "utf8");

    assert.ok(
      html.includes('<link rel="icon" href="/favicon.ico" sizes="any" />'),
      `${entry} should declare /favicon.ico`,
    );
    assert.doesNotMatch(html, /favicon\.svg|favicon-(?:16x16|32x32)|site\.webmanifest/);
  }
});

test("the existing favicon PNG and Apple icon remain unchanged", () => {
  for (const [path, expectedHash] of Object.entries(originalAssetHashes)) {
    assert.equal(sha256(readFileSync(projectFile(path))), expectedHash, `${path} artwork should not change`);
  }
});

test("no extra favicon artwork or manifest is added", () => {
  for (const path of removedAssets) {
    assert.equal(existsSync(projectFile(path)), false, `${path} should not exist`);
  }
});

test("favicon.ico packages the existing artwork at common browser sizes", () => {
  const entries = icoEntries("public/favicon.ico");
  const sizes = entries.map(({ width, height }) => `${width}x${height}`);

  assert.deepEqual(sizes, [
    "16x16",
    "24x24",
    "32x32",
    "48x48",
    "64x64",
    "128x128",
    "256x256",
  ]);

  const original64 = readFileSync(projectFile("public/favicon.png"));
  const embedded64 = entries.find(({ width }) => width === 64);
  assert.ok(embedded64, "favicon.ico should contain a 64x64 entry");
  assert.equal(sha256(embedded64.contents), sha256(original64));
});
