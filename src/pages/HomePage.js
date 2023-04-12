import React from "react"
import { useNavigate } from "react-router-dom";
import ProductSearchGuest from "../components/ProductSearchGuest"
import AdminPage from "./AdminPage"
import EmployeePage from "./EmployeePage"
import CustomerPage from "./CustomerPage"
import Logout from "../components/LogOutButton"
import "../styles/HomePage.css"
function Home() {
    const loggedInUser = localStorage.getItem("userJob");

    const navigate = useNavigate();
    const navToLogin = () => {
        navigate('/login');
    }
    const navToSignUp = () => {
        navigate('/signup');
    }
    /*
    window.onbeforeunload = function(){
        localStorage.clear();
    }
    */
    if (loggedInUser === "admin") {

        return (
            <div className="Admin-Page">
                <div>
                    <AdminPage />
                    <Logout />
                </div>
            </div>
        )
    } else if (loggedInUser === "emp") {
        return (
            <div className="Employee-Page">
                <div>
                    <EmployeePage />
                    <Logout />
                </div>
            </div>
        )
    }else if (loggedInUser === "user") {
        return (
            <div className="Customer-Page">
                <div>
                    <CustomerPage />
                    <Logout />
                </div>
            </div>
        )
    } else {
        return (
            <div className="Home-Page">
                {/*
                <NewsFeed />
                //<Engineering />
                */}
                <div>
                    <ProductSearchGuest />
                    <button onClick={navToLogin}>Log In</button>
                    <button onClick={navToSignUp}>Sign up</button>
                </div>
            </div>
        )
    }

}


export default Home