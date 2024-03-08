import React, { useContext } from "react";
import "./CSS/shopcategory.css";
import { ShopContext } from "../context/ShopContext";
import { FaAngleDown } from "react-icons/fa";
import Item from "../components/Item/Item";

const ShopCategory = (props) => {
    const { all_product } = useContext(ShopContext);
    return (
        <div className="shop_category">
            <img className="shopcatecory-banner" src={props.banner} alt="" />
            <div className="shopcategory-indexsort">
                <p><span>Showing 1 - 12 </span> Out of 36 product</p>
                <div className="shopcategory-sort">
                    sort by <FaAngleDown />
                </div>
            </div>
            <div className="shopcategory-product">
                {all_product.map((item, i) => {
                    if (props.category === item.category) {
                        return <Item key={i} id={item.id} name={item.name} image={item.image} new_price={item.new_price} old_price={item.old_price} />
                    }
                    else {
                        return null;
                    }
                })}
            </div>
            <div className="loadmore">
                Explore More
            </div>
        </div>
    );
}

export default ShopCategory;