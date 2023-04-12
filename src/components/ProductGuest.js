import React, { Component } from "react";
import { useSearchParams } from "react-router-dom";
import apiServices from "../services/apiServices";
import "../styles/Product.css";


export default class ProductGuest extends Component {
  
  constructor(props) {
    super(props);
    this.retrieveProducts = this.retrieveProducts.bind(this);
    this.refreshList = this.refreshList.bind(this);
    this.state = {
      product: [],
      currentProduct: null,
      currentIndex: -1
    };
  }

  componentDidMount() {
    this.retrieveProducts();
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
    const { product} = this.state;

    return (

      <div className="list-group">
        <h1>Product</h1>
        {product &&
          product.map((ProductList) => (
            <div className="product">

              <div class="product_content">
                <div class="product_text_container">
                  <div class="product_title">
                    <h3>{ProductList.title}</h3>
                  </div>
                  <div class="product_author">
                    <p>{ProductList.author}</p>
                  </div>
                  <div class="product_director">
                    <p>{ProductList.director}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        
      </div>

    );
  }
}