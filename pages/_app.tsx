import '../scss/style.scss'
import type { AppProps } from 'next/app'
import Layout from '../components/layout'

import { wrapper } from '../slice/store'



function App({ Component, pageProps }: AppProps) {



  return (

    <Layout >
      <Component {...pageProps} />
    </Layout>)

}


export default wrapper.withRedux(App)