import React, { Component } from "react";
import apiServices from "../services/apiServices";
import "../styles/Product.css";

const profilePic = "./images/ess-logo.png"
export default class Product extends Component {
  constructor(props) {
    super(props);
    this.retrieveProducts = this.retrieveProducts.bind(this);
    this.refreshList = this.refreshList.bind(this);

    this.state = {
      products: [],
      currentProduct: null,
      currentIndex: -1,
    };
  }

  componentDidMount() {
    this.retrieveProducts();
  }


  retrieveProducts() {
    apiServices.getAll()
      .then(response => {
        this.setState({
          products: response.data
        });
        console.log(response.data);
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

  removeAllPosts() {
    apiServices.deleteAll()
      .then(response => {
        console.log(response.data);
        this.refreshList();
      })
      .catch(e => {
        console.log(e);
      });
  }


  render() {
    const {products} = this.state;

    return (

          <div className="list-group">
            {products &&
              products.map((ProductList) => (
                <div className="product">
                    
                  <div class="product_content">
                    <div class="product_text_Container">
                        <div class="username">
                            <h3>{ProductList.title}</h3>
                        </div>
                        <div class="product_description">
                            
                            <p>{ProductList.description}</p>
                        </div>
                    </div>
                  </div>
                </div>
              ))}
          </div>
          
    );
  }
}