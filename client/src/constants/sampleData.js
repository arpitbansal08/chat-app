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
  {
    avatar: ["https://material-ui.com/static/images/avatar/4.jpg"],
    name: "John Black",
    _id: "4",
    groupChat: false,
    members: ["1", "2"],
  },

  {
    avatar: ["https://material-ui.com/static/images/avatar/5.jpg"],
    name: "Alice Smith",
    _id: "5",
    groupChat: false,
    members: ["1", "5"],
  },
  {
    avatar: ["https://material-ui.com/static/images/avatar/6.jpg"],
    name: "Bob Johnson",
    _id: "6",
    groupChat: false,
    members: ["2", "6"],
  },
  {
    avatar: ["https://material-ui.com/static/images/avatar/7.jpg"],
    name: "Emily Brown",
    _id: "7",
    groupChat: false,
    members: ["1", "7"],
  },
  {
    avatar: ["https://material-ui.com/static/images/avatar/8.jpg"],
    name: "Michael Johnson",
    _id: "8",
    groupChat: false,
    members: ["2", "8"],
  },
  {
    avatar: [
      "https://material-ui.com/static/images/avatar/9.jpg",
      "https://material-ui.com/static/images/avatar/10.jpg",
    ],
    name: "Group Chat 2",
    _id: "9",
    groupChat: true,
    members: ["1", "2", "9"],
  },
  {
    avatar: ["https://material-ui.com/static/images/avatar/11.jpg"],
    name: "Sarah Smith",
    _id: "10",
    groupChat: false,
    members: ["1", "10"],
  },
  {
    avatar: ["https://material-ui.com/static/images/avatar/12.jpg"],
    name: "David Johnson",
    _id: "11",
    groupChat: false,
    members: ["2", "11"],
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
  {
    avatar: "https://material-ui.com/static/images/avatar/3.jpg",
    name: "Alice Smith",
    _id: "3",
  },
  {
    avatar: "https://material-ui.com/static/images/avatar/4.jpg",
    name: "John Black",
    _id: "4",
  },
  {
    avatar: "https://material-ui.com/static/images/avatar/5.jpg",
    name: "Emily Brown",
    _id: "5",
  },
  {
    avatar: "https://material-ui.com/static/images/avatar/6.jpg",
    name: "Michael Johnson",
    _id: "6",
  },
  {
    avatar: "https://material-ui.com/static/images/avatar/7.jpg",
    name: "Sarah Smith",
    _id: "7",
  },
  {
    avatar: "https://material-ui.com/static/images/avatar/8.jpg",
    name: "David Johnson",
    _id: "8",
  },
  {
    avatar: "https://material-ui.com/static/images/avatar/9.jpg",
    name: "Jessica Lee",
    _id: "9",
  },
  {
    avatar: "https://material-ui.com/static/images/avatar/10.jpg",
    name: "Daniel Wilson",
    _id: "10",
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
