import React from "react";
import { /* Box, Container, Stack, */ styled } from "@mui/system";
import { Box, Button, Container, Link, Avatar, Stack } from "@mui/material";

const Recommendation = styled("div")({
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  width: "100%"
});

const TopSeller = styled("div")({
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-between",
  alignItems: "center"
});

const BigCard = styled("div")({
  borderRadius: "2rem",
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-between",
  width: "40vw",
  aspectRatio: "0.674",
  background: "rgba(0,0,0,0.3)",
  color: "rgba(255,255,255,0.2)",
  padding: "40px"
});

const Card = styled("div")({
  display: "flex",
  gap: "20px",
  borderRadius: "12px",
  alignItems: "center",
  padding: "20px",
  width: "30.5vw",
  aspectRatio: "3.142",
  fontSize: "1rem",
  background: "rgba(0,0,0,0.3)",
  color: "rgba(255,255,255,0.2)"
});

const CardComponent = (props: {
  image: string;
  title: string;
  eth: number;
  time: Date;
}) => {
  return (
    <Card>
      <div
        style={{
          height: "100%",
          aspectRatio: 1,
          background: "rgba(0,0,0,0.3)",
          borderRadius: "12px"
        }}
      />
      <div>
        <h3 style={{ fontSize: "1.1rem" }}>{props.title}</h3>
        <div
          style={{ display: "flex", justifyContent: "space-between" }}
        >
          <p style={{ fontSize: "1rem" }}>{props.eth} ETH</p>
          <p style={{ fontSize: "1rem" }}>
            {props.time.getHours()}:{props.time.getMinutes()}:
            {props.time.getSeconds()}
          </p>
        </div>
      </div>
    </Card>
  );
};

function Product() {
  return (
    <Stack
      gap={10}
      sx={{ width: "80vw", marginInline: "auto" }}
    >
      <Recommendation>
        <BigCard>
          <h3 style={{ fontSize: 32 }}>Item ending soon</h3>
          <div
            style={{
              borderRadius: "0.7rem",
              width: "auto",
              aspectRatio: 1.314,
              background: "rgba(0,0,0,0.3)"
            }}
          />
          <div>
            <h3 style={{ fontSize: 26 }}>Title of names</h3>
            <p>by Seller Name</p>
          </div>
          <div
            style={{
              display: "flex",
              justifyContent: "space-between"
            }}
          >
            <div>
              <p>Current bid</p>
              <h3 style={{ fontSize: 32 }}>0.0079 ETH</h3>
            </div>
            <div style={{ textAlign: "end" }}>
              <p>ReStacking Time</p>
              <h3 style={{ fontSize: 32 }}>12:34:02</h3>
            </div>
          </div>
          <div
            style={{
              display: "flex",
              justifyContent: "space-between"
            }}
          >
            <Button
              style={{
                fontSize: "1rem",
                width: "200px",
                height: "60px",
                borderRadius: "60px"
              }}
              variant="contained"
            >
              Place a bid
            </Button>
            <Button
              style={{
                fontSize: "1rem",
                width: "200px",
                height: "60px",
                borderRadius: "60px"
              }}
              variant="outlined"
            >
              View art work
            </Button>
          </div>
        </BigCard>
        <div>
          <h3 style={{ fontSize: "2rem", marginBottom: "30px" }}>
            New Auction
          </h3>
          <Stack gap={1.5} style={{ marginBottom: "30px" }}>
            {[0, 1, 2, 3].map((e, i) => (
              <CardComponent
                key={i}
                image="test"
                title="Title name two bars Title name two bars"
                eth={10 * e}
                time={new Date()}
              />
            ))}
          </Stack>
          <div>
            <Link sx={{ color: "gray" }}>View all auctions</Link>
          </div>
        </div>
      </Recommendation>
      <Stack gap={5} sx={{ alignItems: "center" }}>
        <h3 style={{ fontSize: "2rem" }}>Top Seller</h3>
        <Stack
          direction="row"
          gap={"3vw"}
          sx={{ flexWrap: "wrap", justifyContent: "center" }}
        >
          <Avatar sx={{ width: "7vw", height: "7vw" }}>H</Avatar>
          <Avatar sx={{ width: "7vw", height: "7vw" }}>H</Avatar>
          <Avatar sx={{ width: "7vw", height: "7vw" }}>H</Avatar>
          <Avatar sx={{ width: "7vw", height: "7vw" }}>H</Avatar>
          <Avatar sx={{ width: "7vw", height: "7vw" }}>H</Avatar>
          <Avatar sx={{ width: "7vw", height: "7vw" }}>H</Avatar>
          <Avatar sx={{ width: "7vw", height: "7vw" }}>H</Avatar>
          <Avatar sx={{ width: "7vw", height: "7vw" }}>H</Avatar>
        </Stack>
      </Stack>
    </Stack>
  );
}

export default Product;
