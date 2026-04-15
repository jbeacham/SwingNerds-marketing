# SwingNerds Marketing Site

Public marketing site for SwingNerds, served at `swingnerds.com`. The logged-in
app lives at `app.swingnerds.com` (see the [`swingnerds-web`](../SwingNerds/swingnerds-web)
repo).

## Dev

```bash
npm install
npm run dev
```

Runs on `http://localhost:3100`. The app (`swingnerds-web`) runs on `http://localhost:3000`.
Set `VITE_APP_URL` in `.env.local` to override where Login / Sign Up buttons redirect to.

## Build

```bash
npm run build
```

Output goes to `dist/`.

## Architecture

- **Marketing pages** (`src/views`, `src/components/LandingPage.vue`) — all routes under `/`, `/about`, `/pricing`, `/vision`, `/cameras`, etc.
- **`services/appUrl.js`** — single source of truth for the logged-in app URL, and a `goToApp(path)` helper used by every Login/Sign Up/Start Trial button.
- **Redirects to the app** — any requests to old app routes (`/dashboard`, `/login`, `/charts`, ...) are caught by router `beforeEnter` guards and hard-redirected to `app.swingnerds.com` so old bookmarks keep working.
