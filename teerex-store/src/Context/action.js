import * as types from "./actiontype";

export const getData = async (dispatch) => {
  dispatch({ type: types.PRODUCT_FETCH_REQUEST });
  try {
    let url = `https://geektrust.s3.ap-southeast-1.amazonaws.com/coding-problems/shopping-cart/catalogue.json`;
    let res = await fetch(url);
    // console.log(res)
    let data = await res.json();
    // console.log(data)
    dispatch({ type: types.PRODUCT_FETCH_SUCCESS, payload: data });
  } catch (err) {
    console.log(err);
    dispatch({ type: types.PRODUCT_FETCH_FAILURE });
  }
};
export const getFilteredData = (
  data,
  colors,
  prices,
  genders,
  type,
  dispatch
) => {
  let temp = data;
  if (prices.length) {
    temp = data.filter((el) => {
      if (prices.includes(0)) {
        if (el.price > 0 && el.price <= 250) {
          return el;
        }
      }
      if (prices.includes(250)) {
        if (el.price > 251 && el.price <= 450) {
          return el;
        }
      }
      if (prices.includes(450)) {
        if (el.price >= 451) {
          return el;
        }
      }
    });
  }

  if (colors.length) {
    temp = temp.filter((el) => {
      return colors.includes(el.color);
    });
  }

  // console.log(x , 'colors');

  if (genders.length) {
    temp = temp.filter((el) => {
      return genders.includes(el.gender);
    });
  }

  // console.log(y, "gen");

  if (type.length) {
    temp = temp.filter((el) => {
      return type.includes(el.type);
    });
  }
  // console.log(temp,"filteredData")
  dispatch({ type: types.FILTER_PRODUCT, payload: temp });
};

// Add to Cart Item Function
export const addCartItem = (dispatch, product,data) => {

  let newProd = data.find((el,i)=>{
    return el.id==product.id
  })
  if(newProd){
    alert("Already Added Product in Cart")
  }else{
    dispatch({ type: types.ADD_CART_ITEMS, payload: product });
    alert("Product Added Successfully")
  }
};

// Increment CartItem function
export const changeCartItem = (data, id, val, dispatch) => {
  const changeData = data.map((el) => {
   return el.id ==id ? { ...el, quantity:val } : el;
  });
  dispatch({ type: types.CHANGE_CART_ITEMS, payload: changeData });
};

// Delete item from Cart function
export const deleteData = (data, id, dispatch) => {
  const dlt = data.filter((el, i) => {
    return el.id != id;
  });
  dispatch({ type: types.REMOVE_CART_ITEMS, payload: dlt });
};
