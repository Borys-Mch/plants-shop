import { extendTheme } from "@chakra-ui/react";

export const theme = extendTheme({
  styles: {
    global: {
      body: {
        fontFamily: "Work Sans",
        lineHeight: "base",
      },
    },
  },
  sizes: {
    container: {
      "2xl": "1488px",
    },
  },
  components: {
    Heading: {
      variants: {
        footer: {
          color: "#FFF",
          fontSize: "24px",
          fontWeight: "700",
          lineHeight: "2.1",
          paddingTop: "20px",
        },
      },
    },
    Text: {
      variants: {
        footer: {
          color: "#FFF",
          fontSize: "16px",
          fontWeight: "500",
          lineHeight: "1.5",
          paddingTop: "16px",
        },
      },
    },
  },
});
