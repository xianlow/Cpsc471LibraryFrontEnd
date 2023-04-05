import React from "react"
import {useNavigate} from "react-router-dom";
import ProductSearchGuest from "../components/ProductSearchGuest"
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
                <ProductSearchGuest />
                <button onClick={navToLogin}>Log In</button>
            </div>
        </div>
    )
}

export default Home