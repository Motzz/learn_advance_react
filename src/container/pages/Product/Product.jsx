import React, { Fragment, Component } from "react";
import "./Product.css";
import CardProduct from "./CardProduct/CardProduct";
import { connect } from "react-redux";
class Product extends Component {
  // state = {
  //   order: 0,
  // };

  // handleCounterChange = (newValue) => {
  //   this.setState({
  //     order: newValue,
  //   });
  // };

  render() {
    return (
      <Fragment>
        <nav>
          <p> Product Component</p>
          <hr />
          <div className="header">
            <div className="logo">
              <p>Logo perusahaan Nanti pake gambar</p>
            </div>
            <div className="troley">
              <p>Logo Trolley Nanti pake gambar</p>
              <div className="count">{this.props.order}</div>
            </div>
          </div>
        </nav>
        <CardProduct /*onCounterChange={(value) => this.handleCounterChange(value)}*/ />
      </Fragment>
    );
  }
}
//STORE
const mapStateToProps_store = (state /*ini cuman penamaan parameter dari global yang ada di index.js*/) => {
  return {
    order: state.totalOrder,
  };
};
export default connect(mapStateToProps_store)(Product);
