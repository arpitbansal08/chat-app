import {
  Add as AddIcon,
  Delete as DeleteIcon,
  Done as DoneIcon,
  Edit as EditIcon,
  KeyboardBackspace as KeyboardBackspaceIcon,
  Menu as MenuIcon,
} from "@mui/icons-material";
import {
  Backdrop,
  Box,
  Button,
  Drawer,
  Grid,
  IconButton,
  Stack,
  TextField,
  Tooltip,
  Typography,
} from "@mui/material";
import React, { Suspense, lazy, memo, useEffect, useState } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import AvatarCard from "../components/shared/AvatarCard";
import UserItem from "../components/shared/UserItem";
import { Link } from "../components/styles/StyledComponents";
import { SampleChats, SampleUsers } from "../constants/sampleData";

const ConfirmDeleteDialog = lazy(() =>
  import("../components/dialog/ConfirmDeleteDialog")
);
const AddMemberDialog = lazy(() =>
  import("../components/dialog/AddMemberDialog")
);

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

  const [confirmDeleteDialog, setConfirmDeleteDialog] = useState(false);
  const openConfirmDeleteHandler = () => {
    setConfirmDeleteDialog(true);
    console.log("Delete Group");
  };
  const closeConfirmDeleteHandler = () => {
    setConfirmDeleteDialog(false);
  };
  const deleteHandler = () => {
    console.log("Delete Handler");
    closeConfirmDeleteHandler();
  };

  const isAddMember = false;

  const openAddMemberHandler = () => {
    console.log("Add Member");
  };
  const closeAddMemberHandler = () => {
    console.log("Close Add Member");
  };
  const addMemberHandler = () => {
    console.log("Add Member Handler");
  };
  const removeMemberHandler = (_id) => {
    console.log("Remove Member Handler", _id);
  };

  const ButtonGroup = (
    <Stack
      direction={{ xs: "column-reverse", sm: "row" }}
      padding={{ xs: "0", sm: "1rem", md: "1rem 4rem" }}
      spacing={"1rem"}
    >
      <Button
        size="large"
        color="error"
        variant="outlined"
        startIcon={<DeleteIcon />}
        onClick={openConfirmDeleteHandler}
      >
        Delete Group
      </Button>
      <Button
        size="large"
        variant="contained"
        startIcon={<AddIcon />}
        onClick={openAddMemberHandler}
      >
        Add Member
      </Button>
    </Stack>
  );

  const [groupName, setGroupName] = useState("");
  const [groupNameUpdatedValue, setGroupNameUpdatedValue] = useState("");
  useEffect(() => {
    if (chatId) {
      setGroupName(`Group Name ${chatId}`);
      setGroupNameUpdatedValue(`Group Name ${chatId}`);
      setIsEdit(false);
    }
    // Clean Up function

    // return () => {
    //   setGroupName("");
    //   setGroupNameUpdatedValue("");
    //   setIsEdit(false);
    // };
  }, [chatId]);

  const [isEdit, setIsEdit] = useState(false);
  const updateGroupName = () => {
    setIsEdit(false);
    console.log("Update Group Name");
  };
  const GroupName = (
    <Stack
      direction={"row"}
      alignItems={"center"}
      justifyContent={"center"}
      spacing={"1rem"}
      padding={"3rem"}
    >
      {isEdit ? (
        <>
          <TextField
            value={groupNameUpdatedValue}
            onChange={(e) => {
              e.preventDefault();
              setGroupNameUpdatedValue(e.target.value);
            }}
          />
          <IconButton onClick={updateGroupName}>
            <DoneIcon />
          </IconButton>
        </>
      ) : (
        <>
          <Typography variant="h4">{groupName}</Typography>
          <IconButton onClick={() => setIsEdit(true)}>
            <EditIcon />
          </IconButton>
        </>
      )}
    </Stack>
  );

  return (
    <Grid container height={"100vh"}>
      <Grid
        item
        sm={4}
        sx={{
          display: { xs: "none", sm: "block" },
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
        {groupName && (
          <>
            {GroupName}
            <Typography
              margin={"2rem"}
              alignSelf={"flex-start"}
              variant="body1"
            >
              Members
            </Typography>
            <Stack
              maxWidth={"45rem"}
              width={"100%"}
              boxSizing={"border-box"}
              padding={{ sm: "1rem", xs: "0", md: "1rem 4rem" }}
              spacing={"2rem"}
              height={"50vh"}
              overflow={"auto"}
              bgcolor={"wheat"}
            >
              {SampleUsers.length > 0 ? (
                SampleUsers.map((user) => (
                  <UserItem
                    key={user._id}
                    user={user}
                    isAdded={true}
                    styling={{
                      boxShadow: "0 0 0.5rem rgba(0,0,0,0.2)",
                      padding: "1rem 2rem",
                      borderRadius: "1rem",
                      backgroundColor: "ivory",
                    }}
                    handler={removeMemberHandler}
                  />
                ))
              ) : (
                <Typography textAlign={"center"}>No Freinds </Typography>
              )}
            </Stack>
            {ButtonGroup}
          </>
        )}
      </Grid>

      {confirmDeleteDialog && (
        <Suspense fallback={<Backdrop open />}>
          <ConfirmDeleteDialog
            open={confirmDeleteDialog}
            handleClose={closeConfirmDeleteHandler}
            deleteHandler={deleteHandler}
          />
        </Suspense>
      )}

      {isAddMember && (
        <Suspense fallback={<Backdrop open />}>
          <AddMemberDialog
            open={isAddMember}
            handleClose={closeAddMemberHandler}
            addMemberHandler={addMemberHandler}
          />
        </Suspense>
      )}
      <Drawer
        sx={{
          display: { xs: "block", sm: "none" },
        }}
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
    <Stack
      width={w}
      sx={{
        backgroundImage:
        "linear-gradient(to bottom, rgba(200, 200, 200,0.9), rgba(234, 112, 112, 0.9))",
        height: "100vh",
        overflowY: "auto",
      }}
    >
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
      <Stack direction={"row"} spacing={"1rem"} alignItems={"center"}>
        <AvatarCard avatar={avatar} />
        <Typography>{name}</Typography>
      </Stack>
    </Link>
  );
});

export default Group;
