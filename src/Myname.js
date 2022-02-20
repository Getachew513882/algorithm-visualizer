import React from "react"
import myname from './myname.css';
function Myname()
{
    const Firstname="Getachew";
    const Lastname="Sharew";

     return (
        <div class="myname">
             <h1>My name is {Firstname + " " + Lastname}</h1> 
         </div>
     )
}
export default Myname;