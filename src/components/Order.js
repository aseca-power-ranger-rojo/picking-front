import Card from "@mui/material/Card";
import React from "react";
import StatusPill from "./StatusPill";
import { Box, Button, Typography } from "@mui/material";

const Order = ({ order, updateOrderStatus }) => {
  return (
    <Card
      id={order.id}
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
      <Box sx={{ display: "flex", flexDirection: "column" }}>
        <Typography variant="h5" component="div">
          Order ID:
          <Typography variant="body1">{order.orderId}</Typography>
        </Typography>
        <Typography variant="h5" component="div">
          Picker:
          <Typography variant="body1">
            {order.picker.name} {order.picker.surname}
          </Typography>
        </Typography>
      </Box>
      <Box sx={{ display: "flex", gap: "8px" }}>
        <Button
          variant="contained"
          color="success"
          onClick={() => {
            updateOrderStatus(order.orderId, "PENDING");
          }}
        >
          Pending
        </Button>
        <Button
          variant="contained"
          color="success"
          onClick={() => updateOrderStatus(order.orderId, "IN_PROGRESS")}
        >
          In progress
        </Button>
        <Button
          variant="contained"
          color="success"
          onClick={() => updateOrderStatus(order.orderId, "COMPLETED")}
        >
          Completed
        </Button>
      </Box>
      <StatusPill status={order.status} />
    </Card>
  );
};

export { Order };
