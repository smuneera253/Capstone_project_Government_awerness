import React from "react";
import './officenumber.css'

function office(){
    return(
        <div>
                 <nav className="navbar">
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
                   
                        {/* <p className="about">about</p>
                    */}
            </div>
                   <div className="flex">
                           <img src="resources/flag.png" className="img2"/>
                           <img src="resources/govtlogo.png" className="img1"/>
                            <input type="text" Placeholder="search" className="search"></input><br></br>
                           <img src="resources/search1.png" className="btn"/>
                           {/* <div className="image"></div> */}
                           <span className="sign11">sign up</span>
                           <span className="login">login</span>
                           <div className="login">about</div>
                          
                   </div>
                   <hr/>
                   <div className="nav">
                       {/* <span img src="resources/navbarc.png" className="img3">Topic</span> */}

                       <div>
                               <select className="back bottom">
                                {/* <div>
                                    <img className="whitetopic" src="resources/Topic.png"/>
                               </div> */}
                                   <option value="bottom">Topics</option>
                                   <option value="option1 ">poltical leader</option>
                                   <option value="option2">Government budjet</option>
                                   <option value="option3">Government plans</option>
                                   <option value="option3">Government office numbers</option>
                                   <option value="option3">indian most beatiful torist place</option>
                                   <option value="option3">Help_line number</option>
                               </select>
                               </div>
                       <span img src="resources/search1.png" className="poltical bottom">Poltical leaders</span>
                       <span className="poltical bottom">Government budget</span>
                       <span className="poltical bottom">Government plans</span>
                       <span className="poltical bottom">Government office number</span>
                       <span className="poltical bottom">Tourist place</span>
                       <span className="poltical bottom">Help_line numbers</span>
                   </div>
                 
            </nav>
            <div>
                <marquee>
        
                <p className="phara">Our website provides comprehensive  information on government-related topics, including details about the current Prime Minister, their accomplishments, and performance in office. We also offer insights into government benefit plans and loans available to citizens, along with a clear hierarchy of government officials. Additionally, we provide contact numbers for various government offices, ensuring easy access for any inquiries or assistance needed. Lastly, our website features valuable information on popular tourist destinations, including relevant contact numbers, enabling visitors to plan their trips effectively.</p>
                </marquee>
               </div> 
            <div className="mainT">
                <div className="mainA">
                    <div className="png">
                         <img src="resources/office.png" className="office"/>
                         <h3 className="off"> Government office number</h3>
                     </div>
                     <div className="sectors">
                        <ul>
                            <li><p>Ministry of Agriculture</p></li>
                            <li><p>Ministry of Panchayati Raj</p></li>
                            <li><p>Ministry of Chemicals and Fertilizers</p></li>
                            <li><p>Ministry of Civil Aviation</p></li>
                            <li><p>Ministry of Consumer Affairs,<br/> Food and Public Distribution</p></li>
                            <li><p>Ministry of Co-operation</p></li>
                            <li><p>Ministry of Corporate Affairs</p></li>
                            <li><p>Ministry of Culture</p></li>
                            <li><p>Ministry of Defence</p></li>
                            <li><p>Ministry of Environment, Forest and Climate Change</p></li>
                            <li><p>Ministry of Health and Family Welfare</p></li>
                        </ul>

                     </div>
                </div>
                <div className="mainB">
                    <div className="oneline">
                        <div className="twoline"></div>
                        <div className="twoline"></div>
                        <div className="twoline"></div>
                    </div>
                </div>
                
                
            </div>
        </div>
    );
}
export default office