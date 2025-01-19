"use client";
import React from "react";
import { Box, useMediaQuery } from "@mui/material";

export default function MainContent() {
  const isMobile = useMediaQuery("(max-width:600px)");

  return (
    <Box
      display="flex"
      flexDirection={isMobile ? "column" : "row"}
      justifyContent="center"
      alignItems="center"
      minHeight="80vh"
      padding={2}
    >
      <Box
        width={isMobile ? "100%" : "30%"}
        height="300px"
        bgcolor="lightgray"
        margin={1}
      ></Box>
      {!isMobile && (
        <Box
          width="30%"
          height="300px"
          bgcolor="lightgray"
          margin={1}
        ></Box>
      )}
    </Box>
  );
}
