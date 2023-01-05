import '../scss/style.scss'
import type { AppProps } from 'next/app'
import Layout from '../components/layout'
import { wrapper } from '../slice/store'
import { ThemeProvider } from 'next-themes'
import { css, GlobalStyles } from "@mui/material";



function App({ Component, pageProps }: AppProps) {
  return (

    <ThemeProvider storageKey='theme' defaultTheme='system' enableSystem={true}>

      <GlobalStyles
        styles={globalStyles}
      />
      <Layout >
        <Component {...pageProps} />

      </Layout>


    </ThemeProvider>)

}


export default wrapper.withRedux(App)




export const globalStyles = css`
  :root {
    body {
       --bkg-primary-color: #ffffff;
      --bkg-secondary-color: #F9F9F9;
      --txt-primary-color: #454851;
      --title-secondary-color: #078080;
      --links-primary-color: #ED593C;
    }
  }
  [data-theme="dark"] {
    body {
      --bkg-primary-color: red;
      --bkg-secondary-color: #F9F9F9;
      --txt-primary-color: #454851;
      --title-secondary-color: #078080;
      --links-primary-color: blue;
    }
  }
`;

