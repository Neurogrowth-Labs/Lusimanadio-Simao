<div align="center">
<img width="1200" height="475" alt="GHBanner" src="https://ai.google.dev/static/site-assets/images/share-ais-513315318.png" />
</div>

# Lusimanadio Soki Simao Portfolio

Portfolio site built with React, TypeScript, and Vite. The Express server provides the Gemini-powered advisor endpoint.

View your app in AI Studio: https://ai.studio/apps/c0c08a04-2d84-4169-921a-b706f7a640d6

## Local development

**Prerequisites:** Node.js 20 or newer and pnpm 11.

1. Install dependencies with `pnpm install --frozen-lockfile`.
2. Set `GEMINI_API_KEY` in `.env.local` for the chat advisor. The rest of the site works without it.
3. Start the app with `pnpm dev`.

Run `pnpm lint` for the TypeScript check and `pnpm build` to create the production assets and server bundle.

The inquiry form prepares a draft in the visitor's email app. This site does not store or send inquiry submissions.
