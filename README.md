# Jan Awaaz (जन आवाज़)
Independent civic information app. **All data is DEMO sample data.** Not affiliated with any government or party.

## Run (computer or Termux on Android)
```
cd jan-awaaz
npm install
npm run dev
```
Open the "Network" URL shown (for example http://192.168.x.x:5173) on any phone on the same Wi-Fi.
In Termux first run: `pkg install nodejs`.

## Folder structure
```
jan-awaaz/
  index.html  package.json  vite.config.js  .env.example  .gitignore
  src/ main.jsx  App.jsx  styles.css  data/demo.js
```

## Add real news safely later
Never call a news API from the browser. Create a backend (Supabase Edge Function or a small serverless function) that holds the API key as a secret, fetches and filters news, and returns JSON. Set `VITE_API_BASE_URL` to that backend and replace the demo imports with `fetch` calls.

## Free deployment
Push to GitHub, then import the repo on Cloudflare Pages, Netlify or Vercel. Build command `npm run build`, output folder `dist`.

## Still needs external services
Database, user accounts, admin roles and moderation (Supabase free tier), photo storage, news API via backend, verified protest and map data, misinformation and abuse reports, community comments.
Before launch: check every official link and fill `lastVerified` in `src/data/demo.js`.
