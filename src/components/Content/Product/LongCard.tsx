import { styled } from "@mui/system";
import { useTheme } from "@mui/material";

interface LongCardPropsInterface {
  image: string;
  title: string;
  eth: number;
  time: string;
}

const Card = styled("div")({
  display: "flex",
  gap: "20px",
  borderRadius: "12px",
  alignItems: "center",
  padding: "20px",
  width: "100%",
  aspectRatio: "3.142",
  fontSize: "1rem"
});

const LongCard = (props: LongCardPropsInterface) => {

  const Theme = useTheme()

  return (
    <Card sx={{
      background: `linear-gradient(to bottom, rgba(240, 240, 240, 0.1) 0%, rgba(255, 255, 255, 0.02) 100%);`,
      cursor: 'pointer',
      transition: 'all 300ms ease-in-out',
      '&:hover': {
        boxShadow: '0 0 40px rgba(170, 170, 170, 0.2)',
      }
    }}>
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
        <h3 style={{ fontSize: "1.1rem", cursor: 'pointer' }}>{props.title}</h3>
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <p style={{ fontSize: "1rem", fontWeight: 600, cursor: 'pointer' }}>{props.eth} ETH</p>
          <p style={{ fontSize: "1rem", fontWeight: 600, color: Theme.palette.primary.main, cursor: 'pointer' }}>{props.time}</p>
        </div>
      </div>
    </Card>
  );
};

export default LongCard