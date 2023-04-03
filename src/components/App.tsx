import { useState } from "react";
/* import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg"; */
import { Box, Container, Stack, styled } from "@mui/system";
import { createTheme, ThemeProvider } from "@mui/material";
import { themeSettings } from "@/theme";
import Header from "./Header";
/* import HeroSection from "./HeroSection";
import Product from "./Product";
import Categories from "./Categories"; */
import Footer from "./Footer";
import Content from "./Content";
// import "@/styles/App.css";

const Theme = createTheme(themeSettings);

function App() {

  let [state, setState] = useState({})

  return (
    <ThemeProvider theme={Theme}>
      <Header />
      {/* <HeroSection />
      <Product />
      <Categories /> */}
      <Content />
      <Footer />
    </ThemeProvider>
  );
}

export default App;





{/* <Box
  component={"div"}
  sx={(theme) => {
    console.log(theme.breakpoints.down('sm'))
    return {
      color: "black",
      background: theme.palette.primary[500],
      [theme.breakpoints.down('sm')]: {
        background: theme.palette.primary[300]
      }
    }
  }}
  onClick={() => setState({})}
>
  Hello World
</Box>
<Drawer /> */}
