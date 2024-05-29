import React, { useState, useEffect } from "react";
import { Box } from "@mui/material";
import OrderList from "./components/OrderList";
import { getOrders, orderStatus } from "./services";

const App = () => {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    getOrders().then((response) => setOrders(response.data));
  }, []);

  const updateOrderStatus = (orderId, newStatus) => {
    orderStatus(orderId, newStatus).then(() => {
      setOrders(
        orders.map((order) =>
          order.id === orderId ? { ...order, status: newStatus } : order
        )
      );
    });
  };

  return (
    <div className="App">
      <Box sx={{ display: "flex", minHeight: "100vh" }}>
        <OrderList orders={orders} updateOrderStatus={updateOrderStatus} />
      </Box>
    </div>
  );
};

export default App;
