import React, { Component } from "react";
import apiServices from "../services/apiServices";
import { useNavigate } from "react-router-dom";
import "../styles/Product.css";

export default class ProductEmp extends Component {
    constructor(props) {
        super(props);
        this.retrieveProducts = this.retrieveProducts.bind(this);
        this.refreshList = this.refreshList.bind(this);
        this.updateStatus = this.updateStatus.bind(this);
        this.state = {
            product: [],
            currentProduct: null,
            currentIndex: -1
        };

    }

    componentDidMount() {
        this.retrieveProducts();
    }

    updateStatus() {
        apiServices.returnProduct(window.location.href.split("id=")[1]);
        alert("Product has been returned");
        window.location.href = "http://localhost:8081/"

    }


    retrieveProducts() {

        apiServices.getProduct(window.location.href.split("id=")[1]).then(response => {
            console.log(response.data);
            this.setState({
                product: response.data
            });

        })
            .catch(e => {
                console.log(e);
            });

    }


    refreshList() {
        this.retrieveProducts();
        this.setState({
            currentProduct: null,
            currentIndex: -1
        });
    }

    render() {
        const { product } = this.state;

        return (

            <div className="list-group">
                <h1>Products</h1>
                {product &&
                    product.map((ProductList) => (
                        <div className="product">
                            <div class="product_content">
                                <div class="product_text_container">
                                    <div class="product_title">
                                        <h3>{ProductList.title}</h3>
                                    </div>
                                    <div class="book_author">
                                        <p>{ProductList.author}</p>
                                    </div>
                                    <div class="book_author">
                                        <p>{ProductList.director}</p>
                                    </div>
                                    <div class="current_status">
                                        <p>{ProductList.status}</p>
                                    </div>
                                    
                                    <button type="submit" disabled={ProductList.status === "Available"} onClick={this.updateStatus}> Return product</button>

                                    
                                </div>
                            </div>
                        </div>
                    ))}


            </div>

        );
    }
}