import React from 'react'
import Product from './product/Product'
import ProductFunctionality from './product/ProductFunctionality'
import style from "../css/home.module.css"

function Home() {
    return (
        <div className={style.grid_container}>
            <div className={style.grid_item1}><ProductFunctionality /> </div>
            <div className={style.grid_item2}><Product /></div>
        </div>

    )
}

export default Home