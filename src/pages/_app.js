import { ChakraProvider } from "@chakra-ui/react";
import "@/styles/globals.css";
import Layout from "@/components/Layout";
import { theme } from "@/styles/theme";

export default function App({ Component, pageProps }) {
  return (
    <ChakraProvider theme={theme}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ChakraProvider>
  );
}
