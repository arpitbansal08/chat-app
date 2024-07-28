import {
  Add as AddIcon,
  Group as GroupIcon,
  Logout as LogoutIcon,
  Menu as MenuIcon,
  Notifications as NotificationsIcon,
  Search as SearchIcon,
} from "@mui/icons-material";
import {
  AppBar,
  Backdrop,
  Box,
  IconButton,
  Toolbar,
  Tooltip,
  Typography,
} from "@mui/material";
import React, { Suspense, lazy, useState } from "react";
import { useNavigate } from "react-router-dom";
import { orange } from "../../constants/color";
const SearchDialog = lazy(() => import("../specific/Search"));
const NotificationDialog = lazy(() => import("../specific/Notification"));
const NewGroupDialog = lazy(() => import("../specific/NewGroup"));

const Header = () => {
  const navigate = useNavigate();
  const [isMobile, setisMobile] = useState(false);
  const [isSearch, setisSearch] = useState(false);
  const [isNewGroup, setisNewGroup] = useState(false);
  const [isNotification, setisNotification] = useState(false);

  const handleMobile = () => {
    setisMobile((prev) => !prev);
  };
  const openSearch = () => {
    setisSearch((prev) => !prev);
  };
  const openNewGroup = () => {
    setisNewGroup((prev) => !prev);
  };
  const openNotification = () => {
    setisNotification((prev) => !prev);
  };
  const navigateToGroup = () => {
    navigate("/group");
  };
  const logoutHandler = () => {
    console.log("Logout");
  };

  return (
    <>
      <Box sx={{ flexGrow: "1" }} height={"4rem"}>
        <AppBar position="static" sx={{ bgcolor: orange }}>
          <Toolbar>
            <Typography
              variant="h6"
              sx={{ display: { xs: "none", sm: "block" } }}
            >
              Chat App
            </Typography>
            <Box sx={{ display: { xs: "block", sm: "none" } }}>
              <IconButton color="inherit" onClick={handleMobile}>
                <MenuIcon />
              </IconButton>
            </Box>
            <Box sx={{ flexGrow: "1" }} /> {/* This is a spacer */}
            <Box>
              <IconBtn
                title="Search"
                icon={<SearchIcon />}
                onClick={openSearch}
              />

              <IconBtn
                title="Add Group"
                icon={<AddIcon />}
                onClick={openNewGroup}
              />

              <IconBtn
                title="Group"
                icon={<GroupIcon />}
                onClick={navigateToGroup}
              />
              <IconBtn
                title="Notification"
                icon={<NotificationsIcon />}
                onClick={openNotification}
              />
              <IconBtn
                title="Logout"
                icon={<LogoutIcon />}
                onClick={logoutHandler}
              />
            </Box>
          </Toolbar>
        </AppBar>
      </Box>
      {isSearch && (
        <Suspense fallback={<Backdrop open />}>
          <SearchDialog />
        </Suspense>
      )}
      {isNewGroup && (
        <Suspense fallback={<Backdrop open />}>
          <NewGroupDialog />
        </Suspense>
      )}
      {isNotification && (
        <Suspense fallback={<Backdrop open />}>
          <NotificationDialog />
        </Suspense>
      )}
    </>
  );
};

const IconBtn = ({ title, icon, onClick }) => {
  return (
    <Tooltip title={title}>
      <IconButton color="inherit" size="large" onClick={onClick}>
        {icon}
      </IconButton>
    </Tooltip>
  );
};
export default Header;
