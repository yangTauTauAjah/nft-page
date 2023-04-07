import { useRef, useEffect } from "react";
import { Stack } from "@mui/material";
import Auction from './Auction'
import TopSeller from './TopSeller'

let time = 45242000;

function Product() {

  const ref = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
    if (ref.current?.innerText) {
      let id = setInterval(() => {
        const timer = new Date((time -= 1000));
        // @ts-ignore
        ref.current.innerText = `${timer.getUTCHours()}:${timer.getUTCMinutes()}:${timer
          .getUTCSeconds()
          .toString()
          .padStart(2, "0")}`;
      }, 1000);
      return () => clearInterval(id)
    }
  }, []);

  return (
    <Stack gap={10} sx={{ width: "80vw", marginInline: "auto", color: 'white' }}>
      <Auction ref={ref} />
      <TopSeller />
    </Stack>
  );
}

export default Product;

