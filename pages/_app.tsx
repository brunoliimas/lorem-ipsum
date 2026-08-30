import '../styles/globals.css'
import { SpeedInsights } from '@vercel/speed-insights/next'
import type { AppProps } from 'next/app'
import Script from 'next/script'
import MaintenancePage from '../components/MaintenancePage'
import { PageTransition } from '../components/PageTransition'
import { ScrollProgressBar } from '../components/ScrollProgressBar'
import { geistMono, geistPixel, geistSans } from '../lib/fonts'
import { isMaintenanceMode } from '../lib/maintenance'
import ScrollObserver from '../components/utils/scroll-observer'
import SizeObserver from '../components/utils/size-observer'

const GA_MEASUREMENT_ID = 'G-FT095J0S8C'

function MyApp({ Component, pageProps }: AppProps) {
  const maintenance = isMaintenanceMode()

  const content = maintenance ? (
    <MaintenancePage />
  ) : (
    <SizeObserver>
      <ScrollObserver>
        <Component {...pageProps} />
      </ScrollObserver>
    </SizeObserver>
  )

  return (
    <div
      className={`${geistSans.variable} ${geistMono.variable} ${geistPixel.variable} font-sans`}
    >
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
      {content}
      <ScrollProgressBar />
      {!maintenance && <PageTransition />}
      {!maintenance && <SpeedInsights />}
    </div>
  )
}

export default MyApp
