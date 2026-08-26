const WORDS = [
  "zero", "one", "two", "three", "four", "five", "six", "seven", "eight",
  "nine", "ten", "eleven", "twelve", "thirteen", "fourteen", "fifteen",
  "sixteen", "seventeen", "eighteen", "nineteen", "twenty",
];

export function spellNumber(value: number) {
  const word = WORDS[value];
  if (!word) return String(value);
  return word[0].toUpperCase() + word.slice(1);
}

export function pluralise(value: number, singular: string) {
  return value === 1 ? singular : `${singular}s`;
}
