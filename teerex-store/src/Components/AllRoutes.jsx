import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Cart from './cart/Cart'
import Home from './Home'
import Product from './product/Product'

function AllRoutes() {
    return (
        <div>
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/product' element={<Product />} />
                <Route path='/cart' element={<Cart />} />
            </Routes>
        </div>
    )
}

export default AllRoutes