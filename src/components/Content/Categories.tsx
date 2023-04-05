import { styled } from "@mui/system";
import { categories } from '@/mockData'

const Grid = styled("div")({
  display: "grid",
  gridTemplateColumns: "repeat(auto-fill, minmax(19rem, 1fr))",
  width: "100%",
  rowGap: 20,
  columnGap: 10,
  marginBottom: '100px'
});

const Card = styled("div")(({theme}) => ({
  color: 'white',
  aspectRatio: "1.0614",
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-around",
  alignItems: "center",
  background: `linear-gradient(to bottom, ${theme.palette.primary.main}30 0%, ${theme.palette.primary.main}06 100%)`,
  padding: "20px",
  borderRadius: "2rem"
}));

function Categories() {

  return (
    <Grid>
      {categories.map(({category, thumbnail}, i) => (
        <Card key={i}>
          <div
            style={{
              borderRadius: "2rem",
              width: "100%",
              overflow: 'hidden'
            }}
          >
            <img src={thumbnail} style={{width: '100%'}} />
          </div>
          <h4 style={{ fontSize: 20 }}>{category}</h4>
        </Card>
      ))}
    </Grid>
  );
}

export default Categories;
