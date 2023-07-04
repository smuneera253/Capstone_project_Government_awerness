import { useState,useEffect } from "react";
import './backenddata.css'
const Govt =()=>{
    const [data,setleaderData] = useState([]);
    const [leaderdata,setData]=useState('');
    useEffect(()=>{
        fetchData();
    },[])
    const fetchData =()=>{
        fetch("http://localhost:5500/CM").then((res)=>{
            return res.json();
        }).then((res)=>{
            setleaderData(res);
            console.log(res);
        })
    }
    const searchleaderData =()=>{
        fetch(`http://localhost:5500/search/${leaderdata}`).then((res)=>{
            return res.json();
        }).then((res)=>{ 
            setleaderData(res);
            console.log(res);
        })
    }
    const leaderchange =(event)=>{
        setData(event.target.value);
    }
    function clearData(){
        setData("");
    }
    const handleClick = async(url) => {
        try {
            await fetch(url).then((res) => {
                return res.json();
            }).then((res) => {
                setleaderData(res);
                console.log(res);
            })
        }catch(err){
            console.error(err);
        }
    }
    return(<div>
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
                           <input type="text" Placeholder="search" className="search" value={leaderdata}onChange={leaderchange}/>
                
                           <img src="resources/search1.png" className="btn" onClick={clearData}/>
                           
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
                       <span className="poltical bottom">Helpline numbers</span>
                   </div>
                 
            </nav>
            <marquee>
        
        <p className="phara">Our website provides comprehensive  information on government-related topics, including details about the current Prime Minister, their accomplishments, and performance in office. We also offer insights into government benefit plans and loans available to citizens, along with a clear hierarchy of government officials. Additionally, we provide contact numbers for various government offices, ensuring easy access for any inquiries or assistance needed. Lastly, our website features valuable information on popular tourist destinations, including relevant contact numbers, enabling visitors to plan their trips effectively.</p>
        </marquee>

            

        </div>
            <div className="mainbox">
                <div className="leader1 shad ">
                    <div className="leader2 ">
                        <img src="resources/people.png" className="people"/>
                        <h2 className="bottom1">Poltical leaders</h2>
                        
                    </div> 
                        <div>
                                <ul>
                                    <li><p className="PM CM" onClick={()=>handleClick("http://localhost:5055/president")}>President</p></li>
                                    <li><p className="PM CM" onClick={()=>handleClick("http://localhost:5055/voicepresident")}>Voic President</p></li>
                                    <li><p className="PM CM" onClick={()=>handleClick()}>Prime Minister</p></li>
                                    <li><p className="PM CM" onClick={()=>handleClick("http://localhost:5055/cm")}>cheif Minister</p></li>
                                    <li><p className="PM CM" onClick={()=>handleClick("http://localhost:5055/mp")}>member of parlament.....(MP)</p></li>
                                    <li><p className="PM CM" onClick={()=>handleClick("http://localhost:5055/mla")}>member of ligislative assembly....(MLA)</p></li>
                                    <li><p className="PM CM" onClick={()=>handleClick("http://localhost:5055/zptc")}>Zilla Parishat Territorial Constituencies....(ZPTC)</p></li>
                                    <li><p className="PM CM" onClick={()=>handleClick("http://localhost:5055/mptc")}>Mandal Parishat Territorial Constituencies....(MPTC )</p></li>
                                </ul>
                                
                        </div>
                        
                 </div>
            
        
        <div className="CMtable">
        {
            (data?.filter(function (e){
                if(e.Name.toLocaleLowerCase().includes(leaderdata.toLocaleLowerCase())){

                return data;
                }
            })?.map(({Age,Name,Image,StartingDate,EndingDate,State,Party,jointheDate,district,Sitting ,Mandel,Distric })=>
            <div>
                <div className="details backcolor">
                   <div className="imh">
                    <div className="leaderimg1" >
                        <img src={Image} alt=""/>
                    </div>
                    <p className="Name name1">Name</p>
                    <div className="leadername">{Name}</div>
                    <p className="Name name1">Age:</p>
                    <div className="leaderage"> {Age}</div>
                    <p className="Name name1">Assumed office:</p>
                    <div className="stating">{StartingDate}</div>
                    <p className="Name name1">Left:</p>
                    <div className="ending">{EndingDate}</div>
                    <p className="Name name1">State:</p>
                    <div className="stating">{State}</div>
                    <div className="stating">{Party}</div>
                    <div className="stating">{jointheDate}</div>
                    <div className="stating">{district}</div>
                    <div className="stating">{Sitting}</div>
                    <div className="stating">{Mandel}</div>
                    <div className="stating">{Distric}</div>
                </div>
                <button className="clickme more">View all</button>
                </div>
                </div>))
               
        }
        </div>
        
        </div>
        <div> <div className="box6"><span className="back1">back to top</span></div>
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
    </div>)
    
}
export default Govt; 