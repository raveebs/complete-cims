import { CssBaseline, ThemeProvider } from "@mui/material";
import { BrowserRouter } from "react-router-dom";
import AppContainer from "./components/layouts/AppContainer";
import AuthenticationRouter from "./components/middleware/AuthenticationRouter";
import ErrorHandler from "./components/middleware/ErrorHandler";
import usePreference from "./hooks/use-preference";
import appTheme from "./style/theme";

const App = () => {
  const {
    preference: { paletteMode },
  } = usePreference();

  return (
    <ThemeProvider theme={appTheme(paletteMode)}>
      <CssBaseline />
      <BrowserRouter>
        {/** The ErrorHandler displays the error messages if any and prevents loading children  */}
        <ErrorHandler>
          {/** The AuthenticationRouter routes to the login page if Authstate is unauthnticated  */}
          <AuthenticationRouter>
            {/** The AppContainer renders the app in case there are no errors and the user is authenticated */}
            <AppContainer />
          </AuthenticationRouter>
        </ErrorHandler>
      </BrowserRouter>
    </ThemeProvider>
  );
};
export default App;
