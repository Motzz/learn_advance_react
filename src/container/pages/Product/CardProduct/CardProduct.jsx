import React, { Fragment, Component } from "react";
import "./CardProduct.css";

class CardProduct extends Component {
  state = {
    order: 0,
  };
  handleCounterChange = (parameterValue) => {
    this.props.onCounterChange(parameterValue);
  };
  handlePlus = () => {
    this.setState(
      {
        order: (this.state.order += 1),
      },
      () => {
        this.handleCounterChange(this.state.order);
      }
    );
  };
  handleMin = () => {
    if (this.state.order <= 0) {
      this.setState({
        order: (this.state.order = 0),
      });
    }
    this.setState(
      {
        order: (this.state.order -= 1),
      },
      () => {
        this.handleCounterChange(this.state.order);
      }
    );
  };

  render() {
    return (
      <>
        <div className="card">
          <div className="img-product">
            <img src="https://elements-cover-images-0.imgix.net/14323942-e885-4d54-a208-405a503f4fb0?auto=compress%2Cformat&fit=max&w=900&s=2e047c146fc06e0b0fc869e3ac98d0f0" alt="" />
          </div>
          <p className="product-title">Buah Naga</p>
          <p className="product-price">Rp. 20,000</p>
          <div className="counter">
            <button className="plus" onClick={this.handleMin}>
              -
            </button>
            <input type="text" value={this.state.order} />

            <button className="minus" onClick={this.handlePlus}>
              +
            </button>
          </div>
        </div>
      </>
    );
  }
}

export default CardProduct;
