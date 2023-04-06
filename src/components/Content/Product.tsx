import { useRef, useEffect } from "react";
import { styled } from "@mui/system";
import { Button, Link, Avatar, Stack, Box } from "@mui/material";
import { newAuction, topSeller } from "@/mockData";
import { useTheme } from "@mui/material";
import EndingSoon from '@/assets/images/NewAuction/endingSoon.png'
import Fire from '@/assets/images/Icon/Fire.png'
import Checklist from '@/assets/images/Icon/Checklist.png'
import RightArrow from '@/assets/images/Icon/RightArrow.png'

const Recommendation = styled("div")({
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  width: "100%"
});

const BigCard = styled("div")({
  borderRadius: "2rem",
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-between",
  width: "40vw",
  aspectRatio: "0.674",
  padding: "40px"
});

const Card = styled("div")({
  display: "flex",
  gap: "20px",
  borderRadius: "12px",
  alignItems: "center",
  padding: "20px",
  width: "30.5vw",
  aspectRatio: "3.142",
  fontSize: "1rem"
});

interface LongCardPropsInterface {
  image: string;
  title: string;
  eth: number;
  time: string;
}

const LongCard = (props: LongCardPropsInterface) => {

  const Theme = useTheme()

  return (
    <Card sx={{ background: `linear-gradient(to bottom, rgba(240, 240, 240, 0.1) 0%, rgba(255, 255, 255, 0.02) 100%);` }}>
      <div
        style={{
          height: "100%",
          aspectRatio: 1,
          background: "rgba(0,0,0,0.3)",
          borderRadius: "12px",
          overflow: 'hidden',
          flexShrink: 0
        }}
      >
        <img src={props.image} style={{ height: '100%' }} />
      </div>
      <div style={{ flexGrow: 1 }}>
        <h3 style={{ fontSize: "1.1rem" }}>{props.title}</h3>
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <p style={{ fontSize: "1rem", fontWeight: 600 }}>{props.eth} ETH</p>
          <p style={{ fontSize: "1rem", fontWeight: 600, color: Theme.palette.primary.main }}>{props.time}</p>
        </div>
      </div>
    </Card>
  );
};

let time = 45242000;
let first = 0;

function Product() {
  const ref = useRef<HTMLHeadingElement>(null);
  const Theme = useTheme()

  useEffect(() => {
    if (ref.current?.innerText && first === 1) {
      let id = setInterval(() => {
        const timer = new Date((time -= 1000));
        // @ts-ignore
        ref.current.innerText = `${timer.getUTCHours()}:${timer.getUTCMinutes()}:${timer
          .getUTCSeconds()
          .toString()
          .padStart(2, "0")}`;
      }, 1000);
      return () => clearInterval(id);
    }
    if (first === 0) first = 1;
  }, []);

  return (
    <Stack gap={10} sx={{
      width: "80vw",
      marginInline: "auto",
      color: 'white',
    }}>
      <Recommendation>
        <BigCard sx={{
          /* @ts-ignore */
          background: `linear-gradient(to bottom, ${Theme.palette.primary[500]}30 0%, ${Theme.palette.primary[500]}06 100%)`
        }}>
          <Stack direction='row' sx={{ alignItems: 'center', gap: '1rem' }}>
            <img src={Fire} style={{ height: '100%' }} />
            <h3 style={{ fontSize: 32, marginRight: 'auto' }}>Item ending soon</h3>
            <Box component='img' src={RightArrow} sx={{
              height: '80%',
              '&:hover': {
                cursor: 'pointer'
              }
            }} />
          </Stack>
          <div
            style={{
              borderRadius: "0.7rem",
              width: "auto",
              aspectRatio: 1.314,
              background: "rgba(0,0,0,0.3)",
              overflow: 'hidden'
            }}
          >
            <img src={EndingSoon} style={{ width: '100%' }} />
          </div>
          <div>
            <h3 style={{ fontSize: 26 }}>Hurricane (Common Body)</h3>
            <Stack direction='row' sx={{ fontSize: '1rem', alignItems: 'center', gap: '1rem', fontWeight: 600 }}>
              <p>by Spider Tanks</p>
              <img src={Checklist} style={{ height: '10%' }} />
            </Stack>
          </div>
          <div
            style={{
              display: "flex",
              justifyContent: "space-between"
            }}
          >
            <div>
              {/* @ts-ignore */}
              <p style={{ fontSize: '1.25rem', fontWeight: 600, color: Theme.palette.primary[600] }}>Current bid</p>
              <h3 style={{ marginTop: '0.5rem', fontSize: 32 }}>0.0079 ETH</h3>
            </div>
            <div style={{ textAlign: "end" }}>
              {/* @ts-ignore */}
              <p style={{ fontSize: '1.25rem', fontWeight: 600, color: Theme.palette.primary[600] }}>Remaining Time</p>
              <h3 ref={ref} style={{ marginTop: '0.5rem', fontSize: 32 }}>
                12:34:02
              </h3>
            </div>
          </div>
          <div
            style={{
              display: "flex",
              justifyContent: "space-between"
            }}
          >
            <Button
              style={{
                fontSize: "1rem",
                width: "200px",
                height: "60px",
                borderRadius: "60px"
              }}
              variant="contained"
            >
              Place a bid
            </Button>
            <Button
              style={{
                fontSize: "1rem",
                width: "200px",
                height: "60px",
                borderRadius: "60px"
              }}
              variant="outlined"
            >
              View art work
            </Button>
          </div>
        </BigCard>
        <div>
          <h3 style={{ fontSize: "2rem", marginBottom: "30px" }}>
            New Auction
          </h3>
          <Stack gap={1.5} style={{ marginBottom: "30px" }}>
            {newAuction.map(({ imageUrl, name, price, time }, i) => (
              <LongCard
                key={i}
                image={imageUrl}
                title={name}
                eth={price}
                time={`${time.getUTCHours()}:${time.getUTCMinutes()}:${time.getUTCSeconds()}`}
              />
            ))}
          </Stack>
          <Link sx={{ display: 'inline-block', width: '100%', textAlign: 'right' }}>View all auctions</Link>
        </div>
      </Recommendation>
      <Stack gap={5} sx={{ alignItems: "center" }}>
        <h3 style={{ fontSize: "2rem" }}>Top Seller</h3>
        <Stack
          direction="row"
          gap={"3vw"}
          sx={{ flexWrap: "wrap", justifyContent: "center" }}
        >
          {topSeller.map(({ nickName, imageUrl }, i) => (
            <Stack key={i} gap={3} sx={{ alignItems: "center", fontWeight: 500 }}>
              <Avatar src={imageUrl} sx={{ width: "7vw", height: "7vw" }} />
              <p>{nickName}</p>
            </Stack>
          ))}
        </Stack>
      </Stack>
    </Stack>
  );
}

export default Product;
