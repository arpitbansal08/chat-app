import jwt from "jsonwebtoken";
import mongoose from "mongoose";
const cookieOptions = {
  httpOnly: true,
  maxAge: 15 * 24 * 60 * 60 * 1000,
  sameSite: "none",
  secure: true,
};
const connectDB = (uri) => {
  mongoose
    .connect(uri, {
      dbName: "ChaTApp",
    })
    .then((data) => console.log("Connected to DB :", data.connection.host))
    .catch((err) => console.log(err));
};

const sendToken = (res, user, code, message) => {
  const token = jwt.sign({ _id: user._id }, process.env.JWT_SECRET, {
    expiresIn: "15d",
  });
  return res.status(code).cookie("chatuToken", token, cookieOptions).json({
    success: true,
    message,
  });
};

const emmitEvent = (req, event, users, data) => {
  console.log("emmitEvent", event,data);
};

const deleteFilesfromCloudinary = (public_id) => {
  console.log("deleteFilesfromCloudinary", public_id);
};
export { connectDB, cookieOptions, emmitEvent, sendToken ,deleteFilesfromCloudinary};

