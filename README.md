# Ancient Music Odyssey

A seven-stop voyage game on the music of ancient Greece and Rome, built from the
"Music of Ancient Greece and Rome" general music lesson. Students play the stops
in order, each stop is graded, and the final screen averages the seven grades.

The whole game is one file: `public/index.html`. It needs no build step and no
server-side code. Progress is saved on the student's device (a cookie plus
browser storage) after every finished stop.

## The Rage of Achilles

The same Worker also serves a second game, `public/iliad.html`: a 24-stop game
on the Iliad, one stop per book. Each book is graded, any book can be replayed
(the best score counts), and the final grade averages all 24. It is served at
`iliad.johnshawler.com`, and at `/iliad` on any hostname the Worker answers.

## Run it locally

Open `public/index.html` in a browser, or serve it the way Cloudflare will:

```bash
npm install
```

```bash
npm run dev
```

## Deploy

The site is a Cloudflare Worker named `greece`. It picks the page by hostname:
`greece.johnshawler.com` gets `public/index.html` and `iliad.johnshawler.com`
gets `public/iliad.html` (see `wrangler.jsonc` and `src/index.js`).

```bash
npm run deploy
```

Wrangler reads a Cloudflare API token from `CLOUDFLARE_API_TOKEN`. `npm run
deploy` uploads the code and also sets the custom domains, so it needs a token
with zone access to `johnshawler.com`.

With a token that can only edit the `greece` Worker, publish the code alone and
leave the domains as they are:

```bash
npx wrangler versions upload
```

```bash
npx wrangler versions deploy
```
