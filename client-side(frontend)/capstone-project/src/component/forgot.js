// import React from "react";
// import './forgot.css'

// function forgot(){
//     return(
//        <div>
//             <div className="forgot1">
//                  <p className="forgot2">forgot</p>
//                     <p className="flag1">username:</p>
//                     <input type="text" Placeholder="user" className="class"></input><br></br>
                   
//                     <p className="flag2">Newpassword:</p>
//                     <input type="text" Placeholder="password" className="pass1"></input><br></br>
                   
//                     <p className="flag2">conformpassword:</p>
//                     <input type="text" Placeholder="password" className="pass2"></input><br></br>
                   
//                     <button>login</button>
//                     <p className="you ">already you have account? <span>login</span></p>

//             </div>
//        </div>
//     );
// }
// export default forgot

import React from "react";
import './forgot.css'

function forgot(){
    return(
        <div className="baloon">
            <div className="baloon1">
                <div className="baloon2">
                    <div className="login1">
                    <p className="forgot2">forgot</p>
                    <p className="flag1">username:</p>
                    <input type="text" Placeholder="user" className="class"></input><br></br>
                   
                     <p className="flag2">Newpassword:</p>
                   <input type="text" Placeholder="password" className="pass1"></input><br></br>
                     <p className="flag2">conformpassword:</p>                     
                     <input type="text" Placeholder="password" className="pass2"></input><br></br>
                     <button>login</button>                     
                     <p className="you ">already you have account? <span>login</span></p>

                    </div>
                 </div>
             </div>
                

        </div>
    );
}
export default forgot