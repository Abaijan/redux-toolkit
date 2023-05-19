import React, { useEffect, useState } from 'react'
import '../App.css'
import { useDispatch } from 'react-redux'
import { add } from './Redux/cartSlise'
import { AddShoppingCartOutlined } from '@mui/icons-material'

const Product = () => {

    const [produсts, setproductrs] = useState([])
    const dispatch = useDispatch();

    const fetchProducts = async () => {
        const res = await fetch('https://fakestoreapi.com/products')
        const data = await res.json()
        setproductrs(data)
    }

    useEffect(() => {
        fetchProducts();
    }, [])

    const handleClick = (e) => {
        dispatch(add(e))
    }
    return (
        <>
            <h1>Products</h1>
            <div className='productsWrapper'>
                {
                    produсts.map((el) => {
                        return (
                            <div className='cart_product' key={el.id}>
                                <img className='product_img' src={el.image} alt='' />
                                <h4 className='product_title'>{el.title}</h4>
                                <h4 className='product_price'>{el.price}$</h4>
                                <button className='product_add' onClick={() => handleClick(el)}><AddShoppingCartOutlined /></button>
                            </div>
                        )
                    })
                }

            </div>
        </>
    )
}

export default Product