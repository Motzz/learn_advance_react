// import {} from redux;
const redux = require("redux");
const createStore = redux.createStore;
const initialState = {
  value: 0,
  age: 17,
};

//2. reducer (suatu fungsi yang hanya bisa mengupdate store) -> contohnya agen
const rootReducer = (state = initialState, action) => {
  console.log(action);
  //   if (action.type === "ADD_AGE") {
  //     return {
  //       ...state, //untuk copy data (kalo langsung ubah data nantinya objek nya jadi age doang, value:0 jadi ilang)
  //       age: state.age + 1,
  //     };
  //   }
  //   if (action.type === "CHANGE_VALUE") {
  //     return {
  //       ...state, //untuk copy data (kalo langsung ubah data nantinya objek nya jadi age doang, value:0 jadi ilang)
  //       value: state.value + action.newValue + 1,
  //     };
  //   }
  switch (action.type) {
    case "ADD_AGE":
      return {
        ...state, //untuk copy data (kalo langsung ubah data nantinya objek nya jadi age doang, value:0 jadi ilang)
        age: state.age + 1,
      };
    case "CHANGE_VALUE":
      return {
        ...state, //untuk copy data (kalo langsung ubah data nantinya objek nya jadi age doang, value:0 jadi ilang)
        value: state.value + action.newValue + 1,
      };
    default:
      return state;
  }
  //   return state;
};

//1. store (penyimpanan state secara global)
const store = createStore(rootReducer);
console.log(store.getState());

//4. subscription(proses penggunaan store)
store.subscribe(() => {
  console.log("store change:", store.getState());
});

//3. dispatch/ditchpatching/action(proses pemanggilan reducer) -> untuk manggil agen
store.dispatch({ type: "ADD_AGE" });
store.dispatch({ type: "CHANGE_VALUE", newValue: 12 });
console.log(store.getState());
