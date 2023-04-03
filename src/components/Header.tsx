import React from "react";
import { Box, Container, Stack, styled } from "@mui/system";
import { Button, Link } from "@mui/material";

const FlexSpaceBetweenCentered = styled("div")(({ theme }) => ({
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
}));

const Main = styled(FlexSpaceBetweenCentered)(({ theme }) => ({
  width: 'auto',
  height: theme.spacing(10),
  paddingInline: theme.spacing(6.2)
}));

const ButtonStyle = {
  height: "60px",
  width: "164px",
  borderRadius: "25px",
  fontSize: "1rem"
}

const LinkList = styled(FlexSpaceBetweenCentered)(({ theme }) => ({
  justifyContent: "initial",
  gap: '2.5rem'
}));

function Header() {
  return (
    <Main>
      Test
      <LinkList>
        <Link sx={{color: 'gray', fontStyle: 'none', cursor: 'default'}}>Auction</Link>
        <Link sx={{color: 'gray', fontStyle: 'none', cursor: 'default'}}>Community</Link>
        <Link sx={{color: 'gray', fontStyle: 'none', cursor: 'default'}}>Explore</Link>
      </LinkList>
      <Button
        sx={ButtonStyle}
        variant="contained"
      >
        My Wallet
      </Button>
    </Main>
  );
}

export default Header;
