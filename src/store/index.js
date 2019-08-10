import { createStore } from 'redux';


export const increment = count => ({
    type: 'CHANGE_COUNT',
    payload: count + 1
  });
  
export const decrement = count => ({
    type: 'CHANGE_COUNT',
    payload: count - 1
});

const initialState = {
  count: 0
}

const counterReducer = (state = initialState, action) => {
  switch(action.type) {
    case 'CHANGE_COUNT':
      return {
        ...state,
        count: action.payload
      }
    default:
      return state;
  }
};


export default createStore(counterReducer);