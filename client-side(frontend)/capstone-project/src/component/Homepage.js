import React from "react";
import './Homepage.css'

function Home(){
    return(
       <div>
            <nav className="navbar1">
           
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
                                <img src="resources/flag.png" className="img22"/>
                                <img src="resources/govtlogo.png" className="img1"/>
                                 <input type="text" Placeholder="search" className="search1"></input><br/>
                                <img src="resources/search1.png" className="btn1"/>
                                {/* <div className="image"></div> */}
                                <span className="sign1">sign up</span>
                                <span className="login1">login</span>
                                <div className="login1">about</div>
                               
                        </div>
                        <hr/>
                        <div className="nav">
                            {/* <span img src="resources/navbarc.png" className="img3">Topic</span> */}

                            <div>
                                    <select className="backk bottom">
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
                            <span className="poltical bottom">Government budjet</span>
                            <span className="poltical bottom">Government plans</span>
                            <span className="poltical bottom">Government office number</span>
                            <span className="poltical bottom">Tourist place</span>
                            <span className="poltical bottom">Help_line numbers</span>
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
                       <div className="box7">
                            <div className="aboutus">
                                <div >
                                    <h4>About</h4>
                                    <p>Government information</p>
                                    <p>Poltical leader</p>
                                    <p>Government budjet</p>
                                    <p>police department</p>
                                </div>
                                <div className="foter">
                                    <h4>Government Plans</h4>
                                    <p>loans</p>
                                    <p>benefit plans for people</p>
                                    <p>hierarchy information about Government</p>
                                </div>
                                <div className="foter">
                                    <h4>Government office numbers</h4>
                                    <p>Help_line numbers</p>
                                    <p>agriculture</p>
                                    <p>indian culture</p>
                                    <p> indian cricket</p>
                                    <p>army</p>
                                   
                                </div>
                                <div className="foter">
                                    <h4>Government Jobs notifications</h4>
                                    <p>UPSC</p>
                                    <p>NEET1</p>
                                    <p>indian army jobs</p>
                                    <p>CBI jobs</p>
                                </div>
                               
                            </div>
                            
                            <hr/>
                            <div className="icon2">

                                  <img className="Twitter" src="resources/Twitter.png" alt="image"/>
                                  <img className="linkdil" src="resources/linkdil.png" alt="image"/>
                                  <div>
                                   <img className="facebook" src="resources/facebook.webp" alt="image"/>
                                   </div>
                            </div>
                            <p className="this">This website offers comprehensive government information, job notifications, and insights on Indian culture, cricket, and agriculture.</p>
                       </div>

       </div>
      
    );
}
export default Home