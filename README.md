# Shantanu Harkulkar | Portfolio

Personal portfolio of **Shantanu Harkulkar**, a Generative AI and Full-Stack Developer and M.Sc. Computer Science graduate based in Mumbai, India.

**Live site:** https://portfolio-umber-seven-31.vercel.app/

## About

I build RAG-based chatbots, n8n automation workflows, and web apps. This site showcases my projects, experience, and writing.

## Tech Stack

- **Framework:** Next.js (App Router) with TypeScript
- **Animation:** Framer Motion and canvas-based animated backgrounds
- **Theming:** Light and dark mode via a custom `ThemeProvider`
- **Deployment:** Vercel

## Project Structure

```
src/
├── app/
│   ├── layout.tsx        # Root layout
│   ├── page.tsx          # Home page (hero, about, projects)
│   └── blogs/page.tsx    # Blog page
└── components/
    ├── Navigation.tsx    # Floating navigation bar
    └── ThemeProvider.tsx # Light/dark theme handling
```

## Getting Started

```bash
# Clone the repository
git clone https://github.com/shantanuuh/portfolio.git
cd portfolio

# Install dependencies
npm install

# Start the development server
npm run dev
```

Open http://localhost:3000 in your browser.

To create a production build:

```bash
npm run build
npm start
```

## Deployment

The site is deployed on Vercel. Pushing to the `main` branch triggers an automatic redeploy.

## Contact

- LinkedIn: https://www.linkedin.com/in/shantanu-harkulkar-563b38269/
- GitHub: https://github.com/shantanuuh
- Email: shantanuharkulkar125@gmail.com
