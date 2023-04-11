import React, {Component} from "react";
import { useNavigate } from "react-router-dom";

function NavigationToHome(){
    const navigate = useNavigate();
    const navToHome = () => {
        navigate('/');
    };
    const handleLogout = () =>{

        localStorage.clear();
        navToHome();
    }
    return(
        <div>
            <button onClick={handleLogout} className="btn btn-success">Logout</button>
        </div>
    );
}
export default class LogOutButton extends Component {


    render(){
        return(
        <NavigationToHome/>
        );
    }
    
}