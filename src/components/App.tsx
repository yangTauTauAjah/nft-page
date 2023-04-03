import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import Drawer from "./Drawer";
import { Box, Container, Stack, styled } from "@mui/system";
import { createTheme, ThemeProvider } from "@mui/material";
import { themeSettings } from "@/theme";
import "@/styles/App.css";

const Theme = createTheme(themeSettings);

styled;

function App() {
  return (
    <ThemeProvider theme={Theme}>
      {/* <Drawer /> */}
      <Box component={"div"} sx={{ background: (theme) => theme.palette.primary[500], color: "black" }}>
        Hello World
      </Box>
      {/* <Drawer /> */}
    </ThemeProvider>
  );
}

export default App;
