import React, { useState } from "react"
import { useNavigate } from "react-router-dom"

function AdminPage() {
    const [isShown, setIsShown] = useState(false);
    const navigate = useNavigate();
    const navToCreate = () => {
        navigate('./create');
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
                <div>
                    <button onClick={navToCreate} className="btn btn-success">Add a new product</button>
                </div>
                <div>
                    <button onClick={navToSearchCust} className="btn btn-success">Search for a customer</button>
                </div>
                <div>
                    <button onClick={navToUpdateStatus} className="btn btn-success">Update Status</button>
                </div>
            </div>


        </div>

    )
}

export default AdminPage