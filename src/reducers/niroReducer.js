import { NIRO } from "../actions/types";

const initialState = {
  items: [
    { id: 44, name: "Bryan Czar Muli" },
    { id: 67, name: "Full Stack JavaScript Engineer" },
    { id: 83, name: "(TypeScript/React/React Native/NestJS/TanStack/Next.js/GraphQL" },
    { id: 19, name: "Feed Me" },
  ],
};

export default function(state = initialState, action) {
  switch (action.type) {
    case NIRO:
      return { ...state };
    default:
      return state;
  }
}
