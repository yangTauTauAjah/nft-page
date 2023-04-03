import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import Header from "./Header";
import { Box, Container, Stack, styled } from "@mui/system";
import { createTheme, ThemeProvider } from "@mui/material";
import { themeSettings } from "@/theme";
// import "@/styles/App.css";

const Theme = createTheme(themeSettings);

styled;

function App() {

  let [state, setState] = useState({})

  return (
    <ThemeProvider theme={Theme}>
      {/* <Drawer /> */}
      <Header />
      <Box
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
        // onClick={() => setState({})}
      >
        Hello World
      </Box>
      {/* <Drawer /> */}
    </ThemeProvider>
  );
}

export default App;
