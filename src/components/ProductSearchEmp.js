import {useState} from "react"
import {useNavigate} from "react-router-dom";
import "../styles/ProductSearch.css"


function ProductSearchEmp() {
    const [productVal, setProductVal] = useState("");
    const navigate = useNavigate();
    const navToProduct = () => {
        navigate({
            pathname: './productsearch',
            search: `?id=${productVal}`
        });

    }

    const checkProduct = (e) => {
        e.preventDefault();

        navToProduct();
        
    }

    return (
        
        <div className="product-search">
            
            <form onSubmit={checkProduct}>
                <label>Product Search:<br />
                <input type="text" id="product" value={productVal} placeholder="Enter product here" onChange={(e) => setProductVal(e.target.value)}/><br />
                </label>
                <input type="submit"/>
                
            </form>
        </div>
    )
}

export default ProductSearchEmp;