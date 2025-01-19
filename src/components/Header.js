"use client";
import React from "react";
import { AppBar, Toolbar, Typography, Avatar, Box } from "@mui/material";
import SearchBar from "./SearchBar";
import useMediaQuery from "@mui/material/useMediaQuery";

export default function Header() {
  const isMobile = useMediaQuery("(max-width:600px)");

  return (
    <AppBar position="static" sx={{ bgcolor: "#4CAF50" }}> {/* Updated background color */}
      <Toolbar style={{ display: "flex", justifyContent: "space-between", padding: "0 16px" }}>
        {/* Left Section */}
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            flex: isMobile ? 1 : 0.5, // Adjust space for alignment
          }}
        >
          <Typography
            variant="h6"
            sx={{
              marginLeft: isMobile ? "8px" : "0px", // Left align on small screens
            }}
          >
            Brand Name
          </Typography>
        </Box>

        {/* Middle Section */}
        {!isMobile && (
          <Box
            sx={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              flex: 2,
              justifyContent: "flex-start", // Shift to the left
              marginLeft: "40px", // Add spacing from left
            }}
          >
            <SearchBar sx={{ width: "300px" }} /> {/* Increase length */}
          </Box>
        )}

        {/* Right Section: Avatar */}
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: isMobile ? "flex-end" : "flex-end", // Adjust for responsiveness
            flex: 1,
          }}
        >
          <Avatar sx={{ bgcolor: "blue" }}>J</Avatar>
          {!isMobile && (
            <Typography sx={{ marginLeft: "10px" }}>John</Typography>
          )}
        </Box>
      </Toolbar>
    </AppBar>
  );
}