import * as actionTypes from '@constants/actions/welcome';
const welcome = (state = {counter: {'value': 0}}, action) => {
  if (typeof state === null) {
    return { ...state, counter:  initialState};
  }
  switch(action.type) {
    case actionTypes.INCREMENT: 
      state = { ...state, counter: action.payload };
      break;
    case actionTypes.DECREMENT: 
      state = { ...state, counter: action.payload };
      break;
    case actionTypes.RESET: 
      state = { ...state, counter: action.payload };
      break;
    default: 
      break;
  }
  return state;

};

export default welcome;
