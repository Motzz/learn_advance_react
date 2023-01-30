import React, { Fragment, Component } from "react";
import "./CardProduct.css";
import Counter from "./Counter";
class CardProduct extends Component {
  render() {
    return (
      <>
        <div className="card">
          <div className="img-product">
            <img src="https://elements-cover-images-0.imgix.net/14323942-e885-4d54-a208-405a503f4fb0?auto=compress%2Cformat&fit=max&w=900&s=2e047c146fc06e0b0fc869e3ac98d0f0" alt="" />
          </div>
          <p className="product-title">Buah Naga</p>
          <p className="product-price">Rp. 20,000</p>
          <Counter /*onCounterChange={(value) => this.props.onCounterChange(value)}*/ />
          {/* //kalo class props ga pake parameter di returnnya langsung aja this.props */}
        </div>
      </>
    );
  }
}

export default CardProduct;
