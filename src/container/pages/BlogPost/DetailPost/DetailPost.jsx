import React, { Fragment } from "react";
import axios from "axios";
class DetailPost extends React.Component {
  state = {
    post: {
      title: "",
      body: "",
    },
  };
  componentDidMount() {
    console.log(localStorage.getItem("idPost"));
    let id = localStorage.getItem("idPost");
    axios.get(`http://localhost:3004/posts/${id}`).then((response) => {
      console.log(response);
      this.setState({
        post: response.data,
      });
    });
  }
  render() {
    return (
      <>
        <Fragment>
          <p>Title : {this.state.post.title}</p>
          <p>Body : {this.state.post.body}</p>
        </Fragment>
      </>
    );
  }
}

export default DetailPost;
