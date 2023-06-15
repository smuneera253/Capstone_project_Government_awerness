import React from "react";
import './leaderpage.css'

function leader(){
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
                       <span className="poltical bottom">Government budjet</span>
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
            <div className="MAIN">
                <div className="leader1 shad ">
                    <div className="leader2 ">
                        <img src="resources/people.png" className="people"/>
                        <h2 className="bottom1">Poltical leaders</h2>
                        
                    </div> 
                        <div>
                                <ul>
                                    <li><p className="PM CM">President</p></li>
                                    <li><p className="PM CM">Voic President</p></li>
                                    <li><p className="PM CM">Prime Minister</p></li>
                                    <li><p className="PM CM">cheif Minister</p></li>
                                    <li><p className="PM CM">member of parlament.....(MP)</p></li>
                                    <li><p className="PM CM">member of ligislative assembly....(MLA)</p></li>
                                    <li><p className="PM CM">Zilla Parishat Territorial Constituencies....(ZPTC)</p></li>
                                    <li><p className="PM CM">Mandal Parishat Territorial Constituencies....(MPTC )</p></li>
                                </ul>
                                
                        </div>
                        
                </div>
                    <div className="MAIN2">
                        <div className="MAIN3 ">
                         <b><p className="OF ">First Prasident Of india</p> </b>
                            <img src="resources/prasident.jpeg" className="prasident"/>
                            <div  className="Name">
                            <b><p>Doctor babu rajendra prasad</p></b>
                            <p>(born December 3, 1884, Zeradei, India—died February 28, 1963, Patna)</p>
                            <p> Indian politician, lawyer, and journalist who was the first president of the Republic of India (1950–62).</p>
                            <p>Raised in a landowning family of modest means, Prasad was a graduate of the Calcutta Law    that College. </p>
                            </div>
                        </div>
                
                    </div>
               </div>
               <div className="MAIN4">
                <b><p className="import">important plans</p></b>
                <p className="import1">The prasident of collaborate others and making the plans </p>
                <div className="MAIN5 shado">
                    <div className="plan1 ">
                    <div className="plan2 shadow3 ">
                       
                        <img src="resources/Quiteindia.jpg" className="photo"/>
                        <p className="move">Quite india movment</p>
                        <button className="all">click me</button>
                       
                    </div>
                    <div className="plan3 shadow3">
                    <img src="resources/nehru.png" className="photo"/>
                    <p className="move">planing namak sitya</p>
                    <button className="all">click me</button>
                    </div>
                    <div className="plan3 shadow3">
                    <img src="resources/Mahatma.jpg" className="photo"/>
                    <p className="move">planing namak sitya</p>
                    <button className="all">click me</button>
                    </div>
                    <div className="plan3 shadow3">
                    <img src="resources/Nehruandbabu.jpg" className="photo"/>
                    <p className="move">planing namak sitya</p>
                    <button className="all">click me</button>
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
export default leader