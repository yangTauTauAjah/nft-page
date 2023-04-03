import React from "react";
import { styled } from "@mui/system";
import { Box, Button, Container, Link, Avatar, Stack } from "@mui/material";

const Grid = styled("div")({
  display: "grid",
  gridTemplateColumns: "repeat(auto-fill, minmax(19rem, 1fr))",
  width: "90%",
  rowGap: 20,
  columnGap: 10,
  marginInline: "auto",
  marginBottom: '100px'
});

const Card = styled("div")({
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-around",
  alignItems: "center",
  background: "rgba(0,0,0,0.2)",
  padding: "20px",
  borderRadius: "2rem"
});

function Categories() {
  return (
    <Grid>
      {[1, 2, 3, 4, 5, 6, 7, 8].map((e) => (
        <Card style={{ aspectRatio: "1.0614" }}>
          <div
            style={{
              borderRadius: "2rem",
              height: "75%",
              width: "100%",
              background: "rgba(255,255,255,0.02)"
            }}
          />
          <h4 style={{ fontSize: 20 }}>Card title</h4>
        </Card>
      ))}
    </Grid>
  );
}

export default Categories;
