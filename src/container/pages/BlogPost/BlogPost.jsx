import React, { Component, Fragment, useContext } from "react";
import "./BlogPost.css";
import PostComponent from "../../../component/PostComponent/PostComponent";
import axios from "axios";
import { RouterContext } from "react-router-dom";
import API from "../../../service";
// import { withRouter } from "react-router-dom";
// import { useHistory } from "react-router-dom";
class BlogPost extends Component {
  state = {
    post: [],
    formBlogPost: {
      userId: 1,
      id: "",
      title: "",
      body: "",
    },
    isUpdate: false,
    comment: [],
    // navigate: useNavigate(),
  };

  getPostAPI = () => {
    // fetch("https://jsonplaceholder.typicode.com/posts")
    //   .then((response) => response.json())
    //   .then((json) =>
    //     this.setState({
    //       post: json,
    //     })
    //   );
    // axios.get("http://localhost:3004/posts?_sort=id&_order=desc").then((response) =>
    //   this.setState({
    //     post: response.data,
    //   })
    // );
    API.getNewsBlog().then((result) => {
      this.setState({
        post: result,
      });
    });
    // API.getComment().then((result) => {
    //   this.setState({
    //     comment: result,
    //   });
    // });
  };
  postDataAPI = () => {
    // axios.post("http://localhost:3004/posts", this.state.formBlogPost).then(
    //   (response) => {
    //     // alert(response.data.id);
    //     this.getPostAPI();
    //     this.setState({
    //       formBlogPost: {
    //         userId: 1,
    //         id: "",
    //         title: "",
    //         body: "",
    //       },
    //     });
    //   },
    //   (err) => {
    //     console.log("error :", err);
    //   }
    // );
    API.postNews(this.state.formBlogPost).then(
      (res) => {
        this.getPostAPI();
        this.setState({
          formBlogPost: {
            userId: 1,
            id: "",
            title: "",
            body: "",
          },
        });
      },
      (err) => {
        console.log("error :", err);
      }
    );
  };
  putDataToAPI = () => {
    // axios.put(`http://localhost:3004/posts/${this.state.formBlogPost.id}`, this.state.formBlogPost).then((response) => {
    //   console.log(response);
    //   this.getPostAPI();
    //   this.setState({
    //     isUpdate: false,
    //     formBlogPost: {
    //       userId: 1,
    //       id: "",
    //       title: "",
    //       body: "",
    //     },
    //   });
    // });
    API.updateNews(this.state.formBlogPost, this.state.formBlogPost.id).then((response) => {
      this.getPostAPI();
      this.setState({
        isUpdate: false,
        formBlogPost: {
          userId: 1,
          id: "",
          title: "",
          body: "",
        },
      });
    });
  };

  handelFormChange = (event) => {
    //event.target untuk ngambil apa aja yang ada di input (hasil di console <input id="" type="text" name="content">)
    // console.log("obj dari formBlogPost", this.state.formBlogPost);
    // console.log("obj BARU", newDataPost);
    console.log("berubah oitt", event.target);
    let newDataPost = { ...this.state.formBlogPost }; // ini ngambil data lama
    let timeStamp = new Date().getTime();
    if (!this.state.isUpdate) {
      newDataPost["id"] = timeStamp;
    }
    newDataPost[event.target.name] = event.target.value;

    this.setState(
      {
        formBlogPost: newDataPost,
      },
      () => {
        console.log("obj formBlogPost", this.state.formBlogPost);
      }
    );
  };
  handleSubmit = () => {
    if (this.state.isUpdate) {
      this.putDataToAPI();
    } else {
      this.postDataAPI();
    }
  };
  handleUpdate = (dataPost) => {
    console.log(dataPost);
    this.setState({
      formBlogPost: dataPost,
      isUpdate: true,
    });
  };
  handleRemove(idPost) {
    // alert(dataPost);
    // console.log(dataPost);
    // console.log(dataPost.id);
    // axios.delete(`http://localhost:3004/posts/${idPost}`).then((response) => this.getPostAPI());
    API.deleteNews(idPost).then((response) => this.getPostAPI());
  }
  handleDetail = (idPost) => {
    localStorage.setItem("idPost", idPost);
  };

  // handelFormChange(event) {
  //   //event.target untuk ngambil apa aja yang ada di input (hasil di console <input id="" type="text" name="content">)
  //   console.log("berubah cok", event.target);
  //   let newDataPost = { ...this.state.formBlogPost }; // ini kopi data lama
  //   console.log("obj dari formBlogPost", this.state.formBlogPost);
  //   console.log("obj dari formBlogPost", newDataPost);

  //   let title = event.target.value;
  //   // this.setState(
  //   //   {
  //   //     formBlogPost: title,
  //   //   },
  //   //   () => {
  //   //     // console.log("obj formBlogPost", this.state.formBlogPost);
  //   //   }
  //   // );
  // }
  componentDidMount() {
    this.getPostAPI();
  }
  // const navigate = useNavigate();

  render() {
    // const useRoute = Router();

    return (
      <Fragment>
        <p> BlogPost Component</p>
        <hr />
        <p className="section-title">Blog Post</p>
        <div className="form-add">
          <label>Title</label>
          <input type="text" value={this.state.formBlogPost.title} name="title" id="" onChange={this.handelFormChange} />
          <label htmlFor="content">body content</label>
          <input type="text" value={this.state.formBlogPost.body} name="body" id="" onChange={this.handelFormChange} />
          <button type="submit" onClick={this.handleSubmit}>
            Simpan
          </button>
        </div>
        <div className="container">
          {/* {this.state.comment.map((comments) => {
            return (
              <>
                <p>{comments.email}</p>
              </>
            );
          })} */}
          {this.state.post.map((post) => {
            return (
              <>
                <PostComponent key={post.id} data={post} remove={() => this.handleRemove(post.id)} update={() => this.handleUpdate(post)} goDetail={() => this.handleDetail(post.id)} />
              </>
            );
          })}
        </div>
      </Fragment>
    );
  }
}
// export default withRouter(BlogPost);
export default BlogPost;
