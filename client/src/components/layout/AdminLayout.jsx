import {
  Close as CloseIcon,
  Dashboard as DashboardIcon,
  ExitToApp as ExitToAppIcon,
  Groups as GroupsIcon,
  ManageAccounts as ManageAccountsIcon,
  Menu as MenuIcon,
  Message as MessageIcon,
} from "@mui/icons-material";
import {
  Box,
  Drawer,
  Grid,
  IconButton,
  Stack,
  Typography,
  styled,
} from "@mui/material";
import React, { useState } from "react";
import { Link as LinkComponent, useLocation,Navigate } from "react-router-dom";
import { grayColor } from "../../constants/color";

const Link = styled(LinkComponent)`
  text-decoration: none;
  border-radius: 2rem;
  padding: 1rem 2rem;
  color: black;
  &:hover {
    color: rgba(0, 0, 0, 0.54);
  }
`;

const adminTabs = [
  { name: "Dashboard", path: "/admin/dashboard", icon: <DashboardIcon /> },
  {
    name: "Users",
    path: "/admin/users",
    icon: <ManageAccountsIcon />,
  },
  { name: "Chat", path: "/admin/chats", icon: <GroupsIcon /> },
  {
    name: "Message",
    path: "/admin/messages",
    icon: <MessageIcon />,
  },
];

const SideBar = ({ w = "100%" }) => {
  const location = useLocation();
  const logoutHandler = () => {
    console.log("Logout");
  };
  return (
    <Stack width={w} direction={"column"} padding={"2rem"} spacing={"2rem"}>
      <Typography variant="h6" textTransform={"uppercase"}>
        Admin Panel
      </Typography>
      <Stack spacing={"1rem"}>
        {adminTabs.map((tab) => (
          <Link
            key={tab.path}
            to={tab.path}
            sx={
              location.pathname === tab.path && {
                bgcolor: "black",
                color: "white",
                "&:hover": { color: "white" },
              }
            }
          >
            <Stack direction={"row"} alignItems={"center"} spacing={"1rem"}>
              {tab.icon}
              <Typography>{tab.name}</Typography>
            </Stack>
          </Link>
        ))}
        <Link onClick={logoutHandler}>
          <Stack direction={"row"} alignItems={"center"} spacing={"1rem"}>
            <ExitToAppIcon/>
            <Typography fontSize={"1.2rem"}>Logout</Typography>
          </Stack>
        </Link>
      </Stack>
    </Stack>
  );
};

const isAdmin=true;

const AdminLayout = ({ children }) => {
  const [isMobile, setisMobile] = useState(false);

  const handleMobile = () => {
    setisMobile((prev) => !prev);
  };
  const handleClose = () => {
    setisMobile(false);
  };
  if(!isAdmin){
    return <Navigate to="/admin" />;
  }

  return (
    <Grid container minHeight={"100vh"}>
      <Box
        sx={{
          display: { xs: "block", md: "none" },
          position: "fixed",
          right: "1rem",
          top: "1rem",
        }}
      >
        <IconButton onClick={handleMobile}>
          {isMobile ? <CloseIcon /> : <MenuIcon />}
        </IconButton>
      </Box>
      <Grid item md={4} lg={3} sx={{ display: { xs: "none", md: "block" } }}>
        <SideBar />
      </Grid>
      <Grid item xs={12} md={8} lg={9} sx={{ bgcolor: grayColor }}>
        {children}
      </Grid>
      <Drawer open={isMobile} onClose={handleClose}>
        <SideBar w="50vw" />
      </Drawer>
    </Grid>
  );
};

export default AdminLayout;
