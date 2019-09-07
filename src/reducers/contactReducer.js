import { SAY_HELLO, SUBMIT_CONTACT, SENDING, GET_ERROR } from "../actions/types";

const initialState = {
    hello: [
    { key: 1, say: "Say Hello || Contact Me" },
],
    sending: false,
    subRes: '',
    msg: 'toto',
    status: null,
};

export default function(state = initialState, action) {
  switch (action.type) {
    case SAY_HELLO:
        return { ...state };
    case SUBMIT_CONTACT:
        return {
            ...state,
            subRes: action.payload,
            sending: false,
        };
    case SENDING:
        return {
            ...state,
            sending: true
        };
    case GET_ERROR:
        return {
            msg: action.payload.msg,
        };
    default:
      return state;
  }
}
