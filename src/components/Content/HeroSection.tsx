import { styled } from "@mui/system";
import { Button } from "@mui/material";
import img2 from '@/assets/images/img2.png'
import { useTheme, Box } from "@mui/material";

const Main = styled("div")({
  display: "flex",
  flexDirection: 'column-reverse',
  justifyContent: 'space-between',
  alignItems: 'center',
  width: "100%",
  aspectRatio: "12/6",
  borderRadius: '0 0 20px 20px',
  overflow: 'hidden',
});

const Hero = styled("div")({
  display: "flex",
  width: "665px",
  fontSize: '1.3rem',
  marginBottom: '4rem',
  flexDirection: "column",
  gap: '2.5rem',
  alignItems: "center",
});

const ExtendedButton = styled(Button)({
  textTransform: "initial",
  width: "22.5rem",
  height: "3.5rem",
  borderRadius: "3.5rem",
  fontSize: '0.9rem',
  background: [
    `rgb(255,255,255);`,
    `linear-gradient(163deg, rgba(240,240,240,0.5) 0%, rgba(255,255,255,0.1) 100%);`
  ],
  border: 'solid rgba(255,255,255,0.5) 1.5px',
  color: 'rgba(255,255,255, 0.5)'
});

function HeroSection() {

  const Theme = useTheme()

  return (
    <Main>
      <div
        style={{
          position: "absolute",
          top: 0,
          width: "100%",
          height: "100%",
        }}
      >
        <div style={{ position: 'absolute', width: '100%', height: '100%', background: 'rgba(3, 10, 35, 0.8)', top: 0 }} />
        <img style={{ zIndex: -1, width: '100%', top: '-50%' }} src={img2} />
      </div>
      <Hero>
        <Box component='h1' sx={{
          /* @ts-ignore */
          background: `linear-gradient(to bottom, ${Theme.palette.primary[800]}, ${Theme.palette.primary[500]})`,
          WebkitTextFillColor: 'transparent',
          WebkitBackgroundClip: 'text',
          textAlign: "center",
          fontSize: 100,
        }}>Collect Your NFTs Here!</Box >
        <ExtendedButton>Find your NFT</ExtendedButton>
      </Hero>
    </Main>
  );
}

export default HeroSection;

//linear-gradient(164deg, rgba(255,255,255,0.6965161064425771) 0%, rgba(241,241,241,1) 41%, rgba(200,200,200,0.5256477591036415) 100%);
