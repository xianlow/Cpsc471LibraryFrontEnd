import React, { Component } from "react";
//import apiServices from "../services/apiServices";
import { useNavigate } from "react-router-dom";
import "../styles/Product.css";

export default class ProductEmp extends Component {
    constructor(props) {
        super(props);
        this.retrieveCustomer = this.retrieveCustomer.bind(this);
        this.refreshList = this.refreshList.bind(this);
        this.state = {
            overdue: [],
            pickUpDates: [],
            currentProduct: null,
            currentIndex: -1
        };
        
    }

    componentDidMount() {
        this.retrieveCustomer();
    }

    retrieveCustomer() {
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
            }],
            pickUpDates : [{
                "author" : "theaut",
                "title" : "the title",
                "date" : "day1"  
            },{
                "author" : "autgh",
                "title" : "title",
                "date" : "day2"
            }]
        })
    }

    refreshList() {
        this.retrieveCustomer();
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
        const { overdue, pickUpDates} = this.state;

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
                    <h1>Pickup Dates</h1>
                {pickUpDates &&
                    pickUpDates.map((pickUpDatesList) => (
                        <div className="movies">

                            <div class="movies_content">
                                <div class="movies_text_container">
                                    <div class="movies_title">
                                        <h3>{pickUpDatesList.date}</h3>
                                    </div>
                                    <div class="movies_director">
                                        <p>{pickUpDatesList.author}</p>
                                    </div>
                                    <div class="current_status">
                                        <p>{pickUpDatesList.title}</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                    ))}
            </div>

        );
    }
}