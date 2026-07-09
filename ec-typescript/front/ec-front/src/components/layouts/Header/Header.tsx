import React from "react";
import Link from "next/link";
import { Box } from "@mui/material";

export const Header = () => {
  return (
    <header
      style={{
        position: "fixed",
        top: 0,
        width: "100%",
        zIndex: 1000,
        backgroundColor: "white",
      }}
    >
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          padding: "5px",
          borderBottom: "2px solid #e8e8e8",
        }}
      >
        <Box
          sx={{
            textDecoration: "none",
            marginLeft: "24px",
            backgroundColor: "#F4F8FB",
            padding: "5px",
          }}
        >
          <div>aa</div>
          <Link href="/"></Link>
        </Box>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            marginRight: "24px",
            gap: "10px",
            flexShrink: 0,
          }}
        >
          <div>bb</div>
          <div>cc</div>
        </Box>
      </Box>
    </header>
  );
};