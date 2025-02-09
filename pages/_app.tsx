import type { AppProps } from 'next/app'
import "../styles/globals.css";



export default function MyApp({ Component, pageProps }: AppProps) {
  return (

    <>
      <header>
      </header>
      <main>
        <Component {...pageProps} />
      </main>

      <footer>
      </footer>
    </>

  )
}

