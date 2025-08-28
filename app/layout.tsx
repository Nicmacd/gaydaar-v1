import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Gaydaar V1',
  description: 'Simple scrollable list with photos and names',
  openGraph: {
    title: 'Gaydaar V1',
    description: 'Simple scrollable list with photos and names',
    url: 'https://gaydaar-v1.vercel.app',
    siteName: 'Gaydaar V1',
    images: [
      {
        url: '/images/og-image.jpeg',
        width: 1200,
        height: 630,
        alt: 'Gaydaar V1 Preview',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Gaydaar V1',
    description: 'Simple scrollable list with photos and names',
    images: ['/images/og-image.jpeg'],
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="bg-black text-white min-h-screen">
        {children}
      </body>
    </html>
  )
}
