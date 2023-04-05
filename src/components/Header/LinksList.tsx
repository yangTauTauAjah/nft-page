import { FlexSpaceBetweenCentered } from "..";
import { Link } from "@mui/material";
import { styled } from "@mui/system";

export const Main = styled(FlexSpaceBetweenCentered)(({ theme }) => ({
  justifyContent: "initial",
  gap: "2.5rem"
}));

const StyledLink = styled(Link)({
  color: "gray",
  textDecoration: "none",
  cursor: "pointer",
  fontSize: '1.125rem',
  fontWeight: 500,
  transition: 'color 100ms ease-in',
  '&:hover': {
    color: 'white'
  }
})

function LinksList() {
  return (
    <Main>
      <StyledLink>Auction</StyledLink>
      <StyledLink>Community</StyledLink>
      <StyledLink>Explore</StyledLink>
    </Main>
  );
}

export default LinksList;
