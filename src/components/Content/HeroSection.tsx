import {useState, useRef, useEffect, useCallback} from 'react'
import { styled } from "@mui/system";
import { Button } from "@mui/material";
import { useTheme, Box, Stack } from "@mui/material";
import Search from '@/assets/images/Icon/Search.png'
import { Banner as Imgs } from '@/mockData'

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
  display: 'flex',
  gap: '1rem',
  justifyContent: 'center',
  alignItems: 'center',
  textTransform: "initial",
  width: "22.5rem",
  height: "3.5rem",
  borderRadius: "3.5rem",
  fontSize: '1rem',
  background: [
    `rgb(255,255,255);`,
    `linear-gradient(163deg, rgba(240,240,240,0.5) 0%, rgba(255,255,255,0.1) 100%);`
  ],
  border: 'solid rgba(255,255,255,0.5) 1.5px',
  color: 'rgba(255,255,255, 0.5)'
});

let firstRender = 0

function HeroSection() {

  const [Banner, setBanner] = useState([
    {id: 0, url: Imgs[0], top: '-50%', left: '0', width: '100%'},
    {id: 1, url: Imgs[1], top: '0', left: '-50%', height: '100%'},
    {id: 2, url: Imgs[2], top: '0', left: '0', width: '100%'},
    {id: 3, url: Imgs[3], top: '0', left: '-30%', height: '100%'}
  ])
  const BannerWrapper = useRef<HTMLDivElement>(null)

  useEffect(() => {

    if (firstRender === 1) {
      const id = setInterval(() => {

        const animation = new Animation(new KeyframeEffect(BannerWrapper.current, { left: '-100%' }, { duration: 1000, easing: 'cubic-bezier(0.22, 0.61, 0.36, 1)' }), document.timeline)
  
        animation.onfinish = () => {
          const firstSlide = BannerWrapper.current?.children.item(1)
          if (firstSlide) {
            BannerWrapper.current?.removeChild(firstSlide)
            BannerWrapper.current?.appendChild(firstSlide)
          }
        }
        animation.play()
        
      }, 3000)
      return () => clearInterval(id)
    }

    if (firstRender === 0) firstRender = 1
  }, [])
  
  const Theme = useTheme()

  return (
    <Main>
      <Stack ref={BannerWrapper} direction='row'
        style={{
          position: "absolute",
          top: 0,
          width: "400%",
          height: "100%",
          overflow: 'hidden',
          left: '0%'
        }}
      >
        <div style={{ position: 'absolute', width: '100%', height: '100%', background: 'rgba(3, 10, 35, 0.8)', top: 0 }} />
        {
          // @ts-ignore
          Banner.map(({id, url, top, left, width, height}) => (
              <div key={id} style={{ width: '25%', height: '100%', overflow: 'hidden' }}>
                <img style={{ zIndex: -1, top, left, width, height }} src={url} />
              </div>
          ))
        }
      </Stack>
      <Hero>
        <Box component='h1' sx={{
          /* @ts-ignore */
          background: `linear-gradient(to bottom, ${Theme.palette.primary[800]}, ${Theme.palette.primary[500]})`,
          WebkitTextFillColor: 'transparent',
          WebkitBackgroundClip: 'text',
          textAlign: "center",
          fontSize: 100,
        }}>Collect Your NFTs Here!</Box >
        <ExtendedButton>
          <img src={Search} style={{ height: '60%' }} />
          <p>Find your NFT</p>
        </ExtendedButton>
      </Hero>
    </Main>
  );
}

export default HeroSection;

//linear-gradient(164deg, rgba(255,255,255,0.6965161064425771) 0%, rgba(241,241,241,1) 41%, rgba(200,200,200,0.5256477591036415) 100%);
