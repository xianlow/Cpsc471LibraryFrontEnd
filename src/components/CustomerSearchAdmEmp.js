import React, { Component } from "react";
//import apiServices from "../services/apiServices";
import { useNavigate } from "react-router-dom";
import apiServices from "../services/apiServices";
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
        apiServices.getOverdue(window.location.href.split("id=")[1]).then(response =>{
            console.log(response.data);
            this.setState({
                overdue: response.data
            });
            
        }).catch(e =>{
            console.log(e);
        });
        apiServices.getPickupDates(window.location.href.split("id=")[1]).then(response =>{
            console.log(response.data);
            this.setState({
                pickUpDates: response.data
            });
            
        }).catch(e =>{
            console.log(e);
        });
        
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
                                    <div class="overdue_fee">
                                        <p>{OverdueList.overDueFee}</p>
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
                                <div class="current_status">
                                        <h3>{pickUpDatesList.title}</h3>
                                    </div>
                                    <div class="movies_title">
                                        <p>{pickUpDatesList.pickupDate}</p>
                                    </div>

                                    
                                </div>
                            </div>
                        </div>

                    ))}
            </div>

        );
    }
}