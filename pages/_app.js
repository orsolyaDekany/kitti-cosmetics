import Layout from "../components/layout";
import "./styles.scss";
import { createTheme } from "@material-ui/core/styles";
import { ThemeProvider } from "@material-ui/styles";

const theme = createTheme({
  typography: {
    fontFamily: [
      "Playfair Display",
      "Roboto",
      "Helvetica Neue",
      "Arial",
      "sans-serif",
      "Satisfy",
    ].join(","),
  },
});

function myApp({ Component, pageProps }) {
  return (
    <ThemeProvider theme={theme}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ThemeProvider>
  );
}

export default myApp;
