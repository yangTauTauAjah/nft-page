import React, { forwardRef } from 'react'
import { styled } from "@mui/system";
import { Button, Link, Stack, Box, useTheme } from "@mui/material";
import { newAuction } from "@/mockData";
import EndingSoon from '@/assets/images/NewAuction/endingSoon.png'
import Fire from '@/assets/images/Icon/Fire.png'
import Checklist from '@/assets/images/Icon/Checklist.png'
import RightArrow from '@/assets/images/Icon/RightArrow.png'
import LongCard from './LongCard'

const Main = styled("div")({
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
  width: "50%",
  aspectRatio: "0.674",
  padding: "40px"
});

const Auction = forwardRef<HTMLHeadingElement>((props, ref) => {

  const Theme = useTheme()

  return (
    <Main>
      <BigCard sx={{
        /* @ts-ignore */
        background: `linear-gradient(to bottom, ${Theme.palette.primary[500]}30 0%, ${Theme.palette.primary[500]}06 100%)`,
        transition: 'all 100ms ease-in-out',
        '&:hover': {
          boxShadow: '0 0 70px rgba(34, 126, 255, 0.1)',
        }
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
      <div style={{ width: '40%'}}>
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
        <Link sx={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'flex-end',
          gap: '1rem',
          color: 'white',
          fontSize: '1rem',
          '&:hover': {
            cursor: 'pointer'
          }
        }}>
          <span>View all auctions</span>
          <Box component='img' src={RightArrow} />
        </Link>
      </div>
    </Main>
  )
})

export default Auction