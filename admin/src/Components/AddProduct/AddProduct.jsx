import React, { useState } from "react";
import './addproduct.css';
import upload_area from "../../assets/upload_area.svg";

const AddProduct = () => {

    const [image, setImage] = useState(false);
    const [productDetails, setproductDetails] = useState({
        name: "",
        image: null,
        category: "women",
        new_price: "",
        old_price: "",
    });

    const imageHandler = (e) => {
        setImage(e.target.files[0]);
    }

    const changeHandler = (e) => {
        setproductDetails({ ...productDetails, [e.target.name]: e.target.value })
    }

    const add_Product = async () => {
        console.log(productDetails);
        try {
            let responseData;
            let product = productDetails;

            let formData = new FormData();
            formData.append('product', image);

            await fetch('http://localhost:4000/upload', {
                method: 'POST',
                headers: {
                    Accept: 'application/json',
                },
                body: formData,
            }).then((resp) => resp.json()).then((data) => { responseData = data });

            if (responseData.success) {
                product.image = responseData.Image_url;
                console.log(product);
                await fetch('http://localhost:4000/addproduct', {
                    method: 'POST',
                    headers: {
                        Accept: 'application/json',
                        'Content-type': 'application/json',
                    },
                    body: JSON.stringify(product),
                }).then((resp) => resp.json()).then((data) => {
                    data.success ? alert("Product Added") : alert("Failed")
                })
            }
        } catch (error) {
            console.error("Error uploading image:", error);
        }
    }

    return (
        <div className="addproduct">
            <div className="addproduct-itemfield">
                <p>Product title</p>
                <input value={productDetails.name} onChange={changeHandler} type="text" name="name" id="" placeholder="type here" />
            </div>
            <div className="addproduct-price">
                <div className="addproduct-itemfield">
                    <p>Price</p>
                    <input value={productDetails.old_price} onChange={changeHandler} type="text" name="old_price" placeholder="type here" />
                </div>
                <div className="addproduct-itemfield">
                    <p>Offer Price</p>
                    <input type="text" value={productDetails.new_price} onChange={changeHandler} name="new_price" placeholder="type here" />
                </div>
            </div>
            <div className="addproduct-itemfield">
                <p>Product Category</p>
                <select value={productDetails.category} onChange={changeHandler} name="category" className="addproduct-selector">
                    <option value="women">Women</option>
                    <option value="men">Men</option>
                    <option value="kid">Kid</option>
                </select>
            </div>
            <div className="addproduct-itemfield">
                <p>Product Image</p>
                <label htmlFor="file-input">
                    <img src={image ? URL.createObjectURL(image) : upload_area} className="addproduct-thumnail-img" alt="" />
                </label>
                <input onChange={imageHandler} type="file" name="image" id="file-input" hidden />
            </div>
            <button onClick={() => { add_Product() }} className="addproduct-btn">ADD</button>
        </div>
    );
}

export default AddProduct;