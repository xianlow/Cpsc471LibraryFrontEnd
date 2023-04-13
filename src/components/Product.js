import React, { Component } from "react";
import apiServices from "../services/apiServices";
import { confirmAlert } from 'react-confirm-alert'; // Import
import 'react-confirm-alert/src/react-confirm-alert.css'; // Import css
import "../styles/Product.css";
import HomePage from "../pages/HomePage";
export default class Product extends Component {


  constructor(props) {
    super(props);
    this.retrieveProducts = this.retrieveProducts.bind(this);
    this.refreshList = this.refreshList.bind(this);
    this.state = {
      product: [],
      currentProduct: null,
      currentIndex: -1,
      ids: [{
        "prodId": window.location.href.split("id=")[1],
        "custId": localStorage.getItem("userID")
      }]
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

  confirm = () => {
    
    confirmAlert({
      title: "Confirm to submit",
      message: "Are you sure you want to book this product?",
      buttons: [{
        label: "Yes",
        onClick: () => apiServices.bookProduct(this.state.ids) && alert("You have booked this product"),
        onMouseUp: () => window.location.href = "http://localhost:8081/"
      },
      {
        label: "No",
        onClick: () => alert("You have not booked")
      }]
    })
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
                  <div class="book_director">
                    <p>{ProductList.director}</p>
                  </div>
                  
                  <button disabled={ProductList.status === "Unavailable"} onClick={this.confirm}>Confirm reservation</button>
                </div>
              </div>

            </div>
          ))}
        
      </div>

    );
  }
}