// MainContent.js
import React from "react";
import { Paper, Typography, Button, Box } from "@mui/material";
import { Order } from "./Order";
import { ReplayOutlined } from "@mui/icons-material";

const OrderList = ({ orders, pickers }) => {
  return (
    <Paper
      sx={{
        flex: 1,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: "50px",
        minHeight: "100vh",
        padding: "40px",
        backgroundColor: "#F7F8F5",
      }}
      elevation={1}
    >
      <Typography variant="h2" component="div">
        Power Ranger Rojo's PICKING
      </Typography>
      {orders.map((order) => (
        <Order key={order.id} {...order} pickers={pickers} />
      ))}
    </Paper>
  );
};

export default OrderList;
