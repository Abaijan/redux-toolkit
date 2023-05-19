import React from 'react'
import '../App.css'
import { Link } from 'react-router-dom';
import { AddHomeOutlined, ShoppingBagOutlined } from '@mui/icons-material';
import { useSelector } from 'react-redux';

const Navbar = () => {
    const selector = useSelector((item ) => item.cart)
    return (
        <div className='navbar' style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between'

        }}>
            <h3 style={{}}>
                Shop
            </h3>
            <div className='navItems'>
                <Link className='navLink' to='/'>
                    <AddHomeOutlined color='primary'/>
                </Link>
                <div className='navItem'>
                    <Link className='navLivnk' to='/cart'>
                        <ShoppingBagOutlined color = 'primary' />
                    </Link>
                    <span className='cartCount'>{selector.length}</span>
                </div>
            </div>
        </div>
    )
}

export default Navbar