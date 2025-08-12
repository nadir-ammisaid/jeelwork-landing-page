export const criticalCSS = `
:root{--bg-color:#f8f9fa;--text-color:#333;--card-bg-color:white;--card-text-color:#1f2937}
*{box-sizing:border-box}
body{margin:0;padding:0;font-family:"Segoe UI",Tahoma,Geneva,Verdana,sans-serif;line-height:1.6;color:var(--text-color);background:var(--bg-color)}
.container{max-width:75rem;margin:0 auto;padding:0 1.25rem}
header{background:white;box-shadow:0 .125rem .625rem rgba(0,0,0,.1);position:sticky;top:0;z-index:100}
.navbar{display:flex;justify-content:space-between;align-items:center;padding:1rem 0}
.logo{font-size:1.8rem;font-weight:800;color:#5359a7;display:flex;align-items:center;gap:.5rem;text-decoration:none}
.logo img{width:1.9rem;height:1.9rem;background:white;border-radius:50%;box-shadow:0 0 0 1px #fff}
.nav-links{display:flex;list-style:none;gap:2rem;margin:0;padding:0}
.nav-links a{font-weight:500;color:#4b5563;text-decoration:none;transition:color .3s ease}
.nav-links a:hover{color:#6366f1}
.hero{background:url("/images/artisanat.avif") center/cover no-repeat;position:relative;color:white;text-align:center;padding:2rem 0;overflow:hidden;will-change:auto;contain:layout style paint}
.hero::before{content:"";position:absolute;inset:0;background:rgba(0,0,0,.4);z-index:1;will-change:opacity}
.hero-content{position:relative;text-shadow:0 2px 6px rgba(0,0,0,.7);z-index:2}
.hero-content p{text-shadow:2px 0 0 #000,-2px 0 0 #000,0 2px 0 #000,0 -2px 0 #000,1px 1px 0 #000,-1px -1px 0 #000,1px -1px 0 #000,-1px 1px 0 #000}
.hero h1{font-size:3.5rem;margin-bottom:1rem;font-weight:800;line-height:1.2}
.hero p{font-size:1.4rem;margin-bottom:2rem}
.btn{background:linear-gradient(135deg,#6366f1,#8b5cf6);color:white;padding:1rem;min-width:17rem;border:none;border-radius:.75rem;display:inline-block;cursor:pointer;font-size:1em;font-weight:600;text-align:center;text-decoration:none;transition:all .3s ease;box-shadow:0 .25rem 1.9375rem rgba(255,255,255,.6)}
.btn:hover{transform:translateY(-.125rem);box-shadow:0 .5rem 1.5625rem rgba(99,102,241,.4);color:white}
.burger{display:none;flex-direction:column;cursor:pointer;padding:.5rem;z-index:101;background:none;border:none}
.burger-line{width:2rem;height:.2rem;background-color:#5359a7;margin:.1875rem 0;transition:.3s;border-radius:.1875rem}
@media(max-width:430px){.hero{background:url("/images/artisanat-mobile.avif") center/cover no-repeat}.hero h1{font-size:2rem}.hero p{font-size:1.1rem}.nav-links{display:none}.burger{display:flex}.container{padding:0 .9375rem}}
@media(min-width:431px) and (max-width:1024px){.hero h1{font-size:2.5rem}.hero p{font-size:1.1rem}.nav-links{display:none}.burger{display:flex}.container{padding:0 .9375rem}}
`