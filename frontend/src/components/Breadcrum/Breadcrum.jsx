import React from "react";
import "./breadcrum.css";
import { FaAngleRight } from "react-icons/fa";

const Breadcrum = (props) => {
    const { product } = props;
    return (
        <div className="breadcrum">
            Home<FaAngleRight /> Shop<FaAngleRight />{product.category}<FaAngleRight />{product.name}
        </div>
    );
}

export default Breadcrum;