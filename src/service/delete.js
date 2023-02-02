import axios from "axios";
import { RootPath, OnlineRoot } from "./Config";

const Delete = (path, root) => {
  const promise = new Promise((resolve, reject) => {
    axios.delete(`${root ? OnlineRoot : RootPath}/${path}`).then(
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

export default Delete;
