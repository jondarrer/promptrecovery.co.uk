const { converter } = require('culori');

// Define your base colors here
const colors = {
  'vehicle-green': '#066f46',
  'line-blue': '#0a5f7e',
  'company-name-dark-blue': '#053b53',
  'tag-line-turquoise': '#1b6c8d',
  'logo-light-blue': '#b8d4e9',
  // Add more here!
};

const levels = {
  100: 0.9,
  200: 0.75,
  300: 0.6,
  400: 0.5,
  500: null, // use base
  600: 0.35,
};

console.log(':root {');

console.log();

for (const [name, hex] of Object.entries(colors)) {
  const oklch = converter('oklch')(hex);

  if (!oklch) {
    console.warn(`⚠️ Could not convert ${hex} to OKLCH`);
    continue;
  }

  Object.entries(levels).forEach(([level, lightness]) => {
    const l = lightness !== null ? lightness : oklch.l;
    const c = oklch.c.toFixed(2);
    const h = oklch.h.toFixed(1);
    const lStr = l.toFixed(2);
    const varName = `--color-${name}-${level}`;
    console.log(`  ${varName}: oklch(${lStr} ${c} ${h});${ lightness === null ? ` /* base ${hex} */` : '' }`);
  });

  console.log();
}

console.log('}');