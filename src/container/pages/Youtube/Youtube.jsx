import React, { Fragment } from "react";
import YoutubeComp from "../../../component/YoutubeComponent/YoutubeComp";
class Youtube extends React.Component {
  render() {
    return (
      <>
        <Fragment>
          <p> Youtube Component</p>
          <hr />
          <YoutubeComp time="01.11" deskripsi="Lol" />
          <YoutubeComp time="02.11" />
          <YoutubeComp time="04.11" />
          <YoutubeComp time="05.11" />
          <YoutubeComp />
        </Fragment>
      </>
    );
  }
}

export default Youtube;
