import { SAY_HELLO, SUBMIT_CONTACT, SENDING, GET_ERROR } from "../actions/types";

const initialState = {
    hello: [
    { key: 1, say: "Say Hello || Contact Me" },
],
    msg: 'toto',
    status: null,
    id: null,
    sending: false,
    subRes: [],
    subResd: '',
    msgd: '',
    statusd: ''

};

export default function(state = initialState, action) {
  switch (action.type) {
    case SAY_HELLO:
        return { ...state };
    case SUBMIT_CONTACT:
        return {
            ...state,
            subRes: action.payload,
            subResd: action.payload,
            // subResd: `${action.payload[0]}`,
            // console.log(subResd),
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
            msgd: action.payload.msg,
            status: action.payload.status,
            statusd: action.payload.status,
            id: action.payload.id
        };
    default:
      return state;
  }
}
