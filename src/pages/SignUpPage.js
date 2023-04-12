import React from "react"
import { useNavigate } from "react-router-dom";
import apiServices from "../services/apiServices";
import "../styles/SignUpPage.css";


function SignUp() {
    const navigate = useNavigate();
    const navToHome = () => {
        navigate('/');
    }

    const sendToDB = () => {
        const name = document.getElementById("name").value;
        const phoneNum = document.getElementById("phoneNum").value;
        const state = {
            "phonenum": phoneNum,
            "name": name
        }
        apiServices.newCustomer(state);

        alert("You have successfully signed up");
        navToHome();
    }


    // if User correct, check password. if Script checks for existences of users, just needs to overrride one flag
    return (
        <div className = "signupbase">
            {
            //<ProductSearch/>
            
            //<NewsFeed />
            }
            <div className = "signup">
            <form onSubmit={sendToDB}>
                <label htmlFor="name">Name:</label><br />
                <input type="text" id="name" placeholder="Enter your name" name="name" required /><br />
                <label htmlFor="phoneNum">Phone number:</label><br />
                <input type="text" id="phoneNum" placeholder="Enter you phone number" name="phoneNum" required /><br />
                <input type="submit" value="Submit"  />
            </form>
            </div>
        </div>
    )
}

export default SignUp;