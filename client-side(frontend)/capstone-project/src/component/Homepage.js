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
                        
                             {/* <p className="about">about</p>
                         */}
                 </div>
                        <div className="flex">
                                <img src="resources/flag.png" className="img2"/>
                                <img src="resources/govtlogo.png" className="img1"/>
                                 <input type="text" Placeholder="search" className="search"></input><br></br>
                                <img src="resources/search1.png" className="btn"/>
                                {/* <div className="image"></div> */}
                                <span className="sign">sign up</span>
                                <span className="login">login</span>
                                <div className="login">about</div>
                               
                        </div>
                        <hr/>
                        <div className="nav">
                            {/* <span img src="resources/navbarc.png" className="img3">Topic</span> */}

                            <div>
                                    <select className="back">
                                        <option value="">Topics</option>
                                        <option value="option1">poltical leader</option>
                                        <option value="option2">Government budjet</option>
                                        <option value="option3">Government plans</option>
                                        <option value="option3">Government office numbers</option>
                                        <option value="option3">indian most beatiful torist place</option>
                                        <option value="option3">Help_line number</option>
                                    </select>
                                    </div>
                            <span img src="resources/search1.png" className="poltical">Poltical leaders</span>
                            <span className="poltical">Government budjet</span>
                            <span className="poltical">Government plans</span>
                            <span className="poltical">Government office number</span>
                            <span className="poltical">Tourist place</span>
                            <span className="poltical">Help_line numbers</span>
                        </div>
                            
                </div>
            </nav>
                <div>
                <marquee>
        
                <p className="phara">Our website provides comprehensive  information on government-related topics, including details about the current Prime Minister, their accomplishments, and performance in office. We also offer insights into government benefit plans and loans available to citizens, along with a clear hierarchy of government officials. Additionally, we provide contact numbers for various government offices, ensuring easy access for any inquiries or assistance needed. Lastly, our website features valuable information on popular tourist destinations, including relevant contact numbers, enabling visitors to plan their trips effectively.</p>
                </marquee>
                </div>
                <div className="main">
                    <div className="box1"></div>
                    <div className="box"></div>
                    <div className="box"></div>
                    <div className="box"></div>

                </div>
                <img src="resources/logoindia.webp" className="img4"/>
                        <div className="box2">
                            <div className="img5 color"><p className="information">Indian culture information</p></div>
                            <div className="img6 color"><p className="information ">Indian cricket information</p></div>
                            <div className="img7 color"><p className="information ">Indian railway information</p></div>
                            <div className="img8 color"><p className="information ">Indian army information</p></div>
                            <div className="img9 color"><p className="information ">Indian agriculture information</p></div><br/>

                        </div>
                        <div className="box3">
                            <p className="jobs">Indian Government Jobs </p>
                            <div className="box4 ">
                                
                                <img src="resources/UPSC.webp" className="img10 color3"/>
                                <img src="resources/psc.png" className="img10 color3"/>
                                <img src="resources/train .webp" className="img10 color3"/>
                                <img src="resources/NEET1.webp" className="img10 color3"/>
                                <img src="resources/CBI.png" className="img10 color3"/>
                                <button className="viewbtn">view all jobs</button>
                            </div>

                        </div>
                       <div className="box5">
                            <p className="job">Qouts</p>
                            <div className="white">
                                 <img src="resources/Apjkalam.png" className="kalam"/>
                                
                                    <div className="kalamqouts">
                                    
                                            <p className="text1">you cannot change your future</p>
                                            <p className="text2">but you can change</p>
                                            <p className="text3">your habits,and surely your habit will change your future</p>
                                            <p className="text4">APJ Abdul Kalam</p>
                                            <div className="circle">
                                            <div className="icon1"></div>
                                            <div className="icon"></div>
                                            <div className="icon"></div>
                                            <div className="icon"></div>
                                            </div>
                                           
                                    </div>
                            </div>
                       </div>
                       <div className="box6"><span className="back1">back to top</span></div>
                       <div className="box7"></div>

       </div>
      
    );
}
export default Home