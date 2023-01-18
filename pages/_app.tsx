import '../scss/style.scss'
import type { AppProps } from 'next/app'
import Layout from '../components/layout'
import { wrapper } from '../slice/store'
import { ThemeProvider } from 'next-themes'
import { Provider } from "react-redux";
import { css, GlobalStyles } from "@mui/material";

/* console.log = () => { } */


function App({ Component, pageProps, ...rest }: AppProps) {
  const { store, props } = wrapper.useWrappedStore(rest);
  return (

    <ThemeProvider storageKey='theme' defaultTheme='system' enableSystem={true}>

      <GlobalStyles
        styles={globalStyles}
      />
      <Provider store={store}>
        <Layout >
          <Component {...pageProps} />

        </Layout>
      </Provider>
    </ThemeProvider >

  )

}


export default App




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
      --bkg-rgpd-color: rgba(0, 0, 0, 0.8);
    }
  }
  [data-theme="dark"] {
    body {
      --bkg-rgpd-color: rgba(255, 255, 255, 0.8);

      --bkg-primary-color: #1F1F35;
      --bkg-secondary-color: #24243b;
      --txt-secondary-color:#ffffff;
      --txt-primary-color:#ffffff;
      --title-secondary-color: #078080;
      --table-border-color: #ffffff
    }
  }
`;

