import { Typography, Box } from "@mui/material";
import React from "react";

const StatusPill = ({ status }) => {
  const statusMap = {
    PENDING: "Pending",
    IN_PROGRESS: "In progress",
    COMPLETED: "Completed",
  };

  return (
    <Box
      sx={{
        width: "95px",
        height: "80px",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        padding: "8px",
      }}
    >
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          width: 36,
          height: 36,
          borderRadius: "50%",
          backgroundColor:
            status === "PENDING"
              ? "#FFD700"
              : status === "IN_PROGRESS"
              ? "#FFA500"
              : "#32CD32",
          border: "2px solid #000000",
        }}
      />
      <Typography variant="body1" component="div">
        {statusMap[status]}
      </Typography>
    </Box>
  );
};

export default StatusPill;
