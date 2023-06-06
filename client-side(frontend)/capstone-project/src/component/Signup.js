import React from "react";
import  './Signup.css'

function Signup(){
    return(
        
     <div className="big">  <img className="signuplogo" src="logo1.png" alt="image"/>
         <div className="main1">
            
                <div className='main2'>
                    <img className="justice" src="Truth.png" alt="iamge"/>

               

                </div>
            <div className="main3">
                    <p className="sign">Sign Up</p>
                    <p className="user1">Username:</p>
                    <input type="text" Placeholder="name" className="name"></input><br></br>

                    <p className="user2">Email:</p>
                    <input type="Email" Placeholder="Email" className="Email"></input><br></br>

                    <p className="user2">Password:</p>
                    <input type="Password" Placeholder="password" className="password"></input><br></br>
                
                 
                    <div className="or-container">
                        <div className="line"></div>
                        <span className="or-text">OR</span>
                        <div className="line"></div>
                    </div>
                     <img className="logo1" src="google.webp" alt="image"/>
                     <img className="logo2" src="facebook.webp" alt="image"/>
                     <img className="logo3" src="intagrame.png" alt="image"/>
                     <img className="logo4" src="Twitter.png" alt="image"/>
                
            </div>
        </div>
     </div> 
    )
}
export default Signup;