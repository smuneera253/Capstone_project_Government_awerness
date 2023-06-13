import React from "react";
import './Homepage.css'

function Home(){
    return(
       <div>
            <nav className="navbar">
           
                <div> 
                    
                    <div className="line1">
                        <select id="cars">
                                <option value="saab">Urdu</option>
                                <option value="vw">Telugu</option>
                                <option value="audi" selected>Hindi</option>
                                <option value="audi" selected>English</option>
                        </select>
                        <div className="skip"><p>skip main content |</p></div>

                        <div className="Dark">
                            <p className="mood">Dark Mode |</p>

                        </div>
                             <p className="about">about</p>
                        
                 </div>
                        <div className="flex">
                                <img src="resources/flag.png" className="img2"/>
                                <img src="resources/govtlogo.png" className="img1"/>
                                 <input type="text" Placeholder="search" className="search"></input><br></br>
                                <img src="resources/search1.png" className="btn"/>
                                <div className="image"></div>
                               
                        </div>
                        <hr/>
                        <div className="nav">
                            <div img src="resources/navbarc.png" className="img3">Topic</div>
                        </div>
                            
                </div>
            </nav>
       </div>
    );
}
export default Home