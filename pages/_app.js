import Layout from "../components/layout";
import { Inter } from "@next/font/google";
import "./styles.scss";

const inter = Inter({
  subsets: ["Raleway, sans-serif"],
});

function myApp({ Component, pageProps }) {
  return (
    <main className={inter.className}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </main>
  );
}

export default myApp;
