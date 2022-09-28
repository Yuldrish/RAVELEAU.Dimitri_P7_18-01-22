// const { PrismaClient } = require("@prisma/client");

// const prisma = new PrismaClient();
// const bcrypt = require("bcrypt");

// async function main() {
//   // ... you will write your Prisma Client queries here
//   /*   [
//     {
//       id: 1,
//       dateTime: "8/7/2021",
//       title: "Devil, Probably, The (Diable probablement, Le)",
//       content:
//         "Curabitur gravida nisi at nibh. In hac habitasse platea dictumst. Aliquam augue quam, sollicitudin vitae, consectetuer eget, rutrum at, lorem.\n\nInteger tincidunt ante vel ipsum. Praesent blandit lacinia erat. Vestibulum sed magna at nunc commodo placerat.\n\nPraesent blandit. Nam nulla. Integer pede justo, lacinia eget, tincidunt eget, tempus vel, pede.",
//       userId: 1,
//       multimedia: "http://dummyimage.com/103x100.png/dddddd/000000",
//     },
//     {
//       id: 2,
//       dateTime: "10/13/2021",
//       title: "I Love Trouble",
//       content:
//         "Mauris enim leo, rhoncus sed, vestibulum sit amet, cursus id, turpis. Integer aliquet, massa id lobortis convallis, tortor risus dapibus augue, vel accumsan tellus nisi eu orci. Mauris lacinia sapien quis libero.\n\nNullam sit amet turpis elementum ligula vehicula consequat. Morbi a ipsum. Integer a nibh.\n\nIn quis justo. Maecenas rhoncus aliquam lacus. Morbi quis tortor id nulla ultrices aliquet.",
//       userId: 2,
//       multimedia: "http://dummyimage.com/174x100.png/dddddd/000000",
//     },
//     {
//       id: 3,
//       dateTime: "11/14/2021",
//       title:
//         "Luke and Lucy: The Texas Rangers (Suske en Wiske: De Texas rakkers)",
//       content:
//         "Duis bibendum. Morbi non quam nec dui luctus rutrum. Nulla tellus.\n\nIn sagittis dui vel nisl. Duis ac nibh. Fusce lacus purus, aliquet at, feugiat non, pretium quis, lectus.",
//       userId: 3,
//       multimedia: "http://dummyimage.com/163x100.png/cc0000/ffffff",
//     },
//     {
//       id: 4,
//       dateTime: "7/23/2021",
//       title: "Death Warrant",
//       content:
//         "In sagittis dui vel nisl. Duis ac nibh. Fusce lacus purus, aliquet at, feugiat non, pretium quis, lectus.\n\nSuspendisse potenti. In eleifend quam a odio. In hac habitasse platea dictumst.\n\nMaecenas ut massa quis augue luctus tincidunt. Nulla mollis molestie lorem. Quisque ut erat.",
//       userId: 4,
//       multimedia: "http://dummyimage.com/136x100.png/ff4444/ffffff",
//     },
//     {
//       id: 5,
//       dateTime: "7/14/2021",
//       title: "Penny Serenade",
//       content:
//         "Proin leo odio, porttitor id, consequat in, consequat ut, nulla. Sed accumsan felis. Ut at dolor quis odio consequat varius.",
//       userId: 5,
//       multimedia: "http://dummyimage.com/152x100.png/dddddd/000000",
//     },
//     {
//       id: 6,
//       dateTime: "1/2/2022",
//       title: "Firemen's Ball, The (Horí, má panenko)",
//       content:
//         "Phasellus sit amet erat. Nulla tempus. Vivamus in felis eu sapien cursus vestibulum.\n\nProin eu mi. Nulla ac enim. In tempor, turpis nec euismod scelerisque, quam turpis adipiscing lorem, vitae mattis nibh ligula nec sem.",
//       userId: 6,
//       multimedia: "http://dummyimage.com/129x100.png/5fa2dd/ffffff",
//     },
//     {
//       id: 7,
//       dateTime: "2/28/2021",
//       title: "Impudent Girl (L'effrontée)",
//       content:
//         "Donec diam neque, vestibulum eget, vulputate ut, ultrices vel, augue. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec pharetra, magna vestibulum aliquet ultrices, erat tortor sollicitudin mi, sit amet lobortis sapien sapien non mi. Integer ac neque.\n\nDuis bibendum. Morbi non quam nec dui luctus rutrum. Nulla tellus.\n\nIn sagittis dui vel nisl. Duis ac nibh. Fusce lacus purus, aliquet at, feugiat non, pretium quis, lectus.",
//       userId: 7,
//       multimedia: "http://dummyimage.com/155x100.png/ff4444/ffffff",
//     },
//     {
//       id: 8,
//       dateTime: "3/14/2021",
//       title: "That Darn Cat!",
//       content:
//         "Duis bibendum, felis sed interdum venenatis, turpis enim blandit mi, in porttitor pede justo eu massa. Donec dapibus. Duis at velit eu est congue elementum.\n\nIn hac habitasse platea dictumst. Morbi vestibulum, velit id pretium iaculis, diam erat fermentum justo, nec condimentum neque sapien placerat ante. Nulla justo.",
//       userId: 8,
//       multimedia: "http://dummyimage.com/180x100.png/5fa2dd/ffffff",
//     },
//     {
//       id: 9,
//       dateTime: "4/20/2021",
//       title: "Bethlehem",
//       content:
//         "Vestibulum quam sapien, varius ut, blandit non, interdum in, ante. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Duis faucibus accumsan odio. Curabitur convallis.\n\nDuis consequat dui nec nisi volutpat eleifend. Donec ut dolor. Morbi vel lectus in quam fringilla rhoncus.",
//       userId: 9,
//       multimedia: "http://dummyimage.com/126x100.png/ff4444/ffffff",
//     },
//     {
//       id: 10,
//       dateTime: "7/20/2021",
//       title: "Science and Islam",
//       content:
//         "Duis bibendum, felis sed interdum venenatis, turpis enim blandit mi, in porttitor pede justo eu massa. Donec dapibus. Duis at velit eu est congue elementum.\n\nIn hac habitasse platea dictumst. Morbi vestibulum, velit id pretium iaculis, diam erat fermentum justo, nec condimentum neque sapien placerat ante. Nulla justo.\n\nAliquam quis turpis eget elit sodales scelerisque. Mauris sit amet eros. Suspendisse accumsan tortor quis turpis.",
//       userId: 10,
//       multimedia: "http://dummyimage.com/249x100.png/ff4444/ffffff",
//     },
//   ].forEach((post) => {
//     prisma.post
//       .create({
//         data: {
//           content: post.content,
//           title: post.title,
//           multimedia: post.multimedia,
//           userId: post.userId,
//         },
//       })
//       .then((newPost) => {
//         console.log("newPost", newPost);
//       });
//   }); */
//   const password = await bcrypt.hash("1234567890", 10);
//   console.log("🚀 ~ file: test.js ~ line 115 ~ main ~ password", password);
//   const user = await prisma.user.update({
//     where: { email: "bcreber2@cbsnews.com" },
//     data: {
//       password,
//     },
//   });
//   console.log("🚀 ~ file: test.js ~ line 122 ~ main ~ user", user);
// }

// main()
//   .catch((e) => {
//     throw e;
//   })
//   .finally(async () => {
//     await prisma.$disconnect();
//   });
