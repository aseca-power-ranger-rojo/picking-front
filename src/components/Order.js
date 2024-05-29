import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import React, { useState } from "react";
import StatusPill from "./StatusPill";
import { Box, Button, Typography } from "@mui/material";

const Order = ({ id, status, pickers }) => {
  console.log(pickers)
  return (
    <Card
      id={id}
      sx={{
        width: "60%",
        height: 100,
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        backgroundColor: "#C2D39E",
        padding: "16px 24px",
      }}
    >
      <Typography variant="h5" component="div">
        Order ID: {id}
      </Typography>
      <Box sx={{display:'flex', gap:'8px'}}>
        <Button variant="contained" color="success">
          Pending
        </Button>
        <Button variant="contained" color="success">
          In progress
        </Button>
        <Button variant="contained" color="success">
          Completed
        </Button>
      </Box>
      <StatusPill status={status} />
    </Card>
  );
};

export { Order };
