/*import React from "react";
import './login.css'

function login(){
    return(
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
export default login;*/
import React from "react";
import './login.css'

function login(){
    return(
        <div className="baloon">
            <div className="baloon1">
                <div className="baloon2">
                    <div className="login1">
                        <p className="sign1">login</p>
                            <p className="users1">Username:</p>
                            <input type="text" Placeholder="name" className="names"></input><br></br>

                            <p className="user2">Email:</p>
                            <input type="Email" Placeholder="Email" className="Emails"></input><br></br>

                            <p className="user2">Password:</p>
                             <input type="Password" Placeholder="password" className="password1"></input><br></br>
                                <button>Signup</button>

                                 <h3 className="login">already user ?<span>login</span></h3>
                    </div>
                 </div>
             </div>
                

        </div>
    );
}
export default login