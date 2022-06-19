let Groups = [
  {
    groupName: "foundation-1",
    teacher: "Javohir Berdiyev ",
    groupId: 1,
    status:'active',
    subject:"Matematika",
    educationType:"Sanoqli",
    payment:200000,
  },
  {
    groupName: "bootcamp-2",
    teacher: "Eldor Raxmonov",
    groupId: 2,
    status:'muzlatilgan',
    subject:"English",
    educationType:"Sanoqli",
    payment:300000,
  },
  {
    groupName: "bootcamp-3",
    teacher: "Malika Karimova",
    groupId: 3,
    status:'active',
    subject:"Falsafa",
    educationType:"Oylik",
    payment:200000,
  },
  {
    groupName: "foundation-4",
    teacher: "MuhammadAli Fattohov",
    groupId: 4,
    status:'muzlatilgan',
    subject:"Geografiya",
    educationType:"Sanoqli",
    payment:100000,
  },
];

let Teachers = [
  {
    user_img: "https://source.unsplash.com/random?animal",
    name: "javohir",
    surName: "berdiyev",
    personalId: "u" + Math.floor(Math.random() * 10000),
    groupId: [1, 4],
    phone: 996069006,
    type: "active",
  },
  {
    user_img: "https://source.unsplash.com/random?admin",
    name: "Malika",
    surName: "Aliyeva",
    personalId: "u" + Math.floor(Math.random() * 10000),
    groupId: [3],
    phone: 996069006,
    type: "active",
  },
  {
    user_img: "https://source.unsplash.com/random?person",
    name: "Fabrício",
    surName: "Lorin",
    personalId: "u" + Math.floor(Math.random() * 10000),
    groupId: [2],
    phone: 996069006,
    type: "active",
  },
];

