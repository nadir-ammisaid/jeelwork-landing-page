// criticalStyles.css.ts
export const criticalCSS = `
:root {
  --header-h: 4.82rem;
  --bg-color: #f8f9fa;
  --text-color: #333;
  --card-bg-color: #fff;
  --card-text-color: #1f2937;
}

/* Reset minimal + ancrage */
* { box-sizing: border-box; }
section[id] { scroll-margin-top: var(--header-h); }

/* Base */
body {
  margin: 0;
  padding: 0;
  line-height: 1.6;
  font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
  color: var(--text-color);
  background: var(--bg-color);
}
.container {
  max-width: 75rem;
  margin: 0 auto;
  padding: 0 1.25rem;
}
a { color: #5359a7; text-decoration: none; transition: color .3s ease; }
a:hover { color: #6366f1; }

/* === Header / Navbar === */
.site-header {
  background: #fff;
  position: sticky;
  top: 0;
  z-index: 100;
  box-shadow: 0 .125rem .625rem rgba(0,0,0,.1);
}
.navbar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 0;
}
.logo {
  display: flex;
  align-items: center;
  gap: .5rem;
  font-size: 1.8rem;
  font-weight: 800;
  color: #5359a7;
}
.logo img,
.logo svg {
  background: #fff;
  border-radius: 50%;
  box-shadow: 0 0 0 1px #fff;
}
.nav-links {
  display: flex;
  list-style: none;
  gap: 2rem;
  margin: 0;
  padding: 0;
}
.nav-links a {
  font-weight: 500;
  color: #323840;
  transition: color .3s ease;
}
.nav-links a:hover { color: #6366f1; }

/* Burger (mobile) */
.burger {
  display: none;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  padding: .5rem;
  z-index: 101;
  background: none;
  border: none;
  width: 2.5rem;
  height: 2.5rem;
  position: relative;
}
.burger-line {
  width: 2rem;
  height: .2rem;
  background-color: #5359a7;
  transition: all .3s ease;
  border-radius: .1875rem;
  transform-origin: center;
  position: absolute;
}
.burger-line:nth-child(1) { top: calc(50% - 0.7rem); }
.burger-line:nth-child(2) { top: calc(50% - 0.1rem); }
.burger-line:nth-child(3) { top: calc(50% + 0.5rem); }
.burger.active .burger-line:nth-child(1) {
  top: calc(50% - 0.1rem); transform: rotate(45deg);
}
.burger.active .burger-line:nth-child(2) { opacity: 0; }
.burger.active .burger-line:nth-child(3) {
  top: calc(50% - 0.1rem); transform: rotate(-45deg);
}

/* Menu mobile (positionnement + anim) */
.mobile-menu {
  position: fixed;
  top: var(--header-h);
  width: 17.75rem;
  left: 0;
  right: auto;
  height: auto;
  max-height: none;
  padding-top: 0;
  background: #ffffff;
  border: 0.0625rem solid rgba(255,255,255,0.2);
  border-bottom-left-radius: 0;
  border-bottom-right-radius: 1rem;
  box-shadow: .3125rem 0 1.25rem rgba(0,0,0,.1);
  z-index: 99;
  transform: translateX(-100%);
  transition: transform 280ms cubic-bezier(0.22,0.61,0.36,1);
  will-change: transform;
}
.mobile-menu.active { transform: translateX(0); }
.menu-overlay {
  position: fixed;
  top: var(--header-h);
  left: 0;
  width: 100%;
  height: calc(100vh - var(--header-h));
  background: rgba(0,0,0,.5);
  z-index: 98;
  opacity: 0;
  visibility: hidden;
  transition: all .3s ease;
}
.menu-overlay.active { opacity: 1; visibility: visible; }

/* === Hero === */
.hero {
  position: relative;
  color: #fff;
  text-align: center;
  padding: 2rem 0;
  min-height: 60vh;
  display: grid;
  place-items: center;
}
.hero-bg { position: absolute; inset: 0; z-index: 0; }
.hero-bg img { width: 100%; height: 100%; object-fit: cover; }
.hero::before {
  content: "";
  position: absolute;
  inset: 0;
  background: rgba(0,0,0,.4);
  z-index: 1;
}
.hero-content {
  position: relative;
  z-index: 2;
  text-shadow: 0 2px 6px rgba(0,0,0,.7);
}
.hero h1 {
  font-size: 3.5rem;
  margin: 0 0 1rem;
  font-weight: 800;
  line-height: 1.2;
}
.hero p { font-size: 1.4rem; margin: 0 0 2rem; }

/* === Bouton (CTA) === */
.btn {
  background: linear-gradient(135deg, #6366f1, #8b5cf6);
  color: #fff;
  padding: 1rem 1rem;
  min-width: 17rem;
  border: none;
  border-radius: .75rem;
  display: inline-block;
  cursor: pointer;
  font-size: 1em;
  font-weight: 600;
  text-align: center;
  text-decoration: none;
  transition: all .3s ease;
  box-shadow: 0 .25rem 1.9375rem rgba(255,255,255,.6);
}
.btn:hover {
  transform: translateY(-.125rem);
  box-shadow: 0 .5rem 1.5625rem rgba(99,102,241,.4);
  color: #fff;
}

/* === Responsive (uniquement header/hero/burger) === */
@media (max-width: 430px) {
  .nav-links { display: none; }
  .burger { display: flex; }
  .container { padding: 0 .9375rem; }
  .hero h1 { font-size: 2rem; }
  .hero p  { font-size: 1.1rem; }
}
@media (min-width: 431px) and (max-width: 1024px) {
  .nav-links { display: none; }
  .burger { display: flex; }
  .container { padding: 0 .9375rem; }
  .hero h1 { font-size: 2.5rem; }
  .hero p  { font-size: 1.1rem; }
}

/* Desktop : le reste vient de deferred.css */
`;
