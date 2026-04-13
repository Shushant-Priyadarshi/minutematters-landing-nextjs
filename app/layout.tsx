import type { Metadata } from 'next'
import "./globals.css"

export const metadata: Metadata = {
  title: 'MinuteMatters — Every Minute Counts',
  description: 'Book doctors and salons instantly. No waiting, no hassle. Your time is precious.',
  keywords: 'MinuteMatters, book doctor, book salon, appointment booking, instant booking, healthcare, beauty',
  authors: [{ name: 'MinuteMatters' }],
  robots: 'index, follow',
  openGraph: {
    title: 'MinuteMatters — Every Minute Counts',
    description: 'Book doctors and salons instantly. No waiting, no hassle. Your time is precious.',
    type: 'website',
    url: 'https://minutematters.in',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'MinuteMatters — Every Minute Counts',
    description: 'Book doctors and salons instantly. No waiting, no hassle.',
  },
  alternates: {
    canonical: 'https://minutematters.in',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=DM+Sans:ital,opsz,wght@0,9..40,300;0,9..40,400;0,9..40,500;1,9..40,300&display=swap"
          rel="stylesheet"
        />
        <link rel="icon" href="/logo.png" type="image/png" />
      </head>
      <body>{children}</body>
    </html>
  )
}
