# Ancient Music Odyssey

A seven-stop voyage game on the music of ancient Greece and Rome, built from the
"Music of Ancient Greece and Rome" general music lesson. Students play the stops
in order, each stop is graded, and the final screen averages the seven grades.

The whole game is one file: `public/index.html`. It needs no build step and no
server-side code. Progress is saved on the student's device (a cookie plus
browser storage) after every finished stop.

## Run it locally

Open `public/index.html` in a browser, or serve it the way Cloudflare will:

```bash
npm install
```

```bash
npm run dev
```

## Deploy

The site is a Cloudflare Worker named `greece` that serves the page at
`greece.johnshawler.com` (see `wrangler.jsonc` and `src/index.js`).

```bash
npm run deploy
```

Wrangler reads a Cloudflare API token from `CLOUDFLARE_API_TOKEN`. `npm run
deploy` uploads the code and also sets the custom domain, so it needs a token
with zone access to `johnshawler.com`.

With a token that can only edit the `greece` Worker, publish the code alone and
leave the domain as it is:

```bash
npx wrangler versions upload
```

```bash
npx wrangler versions deploy
```
