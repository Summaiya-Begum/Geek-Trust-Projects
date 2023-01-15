import React from 'react'
import style from "../../css/product.module.css"
import { useState, useEffect } from 'react'
import ProductList from './ProductList'
import { getData } from '../../Context/action'
import { AppContext } from '../../Context/AppContext'
import { useContext } from 'react';
import * as types from "../../Context/actiontype"

function Product({handlemodal,visible}) {

  const { dispatch, state: { filterData, product } } = useContext(AppContext)
  const [query, setQuery] = useState("")


  const handleQuery = (e) => {
    let temp = product.filter(el => {
      return el.name.toLowerCase().includes(e.target.value) || el.type.toLowerCase().includes(e.target.value) || el.color.toLowerCase().includes(e.target.value)
    })
    dispatch({ type: types.FILTER_PRODUCT, payload: temp })
  }
  useEffect(() => {
    getData(dispatch)
  }, [])


  return (
    <div>
      <div className={style.search_box}>
        <input type="text" id="search" onChange={handleQuery} placeholder="Search for Products" />
        <span className={style.input_span}><i className="fa fa-search fa-lg" aria-hidden="true"></i></span>
        <span onClick={handlemodal} className={style.filter_span}
        >
         { !visible?<i className="fa fa-filter"></i>:<b>X</b>}
       
</span>

      </div>

      <div className={style.product_container}>
        {
          filterData.length ? filterData.map((el, i) => {
            // console.log(el)
            return <ProductList product={el} key={i} />
          }) :
            product.map((el, i) => {
              // console.log(el)
              return <ProductList product={el} key={i} />
            })
        }

      </div>

    </div>
  )
}

export default Product