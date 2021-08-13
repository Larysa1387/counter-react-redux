import { createStore /*, applyMiddleware*/, combineReducers } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import counterReducer from "./counter/counter-reducer";

// const initailState = {
//   counter: {
//     value: 10,
//     step: 15,
//   },
// };

// const reducer = (state = initailState, { type, payload }) => {
//   switch (type) {
//     case "counter/Increment":
//       // return { counterValue: state.counterValue + 1 };
//       return {
//         ...state,
//         counter: {
//           ...state.counter,
//           value: state.counter.value + payload,
//         },
//       };
//     case "counter/Decrement":
//       return {
//         ...state,
//         counter: {
//           ...state.counter,
//           value: state.counter.value - payload,
//         },
//       };
//     default:
//       return state;
//   }
// };

// Этот редьюсер только для каунтера
// const counterInitialState = {
//   value: 10,
//   step: 15,
// };

// Разобьем свойства стейта на отдельные редьюсеры
// const valueReducer = (state = 10, { type, payload }) => {
//   switch (type) {
//     case "counter/Increment":
//       return state + payload;
//     case "counter/Decrement":
//       return state - payload;

//     default:
//       return state;
//   }
// };

// const stepReducer = (state = 5, action) => state;

// const counterReducer = (state = counterInitialState, { type, payload }) => {
//   switch (type) {
//     case "counter/Increment":
//       return {
//         ...state,
//         value: state.value + payload,
//       };
//     case "counter/Decrement":
//       return {
//         ...state,
//         value: state.value - payload,
//       };
//     default:
//       return state;
//   }
// };

// const counterReducer = combineReducers({
//   value: valueReducer,
//   step: stepReducer,
// });

const rootReducer = combineReducers({
  counter: counterReducer,
});
const store = createStore(rootReducer, composeWithDevTools());

export default store;
