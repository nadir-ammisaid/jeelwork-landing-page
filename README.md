# 🛠️ Jeel Work Landing Page

Official landing page for **Jeel Work Algeria** – a platform that connects users with skilled local artisans and service providers across all 48 wilayas.

Built using **Next.js 15** with the **App Router** and **TypeScript**, the project is optimized for:
- ⚡ SEO and performance (static export, responsive images, lazy loading)
- 📱 Mobile-first responsive design
- ♿ Accessibility best practices
- 🌍 Multi-language readiness

> This project serves as the front-facing gateway for the Jeel Work ecosystem.

🔗 [Live Demo](https://jeelwork.com)

## 🖼️ Preview

![Jeel Work Landing Preview](public/images/landingPagePreview.png)


## 🚀 Getting Started

### Prerequisites

Make sure you have the following installed:

- [Node.js](https://nodejs.org/) (v18+ recommended)
- [npm](https://www.npmjs.com/) or [pnpm](https://pnpm.io/) or [yarn](https://yarnpkg.com/)
- Git with SSH access configured if cloning via SSH

### Installation

Clone the repository and install dependencies:

```bash
git clone git@github.com:nadir-ammisaid/jeelwork-landing-page.git
cd jeelwork-landing-page
npm install
```

### Development server
To run the dev server locally:

```bash
npm run dev
```

Visit http://localhost:3000 in your browser.


## 🧱 Project Structure

This project uses **Next.js App Router** with the following structure:

```
├── public/                  # Static files (images, favicons, etc.)
├── src/
│   ├── app/                 # App Router pages
│   │   ├── page.tsx         # Main landing page
│   │   ├── layout.tsx       # Shared layout with Header/Footer
│   │   ├── privacy-policy/  # Privacy Policy page
│   │   └── terms-of-use/    # Terms of Use page
│   ├── components/          # Reusable UI components (Header, Footer, Sections)
│   └── styles/              # Global and modular CSS
```


## ✨ Features

- ✅ Static Site Generation (SSG) for fast load time
- 🔒 SEO and security headers configured in `next.config.ts`
- 📱 Mobile-first responsive design
- 🌓 Dark mode support (via prefers-color-scheme)
- 🧑‍💻 Accessible markup (ARIA roles, keyboard navigation)
- 🌍 Fully translated content (French + English routes)
- ⚡ Optimized fonts & images (`next/image`, font-display swap)
- 🧭 Anchor navigation with smooth scrolling













<!-- Default Readme

This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.

 -->