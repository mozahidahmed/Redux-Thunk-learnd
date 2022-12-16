import {
    ADD_PRODUCT,
    LOAD_PRODUCT,
    REMOVE_PRODUCT,
    
  } from "../actionTypes/actionTypes";
  


  export const loadProduct = (data) => {
    return {
      type: LOAD_PRODUCT,
      payload: data,
    };
  };
  

export const removeProduct = (id) => {
  return {
    type: REMOVE_PRODUCT,
    payload: id,
  };
};


  export const addProduct = (data) => {
    return {
      type: ADD_PRODUCT,
      payload: data,
    };
  };