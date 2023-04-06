import { Button, Stack } from "@mui/material";
import { styled } from "@mui/system";
import { LinksList } from '../components/Header'
import { FlexSpaceBetweenCentered } from "@/components";
import Logo from '@/components/Logo'
import Wallet from '@/assets/images/Icon/Wallet.png'

const ButtonStyle = {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  gap: '0.7rem',
  height: "60px",
  borderRadius: "25px",
  px: '2rem',
  fontSize: "1rem",
  textTransform: 'unset'
}

const Main = styled(FlexSpaceBetweenCentered)(({ theme }) => ({
  width: 'auto',
  height: theme.spacing(10),
  paddingInline: theme.spacing(6.2),
  background: 'rgba(255,255,255,.05)'
}));

function Header() {

  return (
    <Main>
      <Stack direction='row' sx={{gap: '1rem', color: 'white'}}>
        <Logo/>
        <h1>NFTopia</h1>
      </Stack>
      <LinksList />
      <Button sx={ButtonStyle} variant="contained">
        <img src={Wallet} style={{height: '50%'}} />
        <p>My Wallet</p>
      </Button>
    </Main>
  );
}

export default Header;
