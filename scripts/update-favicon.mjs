import fs from 'node:fs';
import path from 'node:path';

const pngBuffer = fs.readFileSync('public/images/clash-logo.png');
const base64Png = pngBuffer.toString('base64');
const dataUri = `data:image/png;base64,${base64Png}`;

const svgContent = `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 512 512" width="100%" height="100%">
  <image width="512" height="512" xlink:href="${dataUri}" href="${dataUri}" />
</svg>
`;

fs.writeFileSync('public/favicon.svg', svgContent, 'utf8');
fs.writeFileSync('dist/favicon.svg', svgContent, 'utf8');
fs.writeFileSync('public/favicon.ico', pngBuffer);
fs.writeFileSync('dist/favicon.ico', pngBuffer);
fs.writeFileSync('dist/favicon.png', pngBuffer);

console.log('Successfully generated public and dist favicon.svg, favicon.ico, and favicon.png');
