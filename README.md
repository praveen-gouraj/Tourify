# Traveller

Traveller is a monorepo for a premium travel agency website built with Next.js 15, TypeScript, Tailwind CSS, Framer Motion, React Hook Form, Express, MongoDB, Mongoose, JWT, Cloudinary, and Multer.

## Structure

- `apps/web` - Next.js marketing site and admin UI
- `apps/api` - Express API and MongoDB integration
- `packages/shared` - Shared types and validation schemas

## Development

1. Copy `.env.example` to `.env` and configure values.
2. Install dependencies in the workspace root.
3. Run `npm run dev` to start both apps.

## Deployment

- Frontend: Vercel
- Backend: Render
