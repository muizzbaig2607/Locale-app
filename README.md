Locale (Prototype):
A base/example app — not a finished product. This is a single-file, front-end-only demo built for a hackathon pitch, meant to show the concept and flow of a travel-itinerary app powered by local recommendations, 
not to be used as-is in production.

What this is:
A working, tappable prototype: pick days/interests/pace → get a generated day-by-day itinerary → see it on a real map with a routed path → open it in Google Maps for live turn-by-turn directions
Seed data for Kochi, India (14 sample local-recommended places) is hardcoded in the JS — swap it for your own city/dataset
Everything runs client-side. No backend, no database, no real user accounts
Files
File	Purpose:
locale_app_prototype.html	The entire app — HTML, CSS, and JS in one file
manifest.json	Enables "Add to Home Screen" / installable behavior when hosted online
sw.js	Minimal service worker, required for the install prompt to qualify
Running it

Just open locale_app_prototype.html in a browser. For the full-screen "installed app" feel (no address bar), it needs to be served over http(s), not opened as a local file.

What's NOT here (by design):
No real backend / API / database — the "local suggestions" are static sample data
No user accounts, auth, or moderation .
Map routing uses a free public routing service (OSRM) — fine for a demo, not meant for production traffic.
No tests, no build tooling, no framework — plain HTML/CSS/JS on purpose, to keep it easy to read and fork.

Why it's structured this way:
This exists to demonstrate the product idea end-to-end quickly (for a hackathon demo) and to give whoever picks this up next a working reference for the intended flow — not a scaffold to deploy directly. 
Treat it as a starting point to rebuild properly (real backend, real data, a proper frontend framework) once the concept is validated.
