import '../styles/globals.css'
import { SpeedInsights } from '@vercel/speed-insights/next';
import type { AppProps } from 'next/app'
import Script from 'next/script'
import ScrollObserver from '../components/utils/scroll-observer'
import SizeObserver from '../components/utils/size-observer'

const GA_MEASUREMENT_ID = 'G-FT095J0S8C'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <SizeObserver>
      <ScrollObserver>
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
        <Component {...pageProps} />
        <SpeedInsights />
      </ScrollObserver>
    </SizeObserver>
  )
}

export default MyApp
