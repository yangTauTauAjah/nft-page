import HeroSection from "./HeroSection";
import Product from "./Product";
import Categories from "./Categories";
import { Box, Container, Stack, styled } from "@mui/system";

const Main = styled("div")({
  display: "flex",
  flexDirection: 'column',
  gap: '100px',
  alignItems: 'center',
  width: "90%",
  marginInline: "auto",
  background: "rgba(0,0,0,.1)"
});

function Content() {
  return (
    <Main>
      <HeroSection />
      <Product />
      <Categories />
    </Main>
  )
}

export default Content