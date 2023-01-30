import React from "react";
import "./PostComponent.css";
import { Link, Router } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const PostComponent = ({ data, remove, update, goDetail }) => {
  const navigate = useNavigate();
  const cobaPush = () => {
    navigate("/product");
  };
  return (
    <>
      <div className="post">
        <div className="img-thumb">
          <img src="https://placeimg.com/200/150/arch" alt="" onClick={() => cobaPush()} />
        </div>
        <div className="content">
          <p className="title" onClick={() => goDetail(data.id)}>
            {data.title}
          </p>
          <p className="desc">{data.body}</p>
          <button onClick={() => remove(data.id)}>Remove</button>
          <button onClick={() => update(data)}>Update</button>
          <Link to={`/detail-post/${data.id}`} onClick={() => goDetail(data.id)}>
            Detail
          </Link>
        </div>
      </div>
    </>
  );
};
PostComponent.defaultProps = {
  title: "Title Here",
  desc: "Description Here",
};
export default PostComponent;
