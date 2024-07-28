import moment from "moment";

const fileFormat = (url = "") => {
  const fileExtension = url.split(".").pop();
  if (
    fileExtension === "mp4" ||
    fileExtension === "webm" ||
    fileExtension === "ogg"
  ) {
    return "video";
  }
  if (fileExtension === "mp3" || fileExtension === "wav") {
    return "audio";
  }
  if (
    fileExtension === "jpg" ||
    fileExtension === "jpeg" ||
    fileExtension === "png" ||
    fileExtension === "gif"
  ) {
    return "image";
  }
  return "file";
};

const transform = (url = "", width = "100") => {
  return url;
};

const getLast7days = () => {
  const currentDate = moment();
  const last7days =[];
  for (let i = 0; i < 7; i++) {
    const dayDate= currentDate.clone().subtract(i, "days");
    const dayName= dayDate.format("ddd");
    last7days.unshift(dayName);
  }
  return last7days;
};
export { fileFormat, transform, getLast7days };
