import {
  Dialog,
  Stack,
  DialogTitle,
  Typography,
  ListItem,
  Avatar,
  Button,
} from "@mui/material";
import React, { memo } from "react";
import { SampleNotifications } from "../../constants/sampleData";

const Notification = () => {
  const friendRequestHandler = ({ _id, accept }) => {
    console.log("id:", _id);
  };
  return (
    <Dialog open>
      <Stack p={{ xs: "1rem", sm: "1rem" }} maxWidth={"30rem"}>
        <DialogTitle textAlign={"center"}>Notification</DialogTitle>
        {SampleNotifications.length > 0 ? (
          SampleNotifications.map((notification) => (
            <NotificationItem
              {...notification}
              handler={friendRequestHandler}
              key={notification._id}
            />
          ))
        ) : (
          <Typography>No Notifications</Typography>
        )}
      </Stack>
    </Dialog>
  );
};

const NotificationItem = memo(({ sender, _id }, handler) => {
  const { name, avatar } = sender;
  return (
    <ListItem sx={{ padding: "1rem" }}>
      <Stack
        direction={"row"}
        alignItems={"center"}
        spacing={"1rem"}
        width={"100%"}
      >
        <Avatar src={avatar} />
        <Typography
          variant="body1"
          sx={{
            flexGrow: 2,
            display: "-webkit-box",
            WebkitLineClamp: 1,
            WebkitBoxOrient: "vertical",
            overflow: "hidden",
            textOverflow: "ellipsis",
            width: "100%",
          }}
        >
          {`${name} send you a friend request`}
        </Typography>
        <Stack direction={{ xs: "column", sm: "row" }}>
          <Button onClick={() => handler({ _id, accept: true })}>Accept</Button>
          <Button color="error" onClick={() => handler({ _id, accept: false })}>
            Reject
          </Button>
        </Stack>
      </Stack>
    </ListItem>
  );
});
export default Notification;
