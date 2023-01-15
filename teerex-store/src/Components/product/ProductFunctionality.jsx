import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
import { useContext } from 'react'
import { getFilteredData } from '../../Context/action'
import { AppContext } from '../../Context/AppContext'
import style from "../../css/filter.module.css"

function ProductFunctionality() {

  const { dispatch, state } = useContext(AppContext)
  const [colors, setColors] = useState([])
  const [prices, setPrices] = useState([]);
  const [genders, setGenders] = useState([]);
  const [type, setType] = useState([]);

  // console.log(state.filterData,"getting Filtereddata")

  const handleColors = (e) => {
    const { name } = e.target;
    if (colors.includes(name)) {
      colors.splice(colors.indexOf(name), 1)
    }
    else {
      colors.push(name)
    }
    setColors([...colors])
  }

  // Price
  const handlePrices = (e) => {
    const { value } = e.target;
    if (prices.includes(+value)) {
      prices.splice(prices.indexOf(+value), 1)
    }
    else {
      prices.push(+value)
    }
    setPrices([...prices])
  }


  // Type
  const handleTypes = (e) => {
    const { name } = e.target;
    if (type.includes(name)) {
      type.splice(type.indexOf(name), 1)
    }
    else {
      type.push(name)
    }
    setType([...type])
  }
  // Gender
  const handleGenders = (e) => {
    const { name } = e.target;
    if (genders.includes(name)) {
      genders.splice(genders.indexOf(name), 1)
    }
    else {
      genders.push(name)
    }
    setGenders([...genders])
  }

  useEffect(() => {
    getFilteredData(state.product, colors, prices, genders, type, dispatch)
  }, [colors.length, prices.length, genders.length, type.length])

  // All features (search, filter, add to cart etc) should be handled on the client side. 
  return (
    <div className={style.filter_box}>

      <div className={style.input_checkbox_box}>
        <p>Colour</p>
        <input type="checkbox" onChange={handleColors} name="Red" /> <label >Red</label><br />
        <input type="checkbox" onChange={handleColors} name="Blue" /> <label >Blue</label><br />
        <input type="checkbox" onChange={handleColors} name="Green" /> <label >Green</label><br />
        <input type="checkbox" onChange={handleColors} name="Black" /> <label >Black</label><br />
        <input type="checkbox" onChange={handleColors} name="Grey" /> <label >Grey</label><br />
      </div>
      <div className={style.input_checkbox_box}>
        <p>Gender</p>
        <input type="checkbox" onChange={handleGenders} name="Men" /> <label >Men</label><br />
        <input type="checkbox" onChange={handleGenders} name="Women" /> <label >Women</label><br />
      </div>
      <div className={style.input_checkbox_box}>
        <p>Price</p>
        <input type="checkbox" onChange={handlePrices} value="0" /> <label >0-Rs250</label><br />
        <input type="checkbox" onChange={handlePrices} value="250" /> <label >Rs251-450</label><br />
        <input type="checkbox" onChange={handlePrices} value="450" /> <label >Rs 450</label><br />
      </div>
      <div className={style.input_checkbox_box}>
        <p>Type</p>
        <input type="checkbox" onChange={handleTypes} name="Polo" /> <label >Polo</label><br />
        <input type="checkbox" onChange={handleTypes} name="Hoodie" /> <label >Hoodie</label><br />
        <input type="checkbox" onChange={handleTypes} name="Basic" /> <label >Basic</label><br />
      </div>

    </div>
  )
}

export default ProductFunctionality