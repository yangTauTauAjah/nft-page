import { Link, Stack, styled, Button } from "@mui/material";
import { GitHub } from '@mui/icons-material'

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
      <ExtendedLink sx={{display: 'flex', gap: '1rem', alignItems: 'center'}} href="https://github.com/yangTauTauAjah/nft-page" target='_blank' rel="noopener">
        <span>Refer to source code</span>
        <GitHub/>
      </ExtendedLink>
    </Stack>
  )
}

export default Bottom