import React, { useState } from "react";
import { Grid, IconButton, Tooltip, Box } from "@mui/material";
import {
  KeyboardBackspace as KeyboardBackspaceIcon,
  Menu as MenuIcon,
} from "@mui/icons-material";
import { useNavigate } from "react-router-dom";

const Group = () => {
  const navigate = useNavigate();
  const [isMobileMenu, setisMobileMenu] = useState(false);
  const navigateBack = () => {
    navigate("/");
  };
  const handleMobile = () => {
    setisMobileMenu((prev) => !prev);
  };
  const IconBtns = (
    <>
      <Box
        sx={{
          display: {
            xs: "block",
            sm: "none",
            position: "fixed",
            right: "1rem",
            top: "2rem",
          },
        }}
      >
        <IconButton onClick={handleMobile}>
          <MenuIcon />
        </IconButton>
      </Box>
      <Tooltip title="Back">
        <IconButton
          sx={{
            position: "absolute",
            top: "2rem",
            left: "2rem",
            bgcolor: "rgba(0,0,0,0.9)",
            color: "white",
            ":hover": {
              bgcolor: "rgba(0,0,0,0.2)",
              color: "black",
            },
          }}
          onClick={navigateBack}
        >
          <KeyboardBackspaceIcon />
        </IconButton>
      </Tooltip>
    </>
  );
  return (
    <Grid container height={"100vh"}>
      <Grid
        item
        sm={4}
        sx={{
          display: { xs: "none", sm: "block" },
          backgroundImage:
            "linear-gradient(to bottom, rgba(200, 200, 200,0.9), rgba(234, 112, 112, 0.9))",
        }}
        height={"100vh"}
      >
        Group list
      </Grid>
      <Grid
        item
        xs={12}
        sm={8}
        sx={{
          display: "flex",
          flexDirection: "column",
          position: "relative",
          alignItems: "center",
          padding: "1rem 3rem",
        }}
      >
        {IconBtns}
      </Grid>
    </Grid>
  );
};

export default Group;
