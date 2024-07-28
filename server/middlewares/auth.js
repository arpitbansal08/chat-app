import jwt from "jsonwebtoken";
import ErrorHandler from "../utils/utility.js";

const isAuthenticated = (req, res, next) => {
  const token = req.cookies.chatuToken;
  if (!token) {
    return next(new ErrorHandler("Please login to access this route", 401));
  }
  const decodedData = jwt.verify(token, process.env.JWT_SECRET);
  req.user = decodedData._id;
  next();
};

const adminOnly = (req, res, next) => {
  const token = req.cookies["chatU-Admin-Token"];
  if (!token) {
    return next(
      new ErrorHandler(
        "Please login to access this route,only admin can access",
        401
      )
    );
  }
  const decodedData = jwt.verify(token, process.env.JWT_SECRET);
  
  if (decodedData !== process.env.ADMIN_SECRET_KEY) {
    return next(
      new ErrorHandler(
        "Not Authorized to access this route, only admin can access",
        401
      )
    );
  }
  next();
};

export { isAuthenticated, adminOnly };
