import '../styles/globals.css'
import type { AppProps } from 'next/app'
import ScrollObserver from '../components/utils/scroll-observer'
import SizeObserver from '../components/utils/size-observer'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <SizeObserver>
      <ScrollObserver>
        <Component {...pageProps} />
      </ScrollObserver>
    </SizeObserver>
  )
}

export default MyApp
