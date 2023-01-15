import React, { useState } from 'react'
import Product from './product/Product'
import ProductFunctionality from './product/ProductFunctionality'
import style from "../css/home.module.css"

function Home() {
    const [visible,setVis]=useState(false)
    function handlemodal(){
        setVis(!visible)


    }
    return (
        <div className={style.grid_container}>
            <div className={style.grid_item1}><ProductFunctionality visible={visible} /> </div>
           {
            visible&&<div className={style.visible}><ProductFunctionality /> </div>
           } 
            <div className={style.grid_item2}><Product handlemodal={handlemodal} visible={visible}/></div>
        </div>

    )
}

export default Home