import React from 'react'
import { useContext } from 'react'
import { Link } from 'react-router-dom'
import { AppContext } from '../Context/AppContext'
import style from "../css/navbar.module.css"
function Navbar() {
    const { state } = useContext(AppContext)
    
    return (
        <nav>
            <div className={style.nav_heading}>
                <h4>TeerRex Store</h4>
            </div>
            <div className={style.link_box}>
                <ul>
                    <li><Link to='/' className={style.link}>Products</Link></li>
                    <li><Link to='/cart' className={style.link}><i className="fa fa-shopping-cart fa-lg" aria-hidden="true"></i> <span>{state.cart.length}</span></Link></li>
                </ul>
            </div>
        </nav>
    )
}

export default Navbar