// Stitches every slide folder into one page: dist/index.html (+ dist/assets).
// Run: node build.js   (Vercel runs this automatically on every push)
const fs = require('fs');
const path = require('path');

const root = __dirname;
const read = (p) => fs.readFileSync(path.join(root, p), 'utf8');
const maybe = (p) => (fs.existsSync(path.join(root, p)) ? read(p) : '');

const deck = JSON.parse(read('deck.json'));
const css = [read('core/base.css')];
const html = [];
const js = [];
const notes = [];

deck.slides.forEach((dir, i) => {
  const slide = maybe(`${dir}/slide.html`);
  if (!slide) throw new Error(`Missing ${dir}/slide.html (listed in deck.json)`);
  html.push(slide);
  const style = maybe(`${dir}/style.css`);
  if (style) css.push(`/* ${dir} */\n${style}`);
  const script = maybe(`${dir}/script.js`);
  if (script) js.push(`/* ${dir} */\n;(function(){\n${script}\n})();`);
  const note = maybe(`${dir}/notes.md`).trim();
  notes.push(note);
  console.log(`${String(i + 1).padStart(2, '0')}  ${dir}`);
});

const page = [
  read('core/head.html'),
  `<style>\n${css.join('\n')}\n</style>`,
  '<div id="stage">',
  read('core/hud.html'),
  html.join('\n\n'),
  read('core/overlays.html'),
  '</div>',
  '<script>',
  `const NOTES=${JSON.stringify(notes)};`,
  read('core/engine.js'),
  js.join('\n'),
  read('core/boot.js'),
  '</script>',
].join('\n');

fs.rmSync(path.join(root, 'dist'), { recursive: true, force: true });
fs.mkdirSync(path.join(root, 'dist'), { recursive: true });
fs.writeFileSync(path.join(root, 'dist', 'index.html'), page);
fs.cpSync(path.join(root, 'assets'), path.join(root, 'dist', 'assets'), { recursive: true });
console.log(`\nBuilt dist/index.html with ${deck.slides.length} slides.`);
