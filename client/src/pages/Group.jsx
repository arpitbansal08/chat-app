import React, { memo, useState } from "react";
import {
  Grid,
  IconButton,
  Tooltip,
  Box,
  Drawer,
  Stack,
  Typography,
} from "@mui/material";
import {
  KeyboardBackspace as KeyboardBackspaceIcon,
  Menu as MenuIcon,
} from "@mui/icons-material";
import { useNavigate, useSearchParams } from "react-router-dom";
import { Link } from "../components/styles/StyledComponents";
import AvatarCard from "../components/shared/AvatarCard";
import { SampleChats } from "../constants/sampleData";

const Group = () => {
  const navigate = useNavigate();
  const [isMobileMenuOpen, setisMobileMenuOpen] = useState(false);
  const navigateBack = () => {
    navigate("/");
  };
  const handleMobile = () => {
    setisMobileMenuOpen((prev) => !prev);
  };
  const handleMobileClose = () => {
    setisMobileMenuOpen(false);
  };
  const chatId = useSearchParams()[0].get("group");
  console.log(chatId);
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
        <GroupsList myGroups={SampleChats} chatId={chatId} />
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
      <Drawer
        sx={{ display: { xs: "block", sm: "none" } }}
        open={isMobileMenuOpen}
        onClose={handleMobileClose}
      >
        <GroupsList w={"50vw"} myGroups={SampleChats} chatId={chatId} />
      </Drawer>
    </Grid>
  );
};

const GroupsList = ({ w = "100%", myGroups = [], chatId }) => {
  return (
    <Stack width={w}>
      {myGroups.length > 0 ? (
        myGroups.map((group) => {
          return (
            <GroupListItem key={group._id} group={group} chatId={chatId} />
          );
        })
      ) : (
        <Typography textAlign={"center"} padding={"1rem"}>
          No Groups Found
        </Typography>
      )}
    </Stack>
  );
};
const GroupListItem = memo(({ group, chatId }) => {
  const { name, avatar, _id } = group;
  return (
    <Link
      to={`?group=${_id}`}
      onClick={(e) => {
        if (chatId === _id) {
          e.preventDefault();
        }
      }}
    >
      <Stack
        direction={"row"}
        spacing={"1rem"}
        alignItems={"center"}
        justifyContent={"center"}
      >
        <AvatarCard avatar={avatar} />
        <Typography>{name}</Typography>
      </Stack>
    </Link>
  );
});

export default Group;
