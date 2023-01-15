import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import { useContext } from 'react'
import { changeCartItem, deleteData } from '../../Context/action'
import { AppContext } from '../../Context/AppContext'
import style from "../../css/cart.module.css"
function Cart() {

  const { dispatch, state } = useContext(AppContext)
  const [amount, setAmount] = useState(0)
  let idss = []

  for (let i = 0; i < state.cart.length; i++) {
    idss.push(state.cart[i].id)
  }
  console.log(state.cart, "fdd")


  const handleQuantity = (e, id) => {
    let { value } = e.target
    changeCartItem(state.cart, id, value, dispatch)
  }

  const handleDelete = (id) => {
    deleteData(state.cart, id, dispatch)
  }




  return (
    <>


      <div style={{ width: "100%" }}>
        <div className={style.cart}>

          <div style={{width:"100%" ,display: "flex", flexDirection: 'row', justifyContent: 'space-evenly', width: '100%'}}>
            <h3>Total-CartItem:&nbsp; {state.cart.length}</h3>
            <h3>Total-Amount:&nbsp; <span>₹</span>{state.cart.reduce((acc, el, i) => {
              return acc + (el.price * el.quantity)
            }, 0)}</h3>
            </div>


          <div className={style.cart_main_Box}>
            {

              state.product?.map((el, i) => idss.includes(el.id) && <div 
              key={i}
              className={style.cart_container}
              >
                <div>
                  <img src={el.imageURL} alt={el.name} />
                </div>
                <div>
                  <div className={style.cart_container_content}>
                    <p>Name: &nbsp;&nbsp; <span className={style.product_span}>{el.name}</span></p>
                    <p>Type: &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className={style.product_span}>{el.type}</span></p>
                    <p>Color: &nbsp;&nbsp;&nbsp;&nbsp;<span className={style.product_span}>{el.color}</span></p>
                    <p>Gender: &nbsp;<span className={style.product_span}>{el.gender}</span></p>
                    <p> {el.currency}:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; {el.price}</p>
                  </div>
                </div>
                <div className={style.btn_container}>
                <div className={style.quantity_btn_container}>
                  <select onChange={(e) => handleQuantity(e, el.id)} >
                    <option value="">Qty</option>
                    {
                      new Array(el.quantity).fill(1).map((e, i) => <option key={i} value={i + 1}>{i + 1}</option>)
                    }
                  </select>
                </div>

                <div className={style.delete_btn_container}>
                  <button onClick={() => handleDelete(el.id)}>Delete</button>
                </div>
                </div>
              </div>
              )
            }
          </div>

          <p style={{ borderBottom: '1px solid grey', borderRadius: '5px' }} ></p>

        </div>
      </div>
    </>
  )
}

export default Cart