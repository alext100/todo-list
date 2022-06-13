import { UserProvider } from "@auth0/nextjs-auth0";
import { CacheProvider, EmotionCache } from "@emotion/react";
import { CssBaseline, ThemeProvider } from "@mui/material";
import type { AppProps } from "next/app";
import PropTypes from "prop-types";
import "../styles/globals.css";
import lightTheme from "../styles/theme/lightTheme";
import createEmotionCache from "../utility/createEmotionCache";

interface ToDoAppProps extends AppProps {
  emotionCache?: EmotionCache;
}

const clientSideEmotionCache = createEmotionCache();

function ToDoApp(props: ToDoAppProps) {
  const { Component, emotionCache = clientSideEmotionCache, pageProps } = props;
  return (
    <CacheProvider value={emotionCache}>
      <ThemeProvider theme={lightTheme}>
        <CssBaseline />
        <UserProvider>
          <Component {...pageProps} />
        </UserProvider>
      </ThemeProvider>
    </CacheProvider>
  );
}

export default ToDoApp;

ToDoApp.propTypes = {
  Component: PropTypes.elementType.isRequired,
  emotionCache: PropTypes.object,
  pageProps: PropTypes.object.isRequired,
};
