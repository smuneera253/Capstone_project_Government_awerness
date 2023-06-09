import React from "react";
import './signpractice.css'

function practice(){
    return(
        <div className="baloon">
            <div className="baloon1">
                <div className="baloon2">
                    <div className="box6">
                        <u><p className="sss">Sign Up</p></u>
                            <p className="users1">Username:</p>
                            <input type="text" Placeholder="name" className="names"></input><br></br>

                            <p className="user2">Email:</p>
                            <input type="Email" Placeholder="Email" className="Emails"></input><br></br>

                            <p className="user2">Password:</p>
                             <input type="Password" Placeholder="password" className="password1"></input><br></br>
                                <button>Signup</button>

                                <div className="or-container">
                                    <div className="line"></div>
                                    <span className="or-text">OR</span>
                                    <div className="line"></div>
                        
                                </div>
                    </div>
                 </div>
             </div>
                

        </div>
    );
}
export default practice