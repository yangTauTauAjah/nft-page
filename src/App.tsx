import { createTheme, ThemeProvider, CssBaseline } from "@mui/material";
import { themeSettings } from "@/theme";
import Header from "./Layout/Header";
import Footer from "./Layout/Footer";
import Content from "./Layout/Content";

const Theme = createTheme(themeSettings);

function App() {
  return (
    <ThemeProvider theme={Theme}>
      <CssBaseline  />
      <Header />
      <Content />
      <Footer />
    </ThemeProvider>
  );
}

export default App;
