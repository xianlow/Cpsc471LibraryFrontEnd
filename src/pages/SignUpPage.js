import React from "react"
import { useNavigate } from "react-router-dom";
import "../styles/SignUpPage.css";


function SignUp() {
    const navigate = useNavigate();
    const navToHome = () => {
        navigate('/');
    }

    const sendToDB = () => {
        const username = document.getElementById("userName").value;
        //Check if customer id is issued and used this will be hard coded for now!!!!!!

        if(!username.localeCompare(1234)){
            alert("Id is already in use");
            return false;
        }

        alert("You have successfully signed up")
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
                <label htmlFor="userName">User ID:</label><br />
                <input type="text" id="userName" placeholder="Enter a unique user ID" name="userName" required /><br />
                <input type="submit" value="Submit"  />
            </form>
            </div>
        </div>
    )
}

export default SignUp;