import React, { useState, useEffect} from "react"
import { useNavigate } from "react-router-dom";
import "../styles/Login.css";



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
        
        

        if(!userID.localeCompare("admin")) {
            setUser('admin');
            localStorage.setItem("userID", JSON.stringify('admin'));
        }else if(!userID.localeCompare("emp")){
            setUser('emp');
            localStorage.setItem("userID", JSON.stringify('emp'));
        }else if(!userID.localeCompare("regis")){
            setUser('regis');
            localStorage.setItem("userID", JSON.stringify('regis'));
        }else{
            alert("No id associated");
        }
        
        
    };

    if(user === "admin" || user === "emp" || user === "regis"){
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