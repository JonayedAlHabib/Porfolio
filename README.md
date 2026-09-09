# Jonayed Portfolio

Personal portfolio website showcasing my background, skills, and projects.

**Live:** https://porfolio-i1nm.onrender.com
**GitHub:** https://github.com/JonayedAlHabib/Porfolio

## Sections

- Hero
- About
- Skills
- Work / Projects
- Contact (powered by EmailJS)

## Tech Stack

- React 19
- Vite
- Tailwind CSS
- React Router DOM
- EmailJS (contact form)
- React Icons

## Getting Started

```bash
npm install
npm run dev
```

Create a `.env` file based on `.env.example` and add your EmailJS credentials:

```
VITE_EMAILJS_SERVICE_ID=your_service_id
VITE_EMAILJS_TEMPLATE_ID=your_template_id
VITE_EMAILJS_PUBLIC_KEY=your_public_key
```

## Available Scripts

- `npm run dev` — start the development server
- `npm run build` — build for production
- `npm run preview` — preview the production build
- `npm run lint` — run ESLint

## Deployment

Deployed as a static site on [Render](https://render.com):

- **Build Command:** `npm install && npm run build`
- **Publish Directory:** `dist`
- Rewrite rule `/* → /index.html` for client-side routing
