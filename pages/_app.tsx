import '../scss/style.scss'
import type { AppProps } from 'next/app'
import Layout from '../components/layout'
import { wrapper } from '../slice/store'
import { ThemeProvider } from 'next-themes'




function App({ Component, pageProps }: AppProps) {
  return (

    <ThemeProvider storageKey='theme' defaultTheme='system' enableSystem={true}>


      <Layout >
        <Component {...pageProps} />

      </Layout>)


    </ThemeProvider>)

}


export default wrapper.withRedux(App)
