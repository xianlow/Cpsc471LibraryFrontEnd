import {useState} from "react"
import {useNavigate} from "react-router-dom";
import "../styles/ProductSearch.css"



function CustomerSearch() {
    const [customerId, setCustomerId] = useState("");
    const navigate = useNavigate();
    const navToCustomer = () => {
        navigate({
            pathname: './customer',
            search: `?id=${customerId}`
        });

    }

    const checkCustomer = (e) => {
        e.preventDefault();
        /*
        customerId is the value being searched
        

        Add product functionality here!!!!

        */
        navToCustomer();
    }

    return (
        
        <div className="customer-search">
            
            <form onSubmit={checkCustomer}>
                <label>Customer Search:<br />
                <input type="text" id="product" value={customerId} placeholder="Enter customer id here" onChange={(e) => setCustomerId(e.target.value)}/><br />
                </label>
                <input type="submit" />
                
            </form>
        </div>
    )
}

export default CustomerSearch;