import * as types from "./actiontype";

export const Reducer = (state, action) => {
  const { type, payload } = action;
  switch (type) {
    case types.PRODUCT_FETCH_REQUEST:
      return {
        ...state,
        isLoading: true,
      };
    case types.PRODUCT_FETCH_SUCCESS:
      return {
        ...state,
        isLoading: false,
        product: payload,
        filterData: payload,
      };
    case types.PRODUCT_FETCH_FAILURE:
      return {
        ...state,
        isError: true,
        isLoading: false,
      };
    case types.FILTER_PRODUCT:
      return {
        ...state,
        filterData: payload,
      };
    case types.ADD_CART_ITEMS:
      return {
        ...state,
        cart: [...state.cart, payload],
      };

    case types.CHANGE_CART_ITEMS:
      return{
        ...state,
        cart:payload,
      }
    case types.REMOVE_CART_ITEMS:
      return {
        ...state,
        cart: payload,
      };
    default:
      return state;
  }
};
