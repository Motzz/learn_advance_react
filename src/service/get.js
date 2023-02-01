import axios from "axios";
import { RootPath, OnlineRoot } from "./Config";
//(data itu cuman ngasik function biar ga error, karena harus function)
const Get = (path, root) => (data) => {
  const promise = new Promise((resolve, reject) => {
    axios.get(`${root ? OnlineRoot : RootPath}/${path}`).then(
      (response) => {
        resolve(response.data);
      },
      (error) => {
        reject(error);
      }
    );
  });
  return promise;
};

export default Get;
