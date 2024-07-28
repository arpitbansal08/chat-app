import { Button, Dialog, DialogTitle, Stack, Typography } from "@mui/material";
import React, { useState } from "react";
import { SampleUsers } from "../../constants/sampleData";
import UserItem from "../shared/UserItem";
const AddMemberDialog = ({ addMember, isLoadingAddMemeber, chatId }) => {
  const [members, setMembers] = useState(SampleUsers);
  const [selectedMembers, setSelectedMembers] = useState([]);

  const selectMemberHandler = (id) => {
    setSelectedMembers((prev) =>
      prev.includes(id)
        ? prev.filter((currentElement) => currentElement !== id)
        : [...prev, id]
    );
  };

  const addMemberHandler = () => {
    closeHandler();
  };
  const closeHandler = () => {
    setMembers([]);
    setSelectedMembers([]);
  };
  return (
    <Dialog open onClose={closeHandler}>
      <Stack p={"1rem"} width={"20rem"} spacing={"1rem"}>
        <DialogTitle textAlign={"center"}>Add Member</DialogTitle>
        <Stack spacing={"1rem"}>
          {members.length > 0 ? (
            members.map((user) => (
              <UserItem
                key={user._id}
                user={user}
                handler={selectMemberHandler}
                isAdded={selectedMembers.includes(user._id)}
              />
            ))
          ) : (
            <Typography textAlign={"center"}>No Freinds </Typography>
          )}
        </Stack>
        <Stack
          direction={"row"}
          justifyContent={"space-evenly"}
          alignItems={"center"}
        >
          <Button color="error" onClick={closeHandler}>
            Cancel
          </Button>
          <Button
            variant="contained"
            disabled={isLoadingAddMemeber}
            onClick={addMemberHandler}
          >
            Submit
          </Button>
        </Stack>
      </Stack>
    </Dialog>
  );
};

export default AddMemberDialog;
