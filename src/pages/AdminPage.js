import React, {useState} from "react"
import CreateNewProduct from "../components/CreateNewProduct"
import { useNavigate } from "react-router-dom"

function AdminPage() {
    const [isShown, setIsShown] = useState(false);
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
    const handleCreateNewProduct = event => {
        setIsShown(current => !current);
    }
    return (
        <div>
            {!isShown && (
                <div>
                    <div>
                        <button onClick={handleCreateNewProduct} className="btn btn-success">Add a new product</button>
                    </div>
                    <div>
                        <button onClick={navToSearchCust} className="btn btn-success">Search for a customer</button>
                    </div>
                    <div>
                        <button onClick={navToUpdateStatus} className="btn btn-success">Update Status</button>
                    </div>
                </div>
            )}
            {isShown && <CreateNewProduct/>}

        </div>

    )
}

export default AdminPage