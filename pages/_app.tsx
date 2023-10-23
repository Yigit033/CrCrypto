import '@/styles/globals.css'
import '@/node_modules/react-modal-video/scss/modal-video.scss';
import type { AppProps } from 'next/app'

export default function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}
