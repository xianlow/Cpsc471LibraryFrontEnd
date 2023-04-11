import React, { Component } from "react";
//import apiServices from "../services/apiServices";
import { useNavigate } from "react-router-dom";
import "../styles/Product.css";

export default class ProductEmp extends Component {
    constructor(props) {
        super(props);
        this.retrieveOverdue = this.retrieveOverdue.bind(this);
        this.refreshList = this.refreshList.bind(this);
        this.state = {
            overdue: [],
            currentProduct: null,
            currentIndex: -1
        };
        
    }

    componentDidMount() {
        this.retrieveOverdue();
    }

    retrieveOverdue() {
        /*
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
          */
        this.setState({
            overdue:[{
                "title" : "theTitle",
                "author" : "theAut",
                "overduefee" : "$100"
            }]
        })
    }

    refreshList() {
        this.retrieveOverdue();
        this.setState({
            currentProduct: null,
            currentIndex: -1
        });
    }
    /*
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
    */

    render() {
        const { overdue} = this.state;

        return (

            <div className="list-group">
                <h1>Overdue dates and pricing</h1>
                {overdue &&
                    overdue.map((OverdueList) => (
                        <div className="customersearch">
                            <div class="customer_content">
                                <div class="customer_text_container">
                                    <div class="customer_overdue">
                                        <h3>{OverdueList.title}</h3>
                                    </div>
                                    <div class="book_author">
                                        <p>{OverdueList.author}</p>
                                    </div>
                                    <div class="overdue_price">
                                        <p>{OverdueList.overduefee}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                    
            </div>

        );
    }
}