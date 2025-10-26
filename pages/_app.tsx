import '../styles/globals.css'
import { SpeedInsights } from '@vercel/speed-insights/next';
import type { AppProps } from 'next/app'
import ScrollObserver from '../components/utils/scroll-observer'
import SizeObserver from '../components/utils/size-observer'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <SizeObserver>
      <ScrollObserver>
        <Component {...pageProps} />
        <SpeedInsights />
      </ScrollObserver>
    </SizeObserver>
  )
}

export default MyApp
