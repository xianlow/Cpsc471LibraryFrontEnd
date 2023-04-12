import React, { Component } from "react";
//import apiServices from "../services/apiServices";
import { useNavigate } from "react-router-dom";
import apiServices from "../services/apiServices";
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
        
        apiServices.getOverdue(localStorage.getItem("userID")).then(response =>{
            console.log(response.data);
            this.setState({
                overdue: response.data
            });
            
        }).catch(e =>{
            console.log(e);
        });
    }

    refreshList() {
        this.retrieveOverdue();
        this.setState({
            currentProduct: null,
            currentIndex: -1
        });
    }

    render() {
        const { overdue} = this.state;

        return (

            <div className="list-group">
                <h1>Overdue products and pricing</h1>
                {overdue &&
                    overdue.map((OverdueList) => (
                        <div className="customersearch">
                            <div class="customer_content">
                                <div class="customer_text_container">
                                    <div class="customer_overdue">
                                        <h3>{OverdueList.title}</h3>
                                    </div>
                                    <div class="overdue_price">
                                        <p>{OverdueList.overDueFee}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                    
            </div>

        );
    }
}