let Students = [
  {
    id:1,
    user_img: "https://source.unsplash.com/random?animal",
    name: "Ali Xr",
    surName: "Khurshetov",
    personalId: "p" + Math.floor(Math.random() * 10000),
    groupId: [1],
    phone: 996069006,
    type: "active",
    groupNum:2,
    birthday:"02.04.2003",
    oyliktolov:200000,
    hisobdagiqoldiq:200000,
  },
  {
    id:2,
    user_img: "https://source.unsplash.com/random?admin",
    name: "Malika",
    surName: "Abdullayeva",
    personalId: "p" + Math.floor(Math.random() * 10000),
    groupId: [1, 2],
    phone: 996069006,
    type: "active",
    groupNum:11,
    birthday:"02.04.2001",
    oyliktolov:250000,
    hisobdagiqoldiq:200000,
  },
  {
    id:3,
    user_img: "https://source.unsplash.com/random?person",
    name: "Dinora",
    surName: "Yuldasheva",
    personalId: "p" + Math.floor(Math.random() * 10000),
    groupId: [1, 4],
    phone: 996063356,
    type: "active",
    groupNum:4,
    birthday:"12.10.1996",
    oyliktolov:180000,
    hisobdagiqoldiq:0,
  },
  {
    id:4,
    user_img: "https://source.unsplash.com/random?nature",
    name: "Odil ",
    surName: "Axrorov",
    personalId: "p" + Math.floor(Math.random() * 10000),
    groupId: [1],
    phone: 992345643,
    type: "active",
    groupNum:4,
    birthday:"01.07.2003",
    oyliktolov:190000,
    hisobdagiqoldiq:100000,
  },
  {
    id:5,
    user_img: "https://source.unsplash.com/random?flower",
    name: "Jamshid",
    surName: "Safarov",
    personalId: "p" + Math.floor(Math.random() * 10000),
    groupId: [1],
    phone: 999856434,
    type: "active",
    groupNum:3,
    birthday:"05.23.2006",
    oyliktolov:200000,
    hisobdagiqoldiq:100000,
  },
  {
    id:6,
    user_img: "https://source.unsplash.com/random?moon",
    name: "Elmurod",
    surName: "Axmedov",
    personalId: "p" + Math.floor(Math.random() * 10000),
    groupId: [1],
    phone: 992348319,
    type: "active",
    groupNum:1,
    birthday:"12.28.2004",
    oyliktolov:200000,
    hisobdagiqoldiq:200000,
  },
  {
    id:7,
    user_img: "https://source.unsplash.com/random?earth",
    name: "Gulmira",
    surName: "Avabakirova",
    personalId: "p" + Math.floor(Math.random() * 10000),
    groupId: [1],
    phone: 996069006,
    type: "active",
    groupNum:2,
    birthday:"22.02.2007",
    oyliktolov:100000,
    hisobdagiqoldiq:0,
  },
  {
    id:8,
    user_img: "https://source.unsplash.com/random?sea",
    name: "Komil",
    surName: "Allamjonov",
    personalId: "p" + Math.floor(Math.random() * 10000),
    groupId: [1],
    phone: 993429867,
    type: "active",
    groupNum:6,
    birthday:"30.08.2001",
    oyliktolov:200000,
    hisobdagiqoldiq:200000,
  },
  {
    id:9,
    user_img: "https://source.unsplash.com/random?fish",
    name: "Antonio ",
    surName: "Banderes",
    personalId: "p" + Math.floor(Math.random() * 10000),
    groupId: [1],
    phone: 994532981,
    type: "active",
    groupNum:9,
    birthday:"02.04.1999",
    oyliktolov:300000,
    hisobdagiqoldiq:100000,
  },
  {
    id:10,
    user_img: "https://source.unsplash.com/random",
    name: "Zack King",
    surName: "King",
    personalId: "p" + Math.floor(Math.random() * 10000),
    groupId: [1],
    phone: 999386212,
    type: "active",
    groupNum:3,
    birthday:"15.11.2007",
    oyliktolov:150000,
    hisobdagiqoldiq:0,
  },
  // {
  //   user_img: "https://source.unsplash.com/random?football",
  //   name: "Gull",
  //   surName: "Elfleda",
  //   personalId: "p" + Math.floor(Math.random() * 10000),
  //   groupId: [1],
  //   phone: 996069006,
  //   type: "active",
  // },
  // {
  //   user_img: "https://source.unsplash.com/random?teacher",
  //   name: "Gull ",
  //   surName: "Elfleda",
  //   personalId: "p" + Math.floor(Math.random() * 10000),
  //   groupId: [1],
  //   phone: 996069006,
  //   type: "active",
  // },
  // {
  //   user_img: "https://source.unsplash.com/random?student",
  //   name: "Nilda ",
  //   surName: "Anatoliy",
  //   personalId: "p" + Math.floor(Math.random() * 10000),
  //   groupId: [1],
  //   phone: 996069006,
  //   type: "active",
  // },
  // {
  //   user_img: "https://source.unsplash.com/random?coder",
  //   name: "Kyriaki ",
  //   surName: "Ailill",
  //   personalId: "p" + Math.floor(Math.random() * 10000),
  //   groupId: [1],
  //   phone: 996069006,
  //   type: "active",
  // },
  // {
  //   user_img: "https://source.unsplash.com/random?tesla",
  //   name: "Branislav ",
  //   surName: "Miroslav",
  //   personalId: "p" + Math.floor(Math.random() * 10000),
  //   groupId: [1],
  //   phone: 996069006,
  //   type: "active",
  // },
  // {
  //   user_img: "https://source.unsplash.com/random?girls",
  //   name: "Johana ",
  //   surName: "Rigantona",
  //   personalId: "p" + Math.floor(Math.random() * 10000),
  //   groupId: [1],
  //   phone: 996069006,
  //   type: "active",
  // },
  // {
  //   user_img: "https://source.unsplash.com/random?cat",
  //   name: "Dalitso",
  //   surName: "Mark",
  //   personalId: "p" + Math.floor(Math.random() * 10000),
  //   groupId: [1],
  //   phone: 996069006,
  //   type: "active",
  // },
  // {
  //   user_img: "https://source.unsplash.com/random?caw",
  //   name: "Theun ",
  //   surName: "Kathrine",
  //   personalId: "p" + Math.floor(Math.random() * 10000),
  //   groupId: [1],
  //   phone: 996069006,
  //   type: "active",
  // },
  // {
  //   user_img: "https://source.unsplash.com/random?ukrain",
  //   name: "Mile ",
  //   surName: "Xenophon",
  //   personalId: "p" + Math.floor(Math.random() * 10000),
  //   groupId: [1],
  //   phone: 996069006,
  //   type: "active",
  // },
  // {
  //   user_img: "https://source.unsplash.com/random?messi",
  //   name: "Aintza ",
  //   surName: "Gusta",
  //   personalId: "p" + Math.floor(Math.random() * 10000),
  //   groupId: [1],
  //   phone: 996069006,
  //   type: "active",
  // },
  // {
  //   user_img: "https://source.unsplash.com/random?ronald",
  //   name: "Carlie ",
  //   surName: "Meera",
  //   personalId: "p" + Math.floor(Math.random() * 10000),
  //   groupId: [1],
  //   phone: 996069006,
  //   type: "active",
  // },
  // {
  //   user_img: "https://source.unsplash.com/random?jack",
  //   name: "Berahthraban ",
  //   surName: "Jerri",
  //   personalId: "p" + Math.floor(Math.random() * 10000),
  //   groupId: [1],
  //   phone: 996069006,
  //   type: "active",
  // },
  // {
  //   user_img: "https://source.unsplash.com/random?mack",
  //   name: "Olufunmilola ",
  //   surName: "Bhaskar",
  //   personalId: "p" + Math.floor(Math.random() * 10000),
  //   groupId: [1],
  //   phone: 996069006,
  //   type: "active",
  // },
  // {
  //   user_img: "https://source.unsplash.com/random?america",
  //   name: "Hadrien ",
  //   surName: "Nicolau",
  //   personalId: "p" + Math.floor(Math.random() * 10000),
  //   groupId: [1],
  //   phone: 996069006,
  //   type: "active",
  // },
  // {
  //   user_img: "https://source.unsplash.com/random?love",
  //   name: "Arn ",
  //   surName: "Agneta",
  //   personalId: "p" + Math.floor(Math.random() * 10000),
  //   groupId: [1],
  //   phone: 996069006,
  //   type: "active",
  // },
  // {
  //   user_img: "https://source.unsplash.com/random?students",
  //   name: "Karl ",
  //   surName: "Anacletus",
  //   personalId: "p" + Math.floor(Math.random() * 10000),
  //   groupId: [1],
  //   phone: 996069006,
  //   type: "active",
  // },
  // {
  //   user_img: "https://source.unsplash.com/random?earth",
  //   name: "Lorelai ",
  //   surName: "Marigold",
  //   personalId: "p" + Math.floor(Math.random() * 10000),
  //   groupId: [1],
  //   phone: 996069006,
  //   type: "active",
  // },
  // {
  //   user_img: "https://source.unsplash.com/random?tree",
  //   name: "Smiljana ",
  //   surName: "Ljuben",
  //   personalId: "p" + Math.floor(Math.random() * 10000),
  //   groupId: [1],
  //   phone: 996069006,
  //   type: "active",
  // },
  // {
  //   user_img: "https://source.unsplash.com/random?wood",
  //   name: "Joakim ",
  //   surName: "Dorijan",
  //   personalId: "p" + Math.floor(Math.random() * 10000),
  //   groupId: [1],
  //   phone: 996069006,
  //   type: "active",
  // },
  // {
  //   user_img: "https://source.unsplash.com/random?bear",
  //   name: "Darejan ",
  //   surName: "Františka",
  //   personalId: "p" + Math.floor(Math.random() * 10000),
  //   groupId: [1],
  //   phone: 996069006,
  //   type: "active",
  // },
  // {
  //   user_img: "https://source.unsplash.com/random?quotes",
  //   name: "Azamjon",
  //   surName: "Aliyev",
  //   personalId: "p" + Math.floor(Math.random() * 10000),
  //   groupId: [1],
  //   phone: 996069006,
  //   type: "active",
  // },
  // {
  //   user_img: "https://source.unsplash.com/random?lack",
  //   name: "Ibragim ",
  //   surName: "Noora",
  //   personalId: "p" + Math.floor(Math.random() * 10000),
  //   groupId: [1],
  //   phone: 996069006,
  //   type: "active",
  // },
  // {
  //   user_img: "https://source.unsplash.com/random?osh",
  //   name: "Priscila ",
  //   surName: "Zitkala",
  //   personalId: "p" + Math.floor(Math.random() * 10000),
  //   groupId: [1],
  //   phone: 996069006,
  //   type: "active",
  // },
  // {
  //   user_img: "https://source.unsplash.com/random?random",
  //   name: "Chinenye ",
  //   surName: "Valdemar",
  //   personalId: "p" + Math.floor(Math.random() * 10000),
  //   groupId: [1],
  //   phone: 996069006,
  //   type: "active",
  // },
  // {
  //   user_img: "https://source.unsplash.com/random?book",
  //   name: "Horos ",
  //   surName: "Casimiro",
  //   personalId: "p" + Math.floor(Math.random() * 10000),
  //   groupId: [1],
  //   phone: 996069006,
  //   type: "active",
  // },
  // {
  //   user_img: "https://source.unsplash.com/random?tree",
  //   name: "Smiljana ",
  //   surName: "Ljuben",
  //   personalId: "p" + Math.floor(Math.random() * 10000),
  //   groupId: [1],
  //   phone: 996069006,
  //   type: "active",
  // },
];

export { Groups, Teachers, Students }
