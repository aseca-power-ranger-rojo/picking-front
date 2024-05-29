import React from "react";
import { Box } from "@mui/material";
import OrderList from "./components/OrderList";


const App = () => {
  const pickers = [
    { id: "1", name: "Pedro", surname: "Elizalde" },
    { id: "2", name: "Manuel", surname: "Hernandez" },
  ];

  const orders = [
    { id: "1", pickerId: "1", status: "PENDING" },
    { id: "2", pickerId: "2", status: "COMPLETED" },
    { id: "3", pickerId: "1", status: "COMPLETED" },
    { id: "4", pickerId: "1", status: "IN_PROGRESS" },
    { id: "5", pickerId: "2", status: "PENDING" },
    { id: "6", pickerId: "2", status: "IN_PROGRESS" },
  ];


  return (
    <div className="App">
      <Box sx={{ display: "flex", minHeight: "100vh" }}>
        <OrderList orders={orders} pickers={pickers} />
      </Box>
    </div>
  );
};

export default App;
