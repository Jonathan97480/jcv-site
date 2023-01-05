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
      --txt-secondary-color:#ffffff;
      --title-secondary-color: #078080;
      --links-primary-color: #ED593C;
      --links-txt-primary-color:#ffffff;
      --table-border-color: #454851;
    }
  }
  [data-theme="dark"] {
    body {
      --bkg-primary-color: #1F1F35;
      --bkg-secondary-color: #24243b;
      --txt-secondary-color:#ffffff;
      --txt-primary-color:#ffffff;
      --title-secondary-color: #078080;
      --table-border-color: #ffffff
    }
  }
`;

