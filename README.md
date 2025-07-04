# Mystry - Next.js Project

This project is built with [Next.js](https://nextjs.org) and was bootstrapped using [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Table of Contents

- [Getting Started](#getting-started)
- [Environment Variables](#environment-variables)
- [Available Scripts](#available-scripts)
- [Project Structure](#project-structure)
- [Learn More](#learn-more)
- [Deployment](#deployment)

## Getting Started

To run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser to view the application.

You can start editing the main page by modifying `src/app/page.tsx`. The page auto-updates as you edit the file.

## Environment Variables

Create a `.env` file in the root directory based on the provided `.env.sample`:

```env
MONGODB_URI=your_mongodb_connection_string
RESEND_API_KEY=your_resend_api_key
NEXT_AUTH_SECRET=your_next_auth_secret
```

- Generate a secure `NEXT_AUTH_SECRET` using:
  ```bash
  node -e "console.log(require('crypto').randomBytes(32).toString('hex'))"
  ```

## Available Scripts

- `dev`: Runs the app in development mode.
- `build`: Builds the app for production.
- `start`: Starts the production server.
- `lint`: Runs ESLint for code quality.

## Project Structure

- `src/app/` - Main application code (pages, layouts, API routes)
- `src/context/` - React context providers
- `src/helpers/` - Helper functions
- `src/lib/` - Library utilities (e.g., database connection)
- `src/model/` - Data models
- `src/schemas/` - Validation schemas
- `src/type/` - TypeScript types
- `emails/` - Email templates
- `public/` - Static assets

## Learn More

- [Next.js Documentation](https://nextjs.org/docs) - Learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - Interactive Next.js tutorial.
- [Next.js GitHub Repository](https://github.com/vercel/next.js)

## Deployment

The easiest way to deploy your Next.js app is with [Vercel](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme).

For more details, see the [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying).
