import React, { Component, createContext } from "react";

export const RootContext = createContext(); //create storee

//Provider (parent)
const Provider = RootContext.Provider; //penyedia induknya
const GlobalProvider = (Children) => {
  return class ParentComp extends Component {
    state = {
      showComponent: true,
      totalOrder: 5,
    };

    handleChangeStateDispatch = (action) => {
      if (action.type === "PLUS_ORDER") {
        return this.setState({
          totalOrder: this.state.totalOrder + 1,
        });
      }
      if (action.type === "MINUS_ORDER") {
        return this.setState({
          totalOrder: this.state.totalOrder - 1,
        });
      }
    };
    render() {
      return (
        <Provider
          value={{
            state: this.state,
            dispatch: this.handleChangeStateDispatch,
          }}
        >
          <Children {...this.props} />
        </Provider>
      );
    }
  };
};
export default GlobalProvider;

//Consumer
const Consumer = RootContext.Consumer; //yang makeee
export const GlobalConsumer = (Children) => {
  return class ParentConsumer extends Component {
    render() {
      return (
        <Consumer>
          {(value) => {
            return <Children {...this.props} {...value} />;
          }}
        </Consumer>
      );
    }
  };
};
