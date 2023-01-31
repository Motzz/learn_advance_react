//libraries
import React, { Fragment, createContext } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

//pages
import Youtube from "../pages/Youtube/Youtube";
import Product from "../pages/Product/Product";
import LifeCycle from "../pages/LifeCycle/LifeCycle";
import BlogPost from "../pages/BlogPost/BlogPost";
import DetailPost from "../pages/BlogPost/DetailPost/DetailPost";
//style
import "./Home.css";
import GlobalProvider from "../../context/context";

//statefull component
class Home extends React.Component {
  // state = {
  //   showComponent: true,
  //   totalOrder: 5,
  // };

  // handleChangeStateDispatch = (action) => {
  //   if (action.type === "PLUS_ORDER") {
  //     return this.setState({
  //       totalOrder: this.state.totalOrder + 1,
  //     });
  //   }
  //   if (action.type === "MINUS_ORDER") {
  //     return this.setState({
  //       totalOrder: this.state.totalOrder - 1,
  //     });
  //   }
  // };
  componentDidMount() {
    // setTimeout(() => {
    //   this.setState({
    //     showComponent: false,
    //   });
    // }, 5000);
  }
  render() {
    return (
      <>
        <div>
          <Router>
            {/* <Provider
              value={{
                state: this.state,
                dispatch: this.handleChangeStateDispatch,
              }}
            > */}
            {/* <p> Youtube Component</p>
            <hr />
            <YoutubeComp time="01.11" deskripsi="Lol" />
            <YoutubeComp time="02.11" />
            <YoutubeComp time="04.11" />
            <YoutubeComp time="05.11" />
            <YoutubeComp />
            <p> Product Component</p>
            <hr />
            <Product />
            <p> LifeCycle Component</p>
            <hr />
            {this.state.showComponent ? <LifeCycle /> : null}
            <p> BlogPost Component</p>
            <hr />
            <BlogPost /> */}
            <Fragment>
              <div className="navigation">
                {/* <p>Component Global</p> pasti ada di semua halaman*/}

                <Link to="/">Home</Link>
                <Link to="/product">product</Link>
                <Link to="/lifeCycle">lifeCycle</Link>
                <Link to="/youtube">youtube</Link>
              </div>

              <Routes>
                <Route path="/" element={<BlogPost />} />
                <Route path="/detail-post/:idPost" element={<DetailPost />} />
                <Route path="/product" element={<Product />} />
                <Route path="/lifeCycle" element={<LifeCycle />} />
                <Route path="/youtube" element={<Youtube />} />
              </Routes>
            </Fragment>
            {/* </Provider> */}
          </Router>
        </div>
      </>
    );
  }
}
export default GlobalProvider(Home);
// export default Home;
