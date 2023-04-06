import { Link, Stack, styled, Button } from "@mui/material";

const ExtendedLink = styled(Link)({
  color: 'white',
  cursor: 'pointer'
})

function Bottom() {

  return (
    <Stack
      direction="row"
      gap={3}
      style={{ background: "rgba(20, 25, 35, 1)", padding: "20px", color: 'white' }}
    >
      <p>© 2023</p>
      <p>Habib Anwash (web developer)</p>
      <p style={{ marginRight: "auto" }}>Mahyu (design mockup)</p>
      <ExtendedLink>Privacy Policy</ExtendedLink>
      <ExtendedLink>Terms of Service</ExtendedLink>
      <ExtendedLink href="https://github.com/yangTauTauAjah/nft-page" target='_blank' rel="noopener">Refer to source code</ExtendedLink>
    </Stack>
  )
}

export default Bottom