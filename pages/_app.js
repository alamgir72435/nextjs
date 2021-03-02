import App, { Container } from "next/App";

function MyApp({ Component, pageProps }) {
    
  return (
    <Container>
      <h1>Hello From app</h1>
      <Component {...pageProps} />
    </Container>
  );
}

MyApp.getInitialProps = async (appContext) => {
  // calls page's `getInitialProps` and fills `appProps.pageProps`
  const appProps = await App.getInitialProps(appContext);
  return { ...appProps };
};

export default MyApp;
