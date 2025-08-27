// middleware.ts - version simplifiée avec tracking
import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

// Stockage temporaire des URLs problématiques (pour debug)
const problematicUrls = new Set<string>()

export function middleware(request: NextRequest) {
  const userAgent = request.headers.get('user-agent') || ''
  const isGooglebot = userAgent.toLowerCase().includes('googlebot')
  const url = request.nextUrl.pathname
  
  // Tracking des visites de Googlebot
  if (isGooglebot) {
    // Enregistre l'URL visitée par Googlebot
    problematicUrls.add(url)
    console.log('🤖 Googlebot visite:', url)
    console.log('📋 URLs visitées jusqu\'à présent:', Array.from(problematicUrls))
    
    // Si Googlebot accède à /api/, retourne 404 au lieu de 401
    if (url.startsWith('/api/')) {
      console.log('⚠️ Googlebot bloqué sur route API, retour 404')
      return new NextResponse(
        JSON.stringify({ 
          error: 'Not Found',
          message: 'Cette ressource n\'existe pas' 
        }),
        { 
          status: 404,
          headers: {
            'Content-Type': 'application/json',
            'X-Robots-Tag': 'noindex, nofollow'
          }
        }
      )
    }
  }
  
  // Pour les utilisateurs normaux sur /api/, retourne 401 si non autorisé
  if (url.startsWith('/api/') && !isGooglebot) {
    // Vous pouvez personnaliser cette partie selon vos besoins d'authentification
    return new NextResponse(
      JSON.stringify({ 
        error: 'Unauthorized',
        message: 'Accès non autorisé' 
      }),
      { 
        status: 401,
        headers: {
          'Content-Type': 'application/json'
        }
      }
    )
  }
  
  // Pour toutes les autres requêtes, continue normalement
  return NextResponse.next()
}

// Configuration du matcher - s'applique uniquement aux routes /api/
export const config = {
  matcher: '/api/:path*'
}