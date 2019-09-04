import { SAY_HELLO, SUBMIT_CONTACT, SENDING, GET_ERROR } from "./types";
import axios from 'axios';

// export const contactAction = helloMsg => dispatch => {
  export const contactAction = (name, email, phone, msg, recaptchare, rbot) => dispatch => {

  // console.log(helloMsg);
  console.log(name, email, phone, msg, recaptchare, rbot);
  dispatch(sendHelloMsg());
    axios
      .post('https://bryanczar.com/con/processer.php', {
          name,
          email,
          phone, 
          msg, 
          recaptchare,
          rbot
      })
      .then(res => {       
        dispatch({
          type: SUBMIT_CONTACT,
          payload: res.data,
        });
        console.log(res)
      })
      .catch(err => {
        dispatch(getError(err.response, err));
        console.log(err);
      });
};

export const helloAction = () => {
    return {
      type: SAY_HELLO,
    };
  };

export const sendHelloMsg = () => {
    return {
      type: SENDING
    };
};

export const getError = (msg, status, id = null) => {
    return {
      type: GET_ERROR,
      payload: { msg, status, id }
    };
  };
