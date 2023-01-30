import React, { Component } from "react";
import { connect } from "react-redux"; //reduxxxxxxxxxxxxxxxxxxx
class Counter extends Component {
  //   state = {
  //     order: 0,
  //   };
  //   handleCounterChange = (parameterValue) => {
  //     this.props.onCounterChange(parameterValue); //kalo class props ga pake parameter di returnnya langsung aja this.props
  //   };
  //   handlePlus = () => {
  //     this.setState(
  //       {
  //         order: (this.state.order += 1), //karena udah pakek redux diganti pake props, awalnya kan pake state
  //       },
  //       () => {
  //         this.handleCounterChange(this.state.order);
  //       }
  //     );
  //   };
  //   handleMin = () => {
  //     if (this.state.order <= 0) {
  //       this.setState({
  //         order: (this.state.order = 0),
  //       });
  //     }
  //     this.setState(
  //       {
  //         order: (this.state.order -= 1),
  //       },
  //       () => {
  //         this.handleCounterChange(this.state.order);
  //       }
  //     );
  //   };

  render() {
    console.log(this.props);
    return (
      <div className="counter">
        <button className="plus" onClick={this.props.handleMin}>
          -
        </button>
        <input type="text" value=/*{this.state.order}*/ {this.props.order} />

        <button className="minus" onClick={this.props.handlePlus}>
          +
        </button>
      </div>
    );
  }
}
//STORE
const mapStateToProps_store = (state /*ini cuman penamaan parameter dari global yang ada di index.js*/) => {
  return {
    order: state.totalOrder,
  };
};
//DISPATCH
const mapDispatchToProps_dispatch = (dispatch /*untuk type di global index.js*/) => {
  return {
    handlePlus: () => dispatch({ type: "PLUS_ORDER" }),
    handleMin: () => dispatch({ type: "MINUS_ORDER" }),
  };
};
export default connect(mapStateToProps_store, mapDispatchToProps_dispatch)(Counter);
