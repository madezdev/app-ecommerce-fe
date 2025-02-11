import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'MSolar | Tienda Online',
  description: 'Compra paneles solares y soluciones de energía renovable al mejor precio. Energía limpia y sostenible para tu hogar o empresa.',
  keywords: 'energía solar, paneles solares, energía renovable, tienda solar, baterías solares',
  openGraph: {
    title: 'Mercado Solar | Tienda Online de Paneles Solares',
    description: 'Descubre la mejor tecnología en energía solar para tu hogar o negocio. Compra paneles solares, baterías y más.',
    url: 'https://tu-dominio.com',
    type: 'website',
    images: [
      {
        url: 'https://tu-dominio.com/imagen-opengraph.jpg',
        width: 1200,
        height: 630,
        alt: 'Energía Solar - Tienda Online',
      },
    ],
  }
}

export default function RootLayout ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className='bg-[#FAF8F5]'>
        {children}
      </body>
    </html>
  )
}
