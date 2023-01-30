import React from "react";
import "./YoutubeComp.css";
const YoutubeComp = ({ time, title, deskripsi }) => {
  return (
    <>
      <div className="youtube-wrapper">
        <div className="img-thumb">
          <img src="https://elements-cover-images-0.imgix.net/14323942-e885-4d54-a208-405a503f4fb0?auto=compress%2Cformat&fit=max&w=900&s=2e047c146fc06e0b0fc869e3ac98d0f0" alt="" />
          <p className="time">{time}</p>
        </div>
        <p className="title">{title}</p>
        <p className="desc">{deskripsi}</p>
      </div>
    </>
  );
};
YoutubeComp.defaultProps = {
  time: "00.00",
  title: "Title Here",
  deskripsi: "Description Here",
};
export default YoutubeComp;
