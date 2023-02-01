// import axios from "axios";

// ///posts?_sort=id&_order=desc
// const RootPath = "http://localhost:3004";
// const OnlineRoot = "https://jsonplaceholder.typicode.com";
// //(data itu cuman ngasik function biar ga error, karena harus function)
// const Get = (path, root) => (data) => {
//   const promise = new Promise((resolve, reject) => {
//     axios.get(`${root ? OnlineRoot : RootPath}/${path}`).then(
//       (response) => {
//         resolve(response.data);
//       },
//       (error) => {
//         reject(error);
//       }
//     );
//   });
//   return promise;
// };

// const Post = (path, root, data) => {
//   const promise = new Promise((resolve, reject) => {
//     axios.post(`${root ? OnlineRoot : RootPath}/${path}`, data).then(
//       (result) => {
//         resolve(result);
//       },
//       (error) => {
//         reject(error);
//       }
//     );
//   });
//   return promise;
// };

// const getNewsBlog = Get("posts?_sort=id&_order=desc", false);
// const getComment = Get("comments", true);

// const postNews = (data) => Post("posts", false, data);

// const API = {
//   getNewsBlog,
//   getComment,
//   postNews,
// };

// export default API;

import Get from "./get";
import Post from "./post";

const getNewsBlog = Get("posts?_sort=id&_order=desc", false);
const getComment = Get("comments", true);

const postNews = (data) => Post("posts", false, data);

const API = {
  getNewsBlog,
  getComment,
  postNews,
};

export default API;
