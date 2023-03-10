import axios from "axios";
import { RootPath, OnlineRoot } from "./Config";

const Put = (path, root, data) => {
  const promise = new Promise((resolve, reject) => {
    axios.put(`${root ? OnlineRoot : RootPath}/${path}`, data).then(
      (result) => {
        resolve(result);
      },
      (error) => {
        reject(error);
      }
    );
  });
  return promise;
};

export default Put;
