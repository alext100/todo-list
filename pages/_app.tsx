import lightTheme from "@/styles/theme/lightTheme";
import { UserProvider } from "@auth0/nextjs-auth0";
import { CacheProvider, EmotionCache } from "@emotion/react";
import { CssBaseline, ThemeProvider } from "@mui/material";
import type { AppProps } from "next/app";
import { SnackbarProvider } from "notistack";
import PropTypes from "prop-types";
import { Provider } from "react-redux";
import "../styles/globals.css";
import configureStore from "redux/store";
import createEmotionCache from "../utility/createEmotionCache";

interface ToDoAppProps extends AppProps {
  emotionCache?: EmotionCache;
}

const store = configureStore();

const clientSideEmotionCache = createEmotionCache();

function ToDoApp(props: ToDoAppProps) {
  const { Component, emotionCache = clientSideEmotionCache, pageProps } = props;
  return (
    <Provider store={store}>
      <CacheProvider value={emotionCache}>
        <ThemeProvider theme={lightTheme}>
          <SnackbarProvider maxSnack={3}>
            <CssBaseline />
            <UserProvider>
              <Component {...pageProps} />
            </UserProvider>
          </SnackbarProvider>
        </ThemeProvider>
      </CacheProvider>
    </Provider>
  );
}

export default ToDoApp;

ToDoApp.propTypes = {
  Component: PropTypes.elementType.isRequired,
  emotionCache: PropTypes.object,
  pageProps: PropTypes.object.isRequired,
};
