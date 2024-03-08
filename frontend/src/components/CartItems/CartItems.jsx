import React, { useContext } from "react";
import "./cartitem.css";
import { ShopContext } from "../../context/ShopContext";
import { MdClose } from "react-icons/md";

const CartItems = () => {
    const { getTotalCartAmount, all_product, cartItem, removeFromCart } = useContext(ShopContext);
    return (
        <div className="cartitems">
            <div className="cartitems-format-main">
                <p>Products</p>
                <p>Title</p>
                <p>Price</p>
                <p>Quality</p>
                <p>Total</p>
                <p>Remove</p>
            </div>
            <hr />
            {all_product.map((e) => {
                if (cartItem[e.id] > 0) {
                    return <div>
                        <div className="cartitems-format cartitems-format-main">
                            <img src={e.image} alt="" className="carticon-product-icon" />
                            <p>{e.name}</p>
                            <p>${e.new_price}</p>
                            <button className="cartitems-quantity">{cartItem[e.id]}</button>
                            <p>${e.new_price * cartItem[e.id]}</p>
                            <MdClose className="remove-icon" onClick={() => { removeFromCart(e.id) }} />
                        </div>
                    </div>
                }
                else {
                    return null;
                }
            })}
            <div className="cartitem-down">
                <div className="cart-total">
                    <h1>Cart Total</h1>
                    <div>
                        <div className="total-item">
                            <p>Subtotal</p>
                            <p>${getTotalCartAmount()}</p>
                        </div>
                        <hr />
                        <div className="total-item">
                            <p>Shipping Fee</p>
                            <p>Free</p>
                        </div>
                        <hr />
                        <div className="total-item">
                            <h3>Total</h3>
                            <h3>${getTotalCartAmount()}</h3>
                        </div>
                    </div>
                    <button>PROCEED TO CHECKOUT</button>
                </div>
                <div className="promocode">
                    <p>If you have a promocode, enter it here</p>
                    <div className="promobox">
                        <input type="text" placeholder="promo code" />
                        <button>Submit</button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default CartItems;