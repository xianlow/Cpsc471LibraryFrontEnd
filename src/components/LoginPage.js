import React from "react"
import { useNavigate } from "react-router-dom";
import "../styles/Login.css";
import ProductSearch from "./ProductSearch";


function Login() {
    const navigate = useNavigate();
    const navToAdmin = () => {
        navigate('/AdminPage');
    }

    const check_login = () => {
        const username = document.getElementById("userName").value;

        if(username.localeCompare("admin")) {
            alert("ERROR. Incorrect Username.");
            return false;
        }
        check_password();
    }

    const check_password = () => {
        const password = document.getElementById("password").value;

        if(password.localeCompare("testpassword")) {
            alert("Error. Incorrect Password");
            return false;
        }
        navToAdmin();
    }

    // if User correct, check password. if Script checks for existences of users, just needs to overrride one flag
    return (
        <div className = "News-Feed">
            {
            //<ProductSearch/>
            
            //<NewsFeed />
            }
            <div className = "login">
            <form onSubmit={check_login}>
                <label htmlFor="userName">Username:</label><br />
                <input type="text" id="userName" placeholder="Enter Username" name="userName" required /><br />
                <label htmlFor="password">Password:</label><br />
                <input type="password" id="password" placeholder="Enter Password" name="password" required /> <br />
                <input type="submit" value="Submit"  />
            </form>
            </div>
        </div>
    )
}

export default Login;