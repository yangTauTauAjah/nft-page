import React from 'react'
import { Button, Link, Stack, styled, Input, IconButton, Dialog, DialogTitle, DialogActions, DialogContent, DialogContentText, Backdrop, CircularProgress } from "@mui/material";
import { useTheme } from '@mui/material'
import CloseIcon from '@mui/icons-material/Close';
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

const isValidEmail = (val: string) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(val)

function Upper() {

  const Theme = useTheme()
  const [open, setOpen] = React.useState(false);
  const [error, setError] = React.useState(false)
  const [loading, setLoading] = React.useState(false);

  React.useEffect(() => {

    if (!loading) return
    setTimeout(() => {
       setOpen(true)
    }, 1000)

  }, [loading])

  React.useEffect(() => {
    if (open) setLoading(false)
  }, [open])
  

  return (
    // @ts-ignore
    <Grid style={{ background: `${Theme.palette.primary[700]}20`, color: 'white', fontWeight: 600 }}>
      <Stack gap={5}>
        <Stack direction='row' sx={{ alignItems: 'center', gap: '1rem' }}>
          <Logo fill='white' />
          <h3>NFTopia</h3>
        </Stack>
        <p style={{ fontSize: "0.8rem", fontWeight: 300 }}>
          NFTopia is more than an NFT marketplace - it's a community of passionate individuals who share a love for digital art and blockchain technology.
        </p>
      </Stack>
      <Stack sx={{ justifyContent: "space-between" }}>
        <ExtendedLink>About Us</ExtendedLink>
        <ExtendedLink>Frequently Asked Questions (FAQ)</ExtendedLink>
        <ExtendedLink>Help Center</ExtendedLink>
        <ExtendedLink>How to Buy and Sell</ExtendedLink>
      </Stack>
      <Stack gap={3}>
        <p>Subscribe NFTopia for newsletter right now!</p>
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
              id='email-input'
              type="email"
              placeholder="Insert your email here"
              error={error}
              onChange={() => {
                // @ts-ignore
                if (isValidEmail(document.querySelector('#email-input')?.value)) setError(false)
                else setError(true)
              }}
              sx={{ fontSize: "1.125rem", width: "100%", height: "2rem" }}
            />
          </div>
          <Button
            onClick={() => {
              // @ts-ignore
              if (document.querySelector('#email-input')?.value === '') return
              if (!error) setLoading(true)
            }}
            variant="contained"
            sx={{
              width: "6rem",
              fontSize: "1.125rem",
              borderRadius: "0.8rem",
              height: "3.75rem"
            }}
          >
            Send
          </Button>
          <Dialog
            open={open}
            onClose={() => setOpen(false)}
            aria-labelledby="alert-dialog-title"
            aria-describedby="alert-dialog-description"
          >
            <DialogTitle id="alert-dialog-title" sx={{ fontSize: '1.5rem' }}>Success</DialogTitle>
            <DialogContent>
              <DialogContentText id="alert-dialog-description">
                Your Email has successfully been sent
              </DialogContentText>
            </DialogContent>
            <DialogActions>
              <Button onClick={() => setOpen(false)}>OK</Button>
            </DialogActions>
          </Dialog>
          <Backdrop
            sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
            open={loading}
          >
            <CircularProgress color="inherit" />
          </Backdrop>
        </Stack>
      </Stack>
    </Grid>
  )
}

export default Upper