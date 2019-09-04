import { GET_ITEMS } from "../actions/types";

const initialState = {
  items: [
    { id: 44, name: "Bryan Czar Muli" },
    { id: 67, name: "Full-Stack JavaScript Engineer" },
    { id: 83, name: "(JavaScript/React/Redux/React Native/Node.js) + Rails" },
    { id: 19, name: "Feed Me" },
  ],
};

export default function(state = initialState, action) {
  switch (action.type) {
    case GET_ITEMS:
      return { ...state };
    default:
      return state;
  }
}
