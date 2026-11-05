# Halcyon Pitch

Our Shark Tank deck for Halcyon H2-50, a hydrogen regional airliner with a bio-inspired airframe. Every slide lives in its own folder, so each of us can edit our part without touching anyone else's. Vercel stitches them together into one page on every push.

Live site: https://sharktank-sepia.vercel.app

## Who owns what

| Person | Major | Folder | Slides |
|---|---|---|---|
| Ishaan | Mechanical | `slides/ishaan/` | 01 title, 02 the problem, 03 why hydrogen, 12 keeping it cold, 13 how we'd build it |
| Atharv | Civil | `slides/atharv/` | 04 what we thought about, 16 fueling at the airport, 17 team divider, 18 engineers, 19 finding engineers at UW, 20 our ask |
| Griffin | Aerospace | `slides/griffin/` | 05 solution divider, 06 what is Halcyon, 07 parts of Halcyon, 08–09 copying nature |
| Drew | Materials Science | `slides/drew/` | 10 the fuel tank, 11 a skin that heals itself |
| Theo | Electrical & Computer | `slides/theo/` | 14 the powertrain, 15 sensors and contrails |
| Everyone | | `slides/team/` | 21 thank you, 22 sources |

## What's in a slide folder

- `slide.html` is the slide itself (one `<section class="slide" id="tN">`). Change the words here.
- `style.css` (optional) is styling for that slide only. Rules start with the slide's id, like `#t12 .flow{...}`. Most slides just use the shared classes in `core/base.css`.
- `notes.md` is your speaker notes (press N while presenting).

Shared pieces (the space background, fonts, bullet and photo styles, navigation) are in `core/`. Photos are in `assets/img/`. The slide order is `deck.json`, so to add, remove or reorder a slide, edit that list.

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
