import { createStore } from 'redux';

const initialState = {};

export const reducer = (state = initialState, action) => {
  switch(action.type){
    default:
      return state;
  }
};

export function initializeStore(){
  return createStore(reducer);
}