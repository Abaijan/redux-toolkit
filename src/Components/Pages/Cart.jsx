import { HighlightOffOutlined } from '@mui/icons-material';
import {  useSelector, } from 'react-redux'
// import { dell, increment, decrement, value } from '../Redux/cartSlise';
const Cart = () => {
    const products = useSelector((state) => state.cart);
    // const dispatch = useDispatch()


    return (
        <div>
            <h3 className='title'>Basket:</h3>
            <div className="productWrapper">
                <div className="info">
                    <div className="names"><h3>Name</h3></div>
                    <div className="about_info">
                        <h3>Price</h3>
                        <h3>Amount</h3>
                        <h3>Cost</h3>
                        <h4>total :{products.length}</h4>
                    </div>
                </div>
                <div className="basket_inner">

                    {
                  products.map((product) => {
                        return (
                            <div key={product.id} className="cart_basket">
                                <div className="nams">
                                    <img className='product_img_basket' src={product.image} alt="" />
                                    <h5 className='product_title_basket'>{product.title}</h5>
                                </div>
                                <div className="product_prices">
                                    <h5 className='product_price_basket'>{product.price}$</h5>
                                    <div className='count'>
                                        <button className="btn1"  >-</button>
                                        <h3>1</h3>
                                        <button className="btn2">+</button>
                                    </div>
                                    <h5>{product.price}</h5>
                                </div>
                                <button className='product_dell'><HighlightOffOutlined /></button>
                            </div>
                        )
                    })}
                </div>
            </div>

        </div>
    )
}

export default Cart
