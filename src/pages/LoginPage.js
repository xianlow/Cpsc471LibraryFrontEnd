import React, { useState, useEffect} from "react"
import { useNavigate } from "react-router-dom";
import "../styles/Login.css";
import axios from "axios";


function Login() {
    const [userID, setUserID] = useState("");
    const [user, setUser] = useState();
    const navigate = useNavigate();

    useEffect(() => {
        const loggedInUser = localStorage.getItem("userID");
        if(loggedInUser){
            const userFound = JSON.parse(loggedInUser);
            setUser(userFound);
        }
    }, [])
    const navToLogin = () => {
        navigate('/');
    }

    const check_login = async e => {
        e.preventDefault();
        //Send over userID here to check
        const user = {userID};
        const response = await axios.post("http://localhost:8080/login", userID);
        if(response.data.name != null && response.data){
            setUser('user');
            localStorage.setItem("userJob", "user");
            localStorage.setItem("userID", JSON.stringify(response.data.custID));
        }
        else if(response.data.firstname == null && response.data) {
            setUser('admin');
            localStorage.setItem("userJob", "admin");
            localStorage.setItem("userID", JSON.stringify(response.data.ID));
        }else if(response.data.firstname != null && response.data){
            setUser('emp');
            localStorage.setItem("userJob", "emp");
            localStorage.setItem("userID", JSON.stringify(response.data.ID));
        }else{
            alert("No id associated");
        }
        
        
    };
    
    if(localStorage.getItem("userJob") != null){
        navToLogin();
    }
    // if User correct, check password. if Script checks for existences of users, just needs to overrride one flag
    return (
        <div className = "LoginBase">
            <div className = "login">
            <form onSubmit={check_login}>
                <label htmlFor="userName">Id:</label><br />
                <input type="text" id="userName" placeholder="Enter unique Id here" name="userName" onChange={({target}) => setUserID(target.value)} required /><br />
                <input type="submit" value="Submit"  />
            </form>
            </div>
        </div>
    )
}

export default Login;