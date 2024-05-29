import { Typography, Box } from "@mui/material";
import React from "react";
import CheckIcon from "@mui/icons-material/Check";
import LoopIcon from "@mui/icons-material/Loop";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";

const StatusPill = ({ status }) => {
  const statusMap = {
    PENDING: "Pending",
    IN_PROGRESS: "In progress",
    COMPLETED: "Completed",
  };

  const renderIcon = (status) => {
    switch (status) {
      case "PENDING":
        return <MoreHorizIcon />;
      case "IN_PROGRESS":
        return <LoopIcon />;
      case "COMPLETED":
        return <CheckIcon />;
      default:
        return null;
    }
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
      >
        {renderIcon(status)}
      </div>
      <Typography variant="body1" component="div">
        {statusMap[status]}
      </Typography>
    </Box>
  );
};

export default StatusPill;
