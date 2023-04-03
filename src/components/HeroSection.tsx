import React from "react";
import { Box, Container, Stack, styled } from "@mui/system";
// import { Button, Link } from "@mui/material";

const Main = styled("div")({
  display: "flex",
  flexDirection: 'column',
  justifyContent: 'space-between',
  alignItems: 'center',
  width: "90%",
  aspectRatio: "12/6",
  marginInline: "auto",
  background: "rgba(0,0,0,.4)"
});

const Hero = styled("div")({
  display: "flex",
  width: "665px",
  fontSize: '1.3rem',
  marginBottom: '4rem',
  flexDirection: "column",
  gap: '2.5rem',
  alignItems: "center"
});

const Button = styled("button")({
  width: "22.5rem",
  height: "3.5rem",
  borderRadius: "3.5rem",
  fontSize: '0.9rem',
  background: [
    `rgb(255,255,255);`,
    `linear-gradient(163deg, rgba(240,240,240,0.25) 0%, rgba(255,255,255,0) 100%);`
  ],
  color: 'rgba(255,255,255, 0.5)'
});

function HeroSection() {
  return (
    <Main>
      <div
        style={{
          position: "absolute",
          top: 0,
          width: "100%",
          height: "100%"
        }}
      ></div>
      <div></div>
      <Hero>
        <h1 style={{ textAlign: "center" }}>Collect Your NFTs Here!</h1>
        <Button>Find your NFT</Button>
      </Hero>
    </Main>
  );
}

export default HeroSection;

//linear-gradient(164deg, rgba(255,255,255,0.6965161064425771) 0%, rgba(241,241,241,1) 41%, rgba(200,200,200,0.5256477591036415) 100%);