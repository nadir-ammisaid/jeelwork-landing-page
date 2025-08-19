export const criticalCSS = `
:root {
  --header-h: 4.82rem;
  --bg-color: #f8f9fa;
  --text-color: #333;
  --card-bg-color: white;
  --card-text-color: #1f2937;
}

* { box-sizing: border-box; }

/* Fix offset des ancres à cause du header sticky */
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
a:hover { color: #5359a7; }

/* === Header global (navbar) === */
.site-header {
  background: #fff;
  box-shadow: 0 .125rem .625rem rgba(0,0,0,.1);
  position: sticky;
  top: 0;
  z-index: 100;
}

.navbar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 0;
}

.logo {
  font-size: 1.8rem;
  font-weight: 800;
  color: #5359a7;
  display: flex;
  align-items: center;
  gap: .5rem;
  text-decoration: none;
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

.nav-links a {
  font-weight: 500;
  color: #323840;
  transition: color .3s ease;
}
.nav-links a:hover { color: #5359a7; }

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

/* Hero (au-dessus de la ligne de flottaison) */
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
.hero::before { content: ""; position: absolute; inset: 0; background: rgba(0,0,0,.4); z-index: 1; }

.hero-content { position: relative; z-index: 2; text-shadow: 0 2px 6px rgba(0,0,0,.7); }

.hero h1 {
  font-size: 3.5rem;
  margin-bottom: 1rem;
  font-weight: 800;
  line-height: 1.2;
}
.hero p { font-size: 1.4rem; margin-bottom: 2rem; }

/* Bouton principal */
.btn {
  background: linear-gradient(135deg, #5359a7, #8b5cf6);
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
  /* (optionnel) la teinte reste celle d'origine en shadow */
  box-shadow: 0 .5rem 1.5625rem rgba(99,102,241,.4);
  color: #fff;
}

/* Services (grille visible desktop) */
.services { padding: 1rem 0; background: #fff; }
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
  background: linear-gradient(90deg, #5359a7, #8b5cf6);
}
.service-card:hover {
  transform: translateY(-.5rem);
  box-shadow: 0 1.25rem 2.5rem rgba(0,0,0,.15);
}
.service-card h3 {
  font-size: 1.3rem;
  color: var(--card-text-color);
  margin: 0;
  font-weight: 600;
}
.service-card p { color: var(--text-color); font-size: .95rem; }

/* Header de page service (non sticky) */
.service-header h1 {
  text-align: center;
  margin: 0;
  color: #1f2937;
  font-size: 2rem;
  font-weight: 700;
}
.service-header p {
  text-align: center;
  color: #6b7280;
  font-size: 1.05rem;
  margin: 0 auto 2rem;
  max-width: 48rem;
}

/* Responsive */
@media (max-width: 430px) {
  .hero h1 { font-size: 2rem; }
  .hero p { font-size: 1.1rem; }
  .nav-links { display: none; }
  .burger { display: flex; }
  .container { padding: 0 .9375rem; }

  /* Grid services cachée, carrousel visible (styles de base) */
  .services-grid { display: none; }
}

@media (min-width: 430px) and (max-width: 1024px) {
  .hero h1 { font-size: 2.5rem; }
  .hero p { font-size: 1.1rem; }
  .nav-links { display: none; }
  .burger { display: flex; }
  .container { padding: 0 .9375rem; }

  .services-grid { display: none; }
}
`;
