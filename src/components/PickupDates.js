import React, { Component } from "react";
import apiServices from "../services/apiServices";
import { useNavigate } from "react-router-dom";
import "../styles/Product.css";

export default class ProductEmp extends Component {
    constructor(props) {
        super(props);
        this.retrievePickupDates = this.retrievePickupDates.bind(this);
        this.refreshList = this.refreshList.bind(this);
        this.state = {
            pickUpDates: [],
            currentProduct: null,
            currentIndex: -1
        };

    }

    componentDidMount() {
        this.retrievePickupDates();
    }

    retrievePickupDates() {

        apiServices.getPickupDates(localStorage.getItem("userID")).then(response => {
            console.log(response.data);
            this.setState({
                pickUpDates: response.data
            });

        }).catch(e => {
            console.log(e);
        });
    }

    refreshList() {
        this.retrievePickupDates();
        this.setState({
            currentProduct: null,
            currentIndex: -1
        });
    }

    render() {
        const { pickUpDates } = this.state;

        return (

            <div className="list-group">

                <h1>Pickup Dates</h1>
                {pickUpDates &&
                    pickUpDates.map((pickUpDatesList) => (
                        <div className="movies">

                            <div class="movies_content">
                                <div class="movies_text_container">
                                    <div class="movies_title">
                                        <h3>{pickUpDatesList.title}</h3>
                                    </div>
                                    <div class="movies_director">
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