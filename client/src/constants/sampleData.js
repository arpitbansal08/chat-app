export const SampleChats = [
  {
    avatar: ["https://material-ui.com/static/images/avatar/1.jpg"],
    name: "John Doe",
    _id: "1",
    groupChat: false,
    members: ["1", "2"],
  },
  {
    avatar: ["https://material-ui.com/static/images/avatar/2.jpg"],
    name: "Jane Doe",
    _id: "2",
    groupChat: false,
    members: ["1", "2"],
  },
  {
    avatar: [
      "https://material-ui.com/static/images/avatar/3.jpg",
      "https://material-ui.com/static/images/avatar/2.jpg",
      "https://material-ui.com/static/images/avatar/1.jpg",
      "https://material-ui.com/static/images/avatar/4.jpg",
      "https://material-ui.com/static/images/avatar/5.jpg",
    ],
    name: "Group Chat",
    _id: "3",
    groupChat: true,
    members: ["1", "2", "3"],
  },
];

export const SampleUsers = [
  {
    avatar: "https://material-ui.com/static/images/avatar/1.jpg",
    name: "John Doe",
    _id: "1",
  },
  {
    avatar: "https://material-ui.com/static/images/avatar/2.jpg",
    name: "Jane Doe",
    _id: "2",
  },
];
export const SampleNotifications = [
  {
    sender: {
      avatar: "https://material-ui.com/static/images/avatar/1.jpg",
      name: "John Doe",
    },
    _id: "1",
    message: "Hello",
  },
  {
    sender: {
      avatar: "https://material-ui.com/static/images/avatar/2.jpg",
      name: "Jane Doe",
    },
    _id: "2",
    message: "Hello Arpit",
  },
];

export const SampleMessages = [
  {
    attachements: [
      {
        public_id: "adasda",
        url: "https://material-ui.com/static/images/avatar/7.jpg",
      },
    ],
    content: "Hello",
    _id: "dsdsdds", // message Id
    sender: {
      _id: "user._id",
      name: "Chaman",
    },
    chat: "chatId",
    createdAt: "2021-10-10T10:10:10.000Z",
  },

  {
    attachements: [
      {
        public_id: "addasd",
        url: "https://material-ui.com/static/images/avatar/2.jpg",
      },
    ],
    content: "Hi there!",
    _id: "dsdsdds2", // message Id
    sender: {
      _id: "Sdsd",
      name: "Alice",
    },
    chat: "chatId",
    createdAt: "2021-10-11T11:11:11.000Z",
  },
  {
    attachements: [],
    content: "Hi second",
    _id: "dsdsdds3", // message Id
    sender: {
      _id: "Sdsd",
      name: "Alice",
    },
    chat: "chatId",
    createdAt: "2021-10-11T11:11:11.000Z",
  },
  {
    attachements: [
      { url: "https://material-ui.com/static/images/avatar/3.jpg" },
    ],
    sender: {
      _id: "user._id",
      name: "Khaman",
    },
    chat: "chatId",
    createdAt: "2021-10-10T10:10:10.000Z",
  },
];
