import React, { Component } from "react";
import { connect } from "react-redux";
import { RootContext } from "../../Home/Home";
import { GlobalConsumer } from "../../../context/context";
class LifeCycle extends Component {
  //yang sering dipake constructor->render->componentDidMount->componentDidUpdate->componentWillUnmount
  constructor(props) {
    super(props);
    this.state = {
      count: 1,
    };
    console.log("constructor");
  }
  static getDerivedStateFromProps(props, state) {
    console.log("getDerivedStateFromProps");
    return null;
  }
  componentDidMount() {
    //untuk update pake method ini
    console.log("componentDidMount");
    // setTimeout(() => {
    //   this.setState({
    //     count: 2, //apakah ini harus diupdate
    //   });
    // }, 3000); //setelah 3 detik
  }
  shouldComponentUpdate(nextProps, nextState) {
    console.group("shouldComponentUpdate");

    // console.log("nextProps:" + nextProps);
    console.log("nextState:" + nextState);
    console.log("this :" + this.state);
    alert(nextState.count);
    //mungkin ini nanti bisa dipake kalau jumlah barang kurang dari stock maka akan di eksekusi
    if (nextState.count >= 4) {
      return false;
    }
    console.groupEnd();

    return true; //maka disini harus di update jadi true
  }
  getSnapshotBeforeUpdate(prevProps, prevState) {
    console.log("getSnapshotBeforeUpdate");
    return true;
  }
  componentDidUpdate(prevProps, prevState, snapshot) {
    console.log("componentDidUpdate");
  }
  componentWillUnmount() {
    console.log("componentWillUnmount");
  }

  changeCount = () => {
    this.setState({
      count: this.state.count + 1,
    });
  };
  render() {
    console.log("render");

    return (
      // <RootContext.Consumer>
      //   {(value) => {
      //     return (
      //       <>
      //         <p> LifeCycle Component</p>
      //         <hr />
      //         <button onClick={this.changeCount}>Component button{this.state.count}</button>
      //         {/* <p>total order : {this.props.order}</p> */}
      //         <p>total order : {value.state.totalOrder}</p>
      //       </>
      //     );
      //   }}
      // </RootContext.Consumer>

      <>
        <p> LifeCycle Component</p>
        <hr />
        <button onClick={this.changeCount}>Component button{this.state.count}</button>
        {/* <p>total order : {this.props.order}</p> */}
        <p>total order : {this.props.state.totalOrder}</p>
      </>
    );
  }
}
//STORE
const mapStateToProps_store = (state /*ini cuman penamaan parameter dari global yang ada di index.js*/) => {
  return {
    order: state.totalOrder,
  };
};
// export default connect(mapStateToProps_store)(LifeCycle);
// export default LifeCycle;
export default GlobalConsumer(LifeCycle);
