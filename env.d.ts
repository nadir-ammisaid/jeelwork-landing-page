// env.d.ts
declare namespace NodeJS {
  interface ProcessEnv {
    NEXT_PUBLIC_GA_ID?: string;
    // ajoute ici d'autres variables si besoin
  }
}
