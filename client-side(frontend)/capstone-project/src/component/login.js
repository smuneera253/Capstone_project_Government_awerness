import React from "react";
import './login.css'

function login(){
    return(
        // <div style={{ backgroundColor: "blueviolet", Height: "100vh" }}>
        <div className="box">
           
            <div className="box1">
                 <p className="login">login</p>
                    <p className="username">Email:</p>
                    <input type="Email" Placeholder="email" className="classemail"></input><br></br>
                    <p className="username">Password:</p>
                    <input type="password" Placeholder="password" className="classpass"></input><br></br>
                    <button>login</button>
                    <p className="already ">already you have account? <span>sign</span></p>

            </div>
        </div>
    );
}
export default login;