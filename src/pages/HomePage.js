import React from "react"
import {useNavigate} from "react-router-dom";
import ProductSearch from "../components/ProductSearch"
import "../styles/HomePage.css"
function Home(){
    const navigate = useNavigate();
    const navToLogin = () => {
        navigate('/login');
    }  
    return(
        <div className="Home-Page">
            {/*
            <NewsFeed />
            //<Engineering />
            */}
            <div>
                <ProductSearch />
                <button onClick={navToLogin}>Log In</button>
            </div>
        </div>
    )
}

export default Home