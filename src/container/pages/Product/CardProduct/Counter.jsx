import React, { Component } from "react";
import { connect } from "react-redux"; //reduxxxxxxxxxxxxxxxxxxx
import ActionType from "../../../../redux/reducer/globalActionType";
import { RootContext } from "../../../Home/Home";
import { GlobalConsumer } from "../../../../context/context";
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
    // console.log(this.props);
    //redux
    // return (
    //   <div className="counter">
    //     <button className="plus" onClick={this.props.handleMin22dd}>
    //       -
    //     </button>
    //     <input type="text" value=/*{this.state.order}*/ {this.props.ordersdsd} />

    //     <button className="minus" onClick={this.props.handlePlus2d2d}>
    //       +
    //     </button>
    //   </div>
    // );

    //state
    // return (
    //   <RootContext.Consumer>
    //     {(value) => {
    //       console.log(value);
    // return (
    //   <div className="counter">
    //     <button className="plus" onClick={() => value.dispatch({ type: "MINUS_ORDER" })}>
    //       -
    //     </button>
    //     <input type="text" value=/*{this.state.order}*/ {value.state.totalOrder} />

    //     <button className="minus" onClick={() => value.dispatch({ type: "PLUS_ORDER" })}>
    //       +
    //     </button>
    //   </div>
    // );
    //     }}
    //   </RootContext.Consumer>
    // );
    // console.log(this);

    return (
      <div className="counter">
        <button className="plus" onClick={() => this.props.dispatch({ type: "MINUS_ORDER" })}>
          -
        </button>
        <input type="text" value=/*{this.state.order}*/ {this.props.state.totalOrder} />

        <button className="minus" onClick={() => this.props.dispatch({ type: "PLUS_ORDER" })}>
          +
        </button>
      </div>
    );
  }
}
//redux
//STORE
// const mapStateToProps_store = (state) => {
//   return {
//     ordersdsd: state.totalOrder,
//   };
// };
// //DISPATCH
// const mapDispatchToProps_dispatch = (dispatch) => {
//   return {
//     handlePlus2d2d: () => dispatch({ type: ActionType.PLUS_ORDER }),
//     handleMin22dd: () => dispatch({ type: ActionType.MINUS_ORDER }),
//   };
// };
// export default connect(mapStateToProps_store, mapDispatchToProps_dispatch)(Counter);
// export default Counter;
export default GlobalConsumer(Counter);
