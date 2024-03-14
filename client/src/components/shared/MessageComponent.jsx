import { Box, Typography } from "@mui/material";
import React, { memo } from "react";
import { userColor } from "../../constants/color";
import moment from "moment";
import { fileFormat } from "../../lib/features";
import RenderAttachement from "./RenderAttachement";

const MessageComponent = ({ message, user }) => {
  const { sender, content, attachements = [], createdAt } = message;
  const sameSender = sender?._id === user?._id;
  const timeAgo = moment(createdAt).fromNow();
  return (
    <div
      style={{
        alignSelf: sameSender ? "flex-end" : "flex-start",
      }}
    >
      {!sameSender && (
        <Typography
          color={userColor}
          fontWeight={"600"}
          variant="caption"
          padding={"0.1rem"}
        >
          {sender?.name}
        </Typography>
      )}
      {content && (
        <Typography
          variant="body1"
          sx={{
            color: "black",
            backgroundColor: "wheat",
            borderRadius: "9px",
            padding: "0.4rem",
            width: "fit-content",
          }}
        >
          {content}
        </Typography>
      )}
      {attachements.length > 0 &&
        attachements.map((attachment, index) => {
          const url = attachment.url;
          const fileType = fileFormat(url);
          return (
            <Box key={index}>
              <a href={url} target="_blank" download style={{ color: "black" }}>
                {/* <RenderAttachement file={fileType} url={url} /> */}
                {RenderAttachement({ file: fileType, url })}
              </a>
            </Box>
          );
        })}

      <Typography variant="caption" color={"text.secondary"}>
        {timeAgo}
      </Typography>
    </div>
  );
};

export default memo(MessageComponent);
