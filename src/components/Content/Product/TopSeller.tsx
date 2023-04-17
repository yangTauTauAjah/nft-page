import { Avatar, Stack } from "@mui/material";
import { topSeller } from "@/mockData";

function TopSeller() {
  return (
    <Stack gap={5} sx={{ alignItems: "center", width: '100%' }}>
      <h3 style={{ fontSize: "2rem" }}>Top Seller</h3>
      <Stack
        direction="row"
        flexWrap="wrap"
        justifyContent='space-between'
      >
        {topSeller.map(({ nickName, imageUrl }, i) => (
          <Stack key={i} gap={3} sx={{ alignItems: "center", fontWeight: 500, width: '10%' }}>
            <Avatar src={imageUrl} sx={{
              width: "auto",
              height: "auto",
              cursor: "pointer",
              transition: 'all 100ms ease-in-out',
              '&:hover': {
                boxShadow: '0 0 40px rgba(170, 34, 255, 0.5)',
                transform: 'scale(1.1)'
              }
            }} />
            <p>{nickName}</p>
          </Stack>
        ))}
      </Stack>
    </Stack>
  )
}

export default TopSeller