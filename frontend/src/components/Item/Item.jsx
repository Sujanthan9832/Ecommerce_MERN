import React from "react";
import './item.css';
import { Link } from "react-router-dom";

const Item = (props) => {
    const handlescrollto = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    }

    return (
        <div className="item">
            <Link to={`/product/${props.id}`}><img onClick={handlescrollto} src={props.image} alt="" /></Link>
            <p>{props.name}</p>
            <div className="item-prices">
                <div className="price-new">
                    ${props.new_price}
                </div>
                <div className="price-old">
                    ${props.old_price}
                </div>
            </div>
        </div>
    );
}

export default Item;