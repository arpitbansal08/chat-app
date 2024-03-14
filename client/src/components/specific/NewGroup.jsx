import React from "react";
import { Dialog, Stack, DialogTitle, Typography, Button } from "@mui/material";
import { SampleUsers } from "../../constants/sampleData";
import UserItem from "../shared/UserItem";
import { TextField } from "@mui/material";
import { useInputValidation } from "6pp";
import { useState } from "react";
const NewGroup = () => {
  const groupName = useInputValidation("");

  let isLoadingSendFriendRequest = false;

  const [members, setMembers] = useState(SampleUsers);
  const [selectedMembers, setSelectedMembers] = useState([]);

  const selectMemberHandler = (id) => {
    setSelectedMembers((prev) =>
      prev.includes(id)
        ? prev.filter((currentElement) => currentElement !== id)
        : [...prev, id]
    );
  };
  console.log(selectedMembers);

  const submitHandler = () => {
    console.log("Creating group...");
  };
  const closeHandler = () => {
    console.log("Closing dialog...");
  };
  return (
    <Dialog open onClose={() => closeHandler}>
      <Stack p={{ xs: "1rem", sm: "2rem" }} width={"25rem"} spacing={"1rem"}>
        <DialogTitle textAlign={"center"} variant="h4">
          New Group
        </DialogTitle>
        <TextField
          label="Group Name"
          value={groupName.value}
          onChange={groupName.changeHandler}
        />
        <Typography variant="body1">Members</Typography>
        <Stack>
          {members.map((user) => (
            <UserItem
              user={user}
              key={user._id}
              isAdded={selectedMembers.includes(user._id)}
              handler={selectMemberHandler}
              handlerIsLoading={isLoadingSendFriendRequest}
            />
          ))}
        </Stack>
        <Stack direction={"row"} justifyContent={"flex-end"} spacing={"1rem"}>
          <Button variant="outlined" color="error" size="large">
            Cancel
          </Button>
          <Button variant="contained" size="large" onClick={submitHandler}>
            Create
          </Button>
        </Stack>
      </Stack>
    </Dialog>
  );
};

export default NewGroup;
