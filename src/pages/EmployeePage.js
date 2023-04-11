import React, { useState } from "react"
import { useNavigate } from "react-router-dom"

function EmployeePage() {
    const navigate = useNavigate();
    const navToSearchAdm = () => {
        navigate('/');
    }
    const navToUpdateStatus = () => {
        navigate("./productemp")
    }
    const navToSearchCust = () => {
        navigate("./customersearch")
    }

    return (
        <div>


            <div>
                <button onClick={navToUpdateStatus} className="btn btn-success">Update Status</button>
            </div>
            <div>
                <button onClick={navToSearchCust} className="btn btn-success">Search for a customer</button>
            </div>

        </div>

    )
}

export default EmployeePage