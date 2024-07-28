import dotenv from "dotenv";
import express from "express";
import cookieParser from "cookie-parser";
import { errorMiddleware } from "./middlewares/error.js";
import { singleAvatar } from "./middlewares/multer.js";
import adminRoute from "./routes/admin.js";
import chatRoute from "./routes/chat.js";
import userRoute from "./routes/user.js";
import { connectDB } from "./utils/features.js";
import { createMessage } from "./seeders/chat.js";
import { Server } from "socket.io";
import { createServer } from "http";
import { NEW_MESSAGE, NEW_MESSAGE_ALERT } from "./constants/events.js";
import { v4 as uuid } from "uuid";
import { getSockets } from "./lib/helper.js";
dotenv.config({ path: "./.env" });
const MONGO_URI = process.env.MONGO_URI;
const PORT = process.env.PORT || 3000;
connectDB(MONGO_URI);
const userSocketIDs = new Map();

// create singlechat
// createSingleChats(10);
// createGroupChats(10);
// createMessage(100);
// createMessageInaChat(13,"6683ba9ca7284acb0c94459b");
const app = express();
const server = createServer(app);
const io = new Server(server, {});

// Using Middlewares here
app.use(express.json());
app.use(cookieParser());
app.use("/user", singleAvatar, userRoute);
app.use("/chat", chatRoute);
app.use("/admin", adminRoute);

app.get("/", (req, res) => {
  res.send("Hello World");
});
io.on("connection", (socket) => {
  const user = {
    _id: "Ada",
    name: "Adadad",
  };
  userSocketIDs.set(user._id.toString(), socket.id);
  console.log("a user connected", userSocketIDs);
  socket.on("NEW_MESSAGE", async ({ chatId, members, message }) => {
    const messageForRealTime = {
      content: message,
      _id: uuid(),
      sender: {
        _id: user._id,
        name: user.name,
      },
      chat: chatId,
      createdAt: new Date().toISOString(),
    };
    const messageForDB = {
      content: message,
      sender: user._id,
      chat: chatId,
    };
    // these are the members to whom we have to send the message( emmit is to send and on is to receive)
    const membersScoket = getSockets(members);
    io.to(membersScoket).emit(NEW_MESSAGE, {
      chatId,
      message: messageForRealTime,
    });
    io.to(membersScoket).emit(NEW_MESSAGE_ALERT, { chatId });
    try {
      await Message.create(messageForDB);
    } catch (err) {
      console.log(err);
    }
  });
  socket.on("disconnect", () => {
    userSocketIDs.delete(user._id.toString());
    console.log("user disconnected");
  });
});
app.use(errorMiddleware);
server.listen(PORT, () => {
  console.log(
    `Server is running on port ${PORT} and in ${process.env.NODE_ENV} mode`
  );
});

export { userSocketIDs };
