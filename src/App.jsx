import { CssBaseline } from "@mui/material";
import { useSelector } from "react-redux";
import ThemeProvider from "./theme/index";
import { BrowserRouter } from "react-router-dom";
import Router from "./Router";
function App() {
  return (
    <BrowserRouter>
      <ThemeProvider>
        <CssBaseline>
          <Router />
        </CssBaseline>
      </ThemeProvider>
    </BrowserRouter>
  );
}

export default App;
