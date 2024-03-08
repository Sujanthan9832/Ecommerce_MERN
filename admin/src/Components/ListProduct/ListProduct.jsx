import React, { useEffect, useState } from "react";
import './listproduct.css';
import { MdClose } from "react-icons/md";

const ListProduct = () => {
    const [allProducts, setAllProducts] = useState([]);

    const fetchInfo = async () => {
        await fetch('http://localhost:4000/allproducts')
            .then((res) => res.json())
            .then((data) => { setAllProducts(data) });
    }

    useEffect(() => {
        fetchInfo();
    }, [])

    const remove_product = async (id) => {
        await fetch('http://localhost:4000/removeproduct', {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-type': 'application/json',
            },
            body: JSON.stringify({ id: id })
        })
        await fetchInfo();
    }

    return (
        <div className="listproduct">
            <h1>All Product list</h1>
            <div className="listproduct-format-main">
                <p>Products</p>
                <p>Title</p>
                <p>Old price</p>
                <p>New price</p>
                <p>Category</p>
                <p>Remove</p>
            </div>
            <div className="listproduct-allproduct">
                <hr />
                {allProducts.map((product, index) => {
                    return <><div key={index} className="listproduct-format-main listproduct-format">
                        <img src={product.image} alt="" className="product-icon" />
                        <p>{product.name}</p>
                        <p>${product.old_price}</p>
                        <p>${product.new_price}</p>
                        <p>{product.category}</p>
                        <MdClose onClick={() => { remove_product(product.id) }} className="listproduct-remove-icon" />
                    </div>
                        <hr />
                    </>
                })}
            </div>
        </div>
    );
}

export default ListProduct;