import React, { useContext } from 'react'
import { addCartItem } from '../../Context/action'
import { AppContext } from '../../Context/AppContext'
import style from "../../css/product.module.css"
function ProductList({ product }) {

  const { dispatch, state } = useContext(AppContext)

  const handleAddCartItem = (product) => {
    addCartItem(dispatch, product,state.cart)
  }

  // console.log(state);

  return (
    <div className={style.main_container}>
      <div className={style.product_box}>
        <div style={{ boxShadow: "rgba(0, 0, 0, 0.06) 0px 2px 4px 0px", padding: '0.5rem' }}>
          <img src={product.imageURL} alt={product.name} style={{ width: '100%', height: '200px' }} />
        </div>
        <div className={style.product_content}>
          <p>Name: &nbsp;&nbsp; <span className={style.product_span}>{product.name}</span></p>
          <p>Type: &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className={style.product_span}>{product.type}</span></p>
          <p>Color: &nbsp;&nbsp;&nbsp;&nbsp;<span className={style.product_span}>{product.color}</span></p>
          <p>Gender: &nbsp;<span className={style.product_span}>{product.gender}</span></p>
        </div>
        <div className={style.cart_button}>
          <p> {product.currency}: {product.price}</p>
          <button onClick={() => handleAddCartItem(product)}>Add to Cart</button>
        </div>
      </div>
    </div>
  )
}

export default ProductList


// category
// :
// "men's clothing"
// description
// :
// "Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday"
// id
// :
// 1
// image
// :
// "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg"
// price
// :
// 109.95
// rating
// :
// {rate: 3.9, count: 120}
// title