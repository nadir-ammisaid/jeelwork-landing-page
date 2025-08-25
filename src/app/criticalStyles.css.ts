// criticalStyles.css.ts
export const criticalCSS = `
:root{--header-h:4.82rem;--text-color:#333}
*{box-sizing:border-box}
body{margin:0;padding:0;line-height:1.6;font-family:"Segoe UI",Tahoma,Geneva,Verdana,sans-serif;color:var(--text-color);background:#f8f9fa}
.container{max-width:75rem;margin:0 auto;padding:0 1.25rem}
.site-header{background:#fff;position:sticky;top:0;z-index:100;box-shadow:0 .125rem .625rem rgba(0,0,0,.1)}
.navbar{display:flex;justify-content:space-between;align-items:center;padding:1rem 0}
.logo{display:flex;align-items:center;gap:.5rem;font-size:1.8rem;font-weight:800;color:#5359a7}
.hero{position:relative;color:#fff;text-align:center;padding:2rem 0;min-height:60vh;display:grid;place-items:center}
.hero-bg{position:absolute;inset:0;z-index:0}
.hero-bg img{width:100%;height:100%;object-fit:cover}
.hero::before{content:"";position:absolute;inset:0;background:rgba(0,0,0,.4);z-index:1}
.hero-content{position:relative;z-index:2;text-shadow:0 2px 6px rgba(0,0,0,.7)}
.hero h1{font-size:3.5rem;margin:0 0 1rem;font-weight:800;line-height:1.2}
.hero p{font-size:1.4rem;margin:0 0 2rem}
.btn{background:linear-gradient(135deg,#6366f1,#8b5cf6);color:#fff;padding:1rem;min-width:17rem;border:none;border-radius:.75rem;display:inline-block;cursor:pointer;font-size:1em;font-weight:600;text-align:center;text-decoration:none;transition:all .3s ease;box-shadow:0 .25rem 1.9375rem rgba(255,255,255,.6)}
@media (max-width:430px){.container{padding:0 .9375rem}.hero h1{font-size:2rem}.hero p{font-size:1.1rem}}
@media (min-width:430px) and (max-width:1024px){.container{padding:0 .9375rem}.hero h1{font-size:2.5rem}.hero p{font-size:1.1rem}}
`;