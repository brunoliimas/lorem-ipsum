import { SpeedInsights } from '@vercel/speed-insights/next'
import type { Metadata, Viewport } from 'next'
import Script from 'next/script'
import MaintenancePage from '../components/MaintenancePage'
import { PageTransition } from '../components/PageTransition'
import { ScrollProgressBar } from '../components/ScrollProgressBar'
import { SiteLoader } from '../components/SiteLoader'
import { geistMono, geistPixel, geistSans } from '../lib/fonts'
import { isMaintenanceMode } from '../lib/maintenance'
import '../styles/globals.css'

const GA_MEASUREMENT_ID = 'G-FT095J0S8C'

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
}

export const metadata: Metadata = {
  icons: {
    icon: '/favicon.svg',
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const maintenance = isMaintenanceMode()

  return (
    <html
      lang="pt-BR"
      className={`${geistSans.variable} ${geistMono.variable} ${geistPixel.variable}`}
    >
      <body className="font-sans">
        <Script
          src={`https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`}
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${GA_MEASUREMENT_ID}');
          `}
        </Script>

        {maintenance ? <MaintenancePage /> : children}

        {!maintenance && (
          <>
            <SiteLoader />
            <ScrollProgressBar />
            <PageTransition />
            <SpeedInsights />
          </>
        )}
      </body>
    </html>
  )
}
