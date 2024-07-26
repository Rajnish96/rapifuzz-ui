import './App.css';
import CssBaseline from '@mui/material/CssBaseline';
import { StyledEngineProvider, ThemeProvider } from "@mui/material/styles";
import theme from "./config/theme";
import RootNavigation from "./routes/RouteNavigation";

function App() {
  return (
    <StyledEngineProvider injectFirst>
      <CssBaseline />
      <ThemeProvider theme={theme}>
        <RootNavigation />
      </ThemeProvider>
    </StyledEngineProvider>
  );
}

export default App;
