# Halcyon Pitch

Our Shark Tank deck for Halcyon H2-50, a hydrogen regional airliner with a bio-inspired airframe. Every slide lives in its own folder, so each of us can edit our part without touching anyone else's. Vercel stitches them together into one page on every push.

Live site: https://sharktank-sepia.vercel.app

## Who owns what

| Person | Major | Folder | Slides |
|---|---|---|---|
| Ishaan | Mechanical | `slides/ishaan/` | 01 title, 02 hook, 03 challenge, 10 thermal loop, 11 manufacturing |
| Griffin | Aerospace | `slides/griffin/` | 05 meet Halcyon, 06 kingfisher + shark, 07 whale, albatross, owl |
| Drew | Materials Science | `slides/drew/` | 08 composite tank, 09 self-healing skin |
| Theo | Electrical & Computer | `slides/theo/` | 12 powertrain, 13 nervous system |
| Atharv | Civil | `slides/atharv/` | 04 considerations, 14 airport hub, 15 team, 16 the ask |
| Everyone | | `slides/team/` | 17 references |

## What's in a slide folder

- `slide.html` is the slide itself (one `<section class="slide" id="tN">`). Change the words here.
- `style.css` is the layout for that slide only. Rules start with the slide's id, like `#t8 .copy{...}`.
- `script.js` is optional animation. Register `hooks.tN = () => {...}` to run when the slide opens, and `draws.tN = t => {...}` to run every frame.
- `notes.md` is your speaker notes (press N while presenting).

Shared pieces (fonts, colors, the transition, navigation) are in `core/`. Photos are in `assets/img/`. The slide order is `deck.json`, so to add, remove or reorder a slide, edit that list.

## Making a change

1. `git pull` first, every time.
2. Edit files in your own folder.
3. `node build.js`, then open `dist/index.html` in a browser to check it.
4. `git add .`, `git commit -m "Drew: tank slide wording"`, `git push`.

Vercel rebuilds within a minute or two of the push. Don't commit `dist/`, since Vercel makes it for you.

## Presenting

Arrow keys or click to move, N for speaker notes, F for fullscreen. A link like `/#s8` opens on slide 8.

## Credits

Photos are from Wikimedia Commons and NASA, with authors and licenses listed on the references slide.
