// import App from "next/App";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <h1>Hello From app</h1>
      <Component {...pageProps} />
    </>
  );
}

MyApp.getInitialProps = async (appContext) => {
  // calls page's `getInitialProps` and fills `appProps.pageProps`
  const appProps = await App.getInitialProps(appContext);
  return { ...appProps };
};

export default MyApp;
