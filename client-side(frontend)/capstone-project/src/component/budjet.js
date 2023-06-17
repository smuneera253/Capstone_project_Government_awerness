import React from "react";
import './budjet.css'

function budget(){
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

                <div className="main1">
                    <div className="main2">
                        <div className="firstbox">
                            <img src="/resources/Budget1.png" className="dolar"/>
                            <h2 className="boderbottom">Government budget </h2>
                            
                        </div>
                        <div>
                                <ul>
                                    <li><p className="central state">Central Government budget </p></li>
                                    <li><p className="central state">state Government budget </p></li>
                                    <li><p className="central state">District budget </p></li>
                                    <li><p className="central state">Mandel budget </p></li>
                                    <li><p className="central state">Total budget </p></li>
                                    <li><p className="central state">Education deparment</p></li>
                                    <li><p className="central state">agriculture deparment</p></li>
                                    <li><p className="central state">Railway department</p></li>
                                </ul>
                            </div>
                    </div>
                    <div className="main3">
                        <div className="budget11">
                        <img src="/resources/gettyimages.jpg" className="storemoney"/>
                        <div className="Dpart">
                            <h3>Agriculture:</h3>
                            <p className="top">250000/ croror  for agriculture department.</p>
                         </div>
                       
                        <div className="Dpart">
                            <h3>Railway:</h3>
                            <p className="top">30000 / croror for  railway department.</p>
                        </div>
                        
                        <div  className="Dpart">
                            <h3>Education:</h3>
                             <p className="top">50000 / croror for  Education deparment. </p>
                        </div>
                        
                        <div  className="Dpart">
                            <h3>Health :</h3>
                            <p className="top">4000/ croror for  health care deparment</p>
                        </div>
                        
                    </div>
                      
                    </div>
                    <div className="main4">
                        <div  className="top">
                        {/* <img src="/resources/Budget1.png" className="dolar"/> */}
                            <h3 className="lines">more information</h3>
                         <ul>
                            <li><p className=" state">Andhra pradesh</p></li>
                            <li><p className=" state">Karnataka</p></li>
                            <li><p className=" state"> Tamil nadu</p></li>
                            <li><p className=" state">kerala</p></li>
                            <li><p className=" state">Madhya pradesh</p></li>
                            <li><p className=" state">Delhi</p></li>
                            <li><p className=" state">Punjab</p></li>
                            <li><p className=" state">Gujarat</p></li>
                            <li><p className=" state">Goa</p></li>
                            <li><p className=" state">Rajasthan</p></li>
                            <li><p className=" state">Odisha</p></li>
                         </ul>
                        </div>
                    </div>
                </div>
                <div className="step1">
                    <div className="step2">
                        <div className="agri">
                            <img src="resources/agriculture11.jpg" className="agricultureImage"/>
                            <div className="aboutthetext">
                                <h2 className="gap1">Agriculture</h2>
                                <ul>
                                <li className="gap"><p > Agriculture is the process of producing crops and rearing animals for gaining profit.</p></li>
                                <li className="gap"><p> Agriculture provides occupation to a huge Indian population.</p></li>
                                <li className="gap"><p>The contributor to India’s more than 15% GDP is agriculture.</p></li>
                                <li className="gap"><p>Agriculture is the occupation that gives us crops to eat.</p></li>
                                <li className="gap"><p> Fruits, pulses, oil, vegetables, etc things are obtained through agriculture.</p></li>
                                <li><p className="gap">Agriculture also provides us with leather, cotton, wool, and other animal products.</p></li>
                                <li><p className="gap">Agriculture can reduce starvation, poverty, and can raise employment to some extent.</p></li>
                                </ul>
                                <button className="btn1">view all</button>
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
                                   <img className="facebook1" src="resources/facebook.webp" alt="image"/>
                                   </div>
                            </div>
                            <p className="this">This website offers comprehensive government information, job notifications, and insights on Indian culture, cricket, and agriculture.</p>
                       </div>

       </div>
    );
}
export default budget

