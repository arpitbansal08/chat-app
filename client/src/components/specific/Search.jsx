import { Dialog, DialogTitle, List, Stack } from "@mui/material";
import React, { useState } from "react";
import { useInputValidation } from "6pp";
import { InputAdornment, TextField } from "@mui/material";
import { Search as SearchIcon } from "@mui/icons-material";
import UserItem from "../shared/UserItem";
import { SampleUsers } from "../../constants/sampleData";

const Search = () => {
  const search = useInputValidation("");
  let isLoadingSendFriendRequest = false;
  const addFriendHandler = (id) => {
    console.log("id:", id);
  };
  const [users, setUsers] = useState(SampleUsers);

  return (
    <Dialog open={true}>
      <Stack p={"2rem"} direction={"column"} width={"25rem"}>
        <DialogTitle textAlign={"center"}>Find People</DialogTitle>
        <TextField
          label=""
          value={search.value}
          onChange={search.changeHandler}
          variant="outlined"
          size="small"
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <SearchIcon />
              </InputAdornment>
            ),
          }}
        />
        <List>
          {users.map((user) => (
            <UserItem
              user={user}
              key={user._id}
              handler={addFriendHandler}
              handlerIsLoading={isLoadingSendFriendRequest}
            />
          ))}
        </List>
      </Stack>
    </Dialog>
  );
};

export default Search;
