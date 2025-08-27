# 🛠️ Jeelwork Showcase Website

<br><br>

![Next.js](https://img.shields.io/badge/Next.js-15-black)
![TypeScript](https://img.shields.io/badge/TypeScript-5-blue)

Official showcase website for **Jeelwork Algeria**, a platform that connects users with skilled local jobbers and service providers across all 58 wilayas (cities).

Built using **Next.js 15** with the **App Router** and **TypeScript**, the project is optimized for:
- ⚡ SEO and performance (static export, responsive images, lazy loading)
- 📱 Mobile-first responsive design
- ♿ Accessibility best practices
<!--
- 🌍 Multi-language readiness
-->

This website serves as the public-facing entry point of the Jeelwork ecosystem.

<br>


**🔗 Live Demo:** [https://www.jeelwork.com](https://www.jeelwork.com)

<br>

## 🖼️ Preview

![Jeelwork Website Preview](public/images/websitePreview.avif)



<br><br>



## 🚀 Getting Started

### Prerequisites

Make sure you have the following installed:

- [Node.js](https://nodejs.org/) (v18+ recommended)
- [npm](https://www.npmjs.com/) or [pnpm](https://pnpm.io/) or [yarn](https://yarnpkg.com/)
- Git with SSH access configured if cloning via SSH

### Installation

Clone the repository and install dependencies:

```bash
# SSH (recommanded)
git clone git@github.com:nadir-ammisaid/jeelwork-website.git

# or HTTPS
git clone https://github.com/nadir-ammisaid/jeelwork-website.git
```

```bash
cd jeelwork-website
```

```bash
npm install
```

### Development server
To run the dev server locally: 

```bash
npm run dev
```

Visit http://localhost:3000 in your browser.


### Available Scripts

```bash
npm run dev          # Development server
npm run build        # Production build  
npm run start        # Start production server
npm run lint         # Run ESLint
npm run export       # Static export (if configured)
```

<br><br> 



## 🧱 Project Structure

This project uses **Next.js App Router** with the following structure:

```
JEELWORK-website
├── .next/                               # Next.js build output (generated)
├── node_modules/                        # npm dependencies (generated)
├── public/                              # static assets (served at root)
│   ├── icons/
│   ├── images/
│   ├── manifest.json                    # PWA manifest
│   ├── robots.txt                       # SEO robots file
│   └── sitemap.xml                      # SEO sitemap
├── src/
│   ├── app/                             # App Router (Next.js 15)
│   │   ├── (legal)/                     # Static legal pages
│   │   │   ├── privacy-policy/
│   │   │   │   ├── page.tsx             # Privacy Policy page
│   │   │   │   └── privacy-policy.css   
│   │   │   └── terms-of-use/
│   │   │       ├── page.tsx             # Terms of Use page
│   │   │       └── terms-of-use.css     
│   │   ├── (marketing)/services/        # Marketing pages
│   │   │   ├── [slug]/                  # Dynamic route for a single service
│   │   │   │   └── page.tsx             # Service detail page
│   │   │   ├── layout.tsx               
│   │   │   └── page.tsx                 # /services index (list of services)
│   │   ├── apple-icon.png               
│   │   ├── criticalStyles.css.ts        # Critical CSS (inline as string)
│   │   ├── criticalStyles.tsx           # Critical CSS injection component
│   │   ├── favicon.ico                  
│   │   ├── globals.css                  # global styles (non-critical CSS)
│   │   ├── icon.png                     
│   │   ├── layout.tsx                   # Root layout (metadata & <head/>)
│   │   └── page.tsx                     # Homepage
│   ├── components/                      # Reusable UI sections
│   │   ├── AreasServedSection.tsx
│   │   ├── CTASection.tsx
│   │   ├── DownloadSection.tsx
│   │   ├── FAQSection.tsx
│   │   ├── Footer.tsx
│   │   ├── Header.tsx
│   │   ├── HeroSection.tsx
│   │   ├── HowItWorksSection.tsx
│   │   ├── RecentJobbersSection.tsx
│   │   ├── ServicesSection.tsx
│   │   └── TestimonialsSection.tsx
│   ├── data/
│   │   └── services.ts                  # Services catalog (static content)
│   └── lib/
│       └── jobbers.ts                   # Jobbers data (ISR / mocks)
├── .eslintrc.json                       
├── .gitignore                           
├── env.d.ts                             
├── next-env.d.ts                        
├── next.config.ts                       # Next.js configuration
├── package-lock.json                    
├── package.json                         
├── README.md                            # Project documentation
└── tsconfig.json                        
```



<br><br>



## ✨ Features

- ✅ Static Site Generation (SSG) for fast load time
- 🔒 SEO optimization & security headers in next.config.ts `next.config.ts`
- 📱 Mobile-first responsive design with tablet & desktop optimization
- 🧑‍💻 Accessibility support (ARIA roles, keyboard navigation)
- ⚡ Optimized fonts & images (`next/image`, `sharp`, font-display swap)
- 🧭 Anchor navigation with smooth scrolling


<!--
- 🌓 Dark mode support (via prefers-color-scheme)
- 🌍 Fully translated content (French + English routes)
-->


<br><br>


## 📬 Feedback & Support

I'd love to hear from you! If you find this project useful or have suggestions for improvement:

- ⭐ **Star this repository** if you like what I'm building
- 🚩 **Report issues** or request features via GitHub Issues  
- 💡 **Share your ideas** for new features or improvements
- 📧 **Contact me** on [LinkedIn](https://www.linkedin.com/in/nadir-ammisaid/)

Thanks in advance for taking the time to share your thoughts!




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