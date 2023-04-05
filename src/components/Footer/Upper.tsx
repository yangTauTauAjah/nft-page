import { styled } from "@mui/system";
import { Button, Link, Stack, Input } from "@mui/material";
import { useTheme } from '@mui/material'
import Logo from "../Logo";

const Grid = styled("div")({
  display: "grid",
  gridTemplateColumns: "repeat(3, 1fr)",
  background: "rgba(255,255,255,0.7)",
  width: "auto",
  gap: "1rem",
  padding: "50px"
});

const ExtendedLink = styled(Link)({
  color: 'white',
  fontWeight: 700,
  fontSize: '1.125rem',
  transtition: 'all 100ms ease-in-out',
  cursor: 'pointer'
})

function Upper() {

  const Theme = useTheme()

  return (
    // @ts-ignore
    <Grid style={{ background: `${Theme.palette.primary[700]}20`, color: 'white', fontWeight: 600 }}>
      <Stack gap={5}>
        {/* <div
          style={{
            width: "255px",
            height: "50px",
            background: "rgba(0,0,0,.2)"
          }}
        /> */}
        <Stack direction='row' sx={{alignItems: 'center'}}>
          <Logo fill='white'/>
          <h3>MahyuNFT</h3>
        </Stack>
        <p style={{ fontSize: "1.125rem" }}>
          MahyuNFT is the largest NFTs Marketplace of Etherium (ETH). Buy,
          sell, and discover exclusive digital items.
        </p>
      </Stack>
      <Stack sx={{ justifyContent: "space-between" }}>
        <ExtendedLink>About Us</ExtendedLink>
        <ExtendedLink>Frequently Asked Questions (FAQ)</ExtendedLink>
        <ExtendedLink>Help Center</ExtendedLink>
        <ExtendedLink>How to Buy and Sell</ExtendedLink>
      </Stack>
      <Stack gap={3}>
        <p>Subscribe MahyuNFT for newsletter right now!</p>
        <Stack gap={1} direction="row">
          <div
            style={{
              display: 'flex',
              placeItems: 'center',
              paddingInline: "1.2rem",
              flexGrow: 1,
              background: "rgba(255,255,255,0.5)",
              borderRadius: "0.8rem"
            }}
          >
            <Input
              type="email"
              placeholder="Insert your email here"
              sx={{ fontSize: "1.125rem", width: "100%", height: "2rem" }}
            />
          </div>
          <Button
            variant="contained"
            sx={{
              width: "6rem",
              fontSize: "1.125rem",
              borderRadius: "0.8rem",
              height: "3.75rem"
            }}
          >
            Sent
          </Button>
        </Stack>
      </Stack>
    </Grid>
  )
}

export default Upper