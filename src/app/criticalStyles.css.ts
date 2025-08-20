// criticalStyles.css.ts
export const criticalCSS = `
:root {
  --header-h: 4.82rem;
  --bg-color: #f8f9fa;
  --text-color: #333;
  --card-bg-color: #fff;
  --card-text-color: #1f2937;
}

* { box-sizing: border-box; }
section[id] { scroll-margin-top: var(--header-h); }

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

a {
  color: #5359a7;
  text-decoration: none;
  transition: color .3s ease;
}
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
.logo img {
  width: 1.9rem;
  height: 1.9rem;
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
.nav-links a { font-weight: 500; color: #323840; transition: color .3s ease; }
.nav-links a:hover { color: #6366f1; }

/* Burger (mobile) */
.burger {
  display: none;
  flex-direction: column;
  cursor: pointer;
  padding: .5rem;
  z-index: 101;
  background: none;
  border: none;
}
.burger-line {
  width: 2rem;
  height: .2rem;
  background-color: #5359a7;
  margin: .1875rem 0;
  transition: .3s;
  border-radius: .1875rem;
}

/* === Hero (au-dessus de la pliure) === */
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
.hero::before { content: ""; position: absolute; inset: 0; background: rgba(0,0,0,.4); z-index: 1; }
.hero-content { position: relative; z-index: 2; text-shadow: 0 2px 6px rgba(0,0,0,.7); }
.hero h1 {
  font-size: 3.5rem;
  margin: 0 0 1rem;
  font-weight: 800;
  line-height: 1.2;
}
.hero p { font-size: 1.4rem; margin: 0 0 2rem; }

/* === Boutons === */
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
.btn:hover { transform: translateY(-.125rem); box-shadow: 0 .5rem 1.5625rem rgba(99,102,241,.4); color: #fff; }

/* === Services (aperçu) === */
.services { padding: 1rem 0; }

.services-subtitle {
  text-align: center;
  color: #6b7280;
  font-size: 1.1rem;
  margin-bottom: 2rem;
}

.services-grid {
  display: flex;
  flex-wrap: wrap;
  gap: 2rem;
  justify-content: center;
  margin-top: 3rem;
}
.service-card {
  background: var(--card-bg-color);
  padding: 2rem;
  border-radius: 1rem;
  text-align: center;
  box-shadow: 0 .625rem 1.875rem rgba(0,0,0,.1);
  transition: all .3s ease;
  position: relative;
  overflow: hidden;
  flex: 1 1 17.5rem;
  min-width: 17.5rem;
  max-width: 30%;
  color: inherit;
  text-decoration: none;
}
.service-card::before {
  content: "";
  position: absolute;
  top: 0; left: 0; right: 0;
  height: .25rem;
  background: linear-gradient(90deg, #6366f1, #8b5cf6);
}
.service-card:hover { transform: translateY(-.5rem); box-shadow: 0 1.25rem 2.5rem rgba(0,0,0,.15); }
.service-card h3 { font-size: 1.3rem; color: var(--card-text-color); margin: 0; font-weight: 600; }
.service-card p { color: var(--text-color); font-size: .95rem; }

/* Header de page service (intro) */
.service-header {
  text-align: center;
  padding: 0 0 1rem;
}
.service-header h1 { margin: 0; color: #1f2937; font-size: 2rem; font-weight: 700; }
.service-header p { text-align: left; font-size: 1.05rem; max-width: 48rem; margin: 0 auto 0; }

/* === CTA pleine largeur (fond en dégradé) === */
.cta-section {
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: 2rem;
  padding: 3rem 3rem;              /* fond sur toute la largeur */
  background: linear-gradient(135deg, #e2e8f0 20%, #6366f1 100%);
}
.cta-content { flex: 1 1 45%; }
.cta-image {
  flex: 1 1 45%;
  display: flex;
  justify-content: center;
  align-items: center;
}
.cta-image img { max-width: 100%; height: auto; }

/* === Recent Jobbers (règles minimales pour stabiliser le layout) === */
.recent-jobbers-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 1.25rem;
}
.jobber-card {
  background: var(--card-bg-color);
  border-radius: 1rem;
  padding: 1.25rem;
  box-shadow: 0 0.625rem 1.875rem rgba(0,0,0,.08);
  display: flex;
  gap: 1rem;
  align-items: center;
  transition: transform .2s ease, box-shadow .2s ease;
}
.jobber-card:hover { transform: translateY(-2px); box-shadow: 0 1rem 2.25rem rgba(0,0,0,.12); }

/* === Responsive minimal === */
@media (max-width: 430px) {
  .nav-links { display: none; }
  .burger { display: flex; }
  .container { padding: 0 .9375rem; }

  .hero h1 { font-size: 2rem; }
  .hero p  { font-size: 1.1rem; }

  /* Grid services cachée (carrousel non inclus en critical) */
  .services-grid { display: none; }

  /* CTA en pile */
  .cta-section {
    flex-direction: column-reverse;
    text-align: center;
    padding: 2rem 1rem;
  }
  .cta-content, .cta-image { flex: 1 1 100%; }

  /* Jobbers: pile verticale au 1er paint */
  .recent-jobbers-grid {
    display: flex;
    flex-direction: column;
    gap: 1rem;
  }
  .jobber-card { padding: 1rem; }
}

@media (min-width: 431px) and (max-width: 1024px) {
  .nav-links { display: none; }
  .burger { display: flex; }
  .container { padding: 0 .9375rem; }

  .hero h1 { font-size: 2.5rem; }
  .hero p  { font-size: 1.1rem; }

  /* Grid services cachée (carrousel non inclus en critical) */
  .services-grid { display: none; }

  /* CTA en pile, centrée */
  .cta-section {
    flex-direction: column-reverse;
    text-align: center;
    padding: 2rem 1rem;
  }
  .cta-content, .cta-image { flex: 1 1 100%; }

  /* Jobbers: 2 colonnes flexibles */
  .recent-jobbers-grid {
    grid-template-columns: repeat(2, minmax(0, 1fr));
    gap: 1rem;
  }
  .jobber-card { min-width: 0; width: 100%; }
}

/* Desktop : le reste vient de globals.css */
`;
