import React from "react";
import Header from "./Header";
import Title from "../shared/Title";
import { Grid } from "@mui/material";
import ChatList from "../specific/ChatList";
import { useParams } from "react-router-dom";
import { SampleChats } from "../../constants/sampleData";
import Profile from "../specific/Profile";

const AppLayout = () => (WrapperComponent) => {
  return (props) => {
    const params = useParams();
    const chatId = params.chatId;
    const handleDeleteChat = (e, _id, groupChat) => {
      e.preventDefault();
      console.log("Delete Chat", _id, groupChat);
    };
    return (
      <>
        <Title />
        <Header />
        <Grid container height={"92vh"}>
          <Grid
            item
            sm={4}
            md={3}
            sx={{ display: { xs: "none", sm: "block" } }}
            height={"100%"}
          >
            <ChatList
              chats={SampleChats}
              chatId={chatId}
              //   newMessagesAlert={[{ chatId, count: "4" }]}
              //   onlineUsers={["1", "2", "3"]}
              handleDeleteChat={handleDeleteChat}
            />
          </Grid>
          <Grid item xs={12} sm={8} md={5} lg={6} height={"100%"}>
            <WrapperComponent {...props} />
          </Grid>
          <Grid
            item
            md={4}
            lg={3}
            sx={{
              display: { xs: "none", md: "block" },
              padding: "2rem",
              bgcolor: "rgba(0,0,0,0.85)",
            }}
            height={"100%"}
          >
            <Profile/>
          </Grid>
        </Grid>
      </>
    );
  };
};

export default AppLayout;
