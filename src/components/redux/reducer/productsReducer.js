import {
    ADD_PRODUCT,
    LOAD_PRODUCT,
    REMOVE_PRODUCT,
  } from "../actionTypes/actionTypes";
  
  const initialState = {
    cart: [],
    products: [],
  };
  
  const productReducer = (state = initialState, action) => {
    switch (action.type) {
     

        case LOAD_PRODUCT:
        return {
          ...state,
          products: action.payload,
        };


      case ADD_PRODUCT:
        return {
          ...state,
          products: [...state.products, action.payload],
        };
      
     
        case REMOVE_PRODUCT:
            return {
              ...state,
              products: state.products.filter(
                (product) => product._id !== action.payload
              ),
            };
     



      default:
        return state;
    }
  };
  
  export default productReducer;