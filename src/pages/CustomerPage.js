import React, { useState } from "react"
import { useNavigate } from "react-router-dom"
import ProductSearch from "../components/ProductSearch"

function EmployeePage() {
    const navigate = useNavigate();
    const navToCheckOverdue = () => {
        navigate('./overdue');
    }
    const navToCheckPickUp = () => {
        navigate("./checkpickup")
    }


    return (
        <div>
            <ProductSearch/>

            <div>
                <button onClick={navToCheckOverdue} className="btn btn-success">Check any overdue products</button>
            </div>
            <div>
                <button onClick={navToCheckPickUp} className="btn btn-success">Check any pickup products</button>
            </div>

        </div>

    )
}

export default EmployeePage