# Halcyon Pitch

Our Shark Tank deck for Halcyon H2-50, a hydrogen regional airliner with a bio-inspired airframe. Every slide lives in its own folder, so each of us can edit our part without touching anyone else's. Vercel stitches them together into one page on every push.

Live site: https://sharktank-sepia.vercel.app

## Who owns what

The deck runs in presenter order. Every slide shows who's presenting in the bottom corner (it comes from the slide's `data-who`).

| Order | Person | Role | Folder | Slides |
|---|---|---|---|---|
| 1 | Ishaan | Opening | `slides/ishaan/` | 01 title, 02 the problem, 03 why hydrogen, 04 what we thought about, 05 meet the team |
| 2 | Griffin | Aerospace | `slides/griffin/` | 06 divider, 07 what is Halcyon, 08 parts of Halcyon, 09–10 copying nature |
| 3 | Drew | Materials Science | `slides/drew/` | 11 divider, 12 the fuel tank, 13 greener materials |
| 4 | Ishaan | Mechanical | `slides/ishaan/` | 14 divider, 15 keeping it cold, 16 how we'd build it |
| 5 | Theo | Electrical & Computer | `slides/theo/` | 17 divider, 18 the powertrain, 19 sensors and contrails |
| 6 | Atharv | Civil | `slides/atharv/` | 20 divider, 21 fueling at the airport, 22 finding engineers at UW, 23 our ask |
| 7 | Everyone | | `slides/team/` | 24 thank you, 25 sources |

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
