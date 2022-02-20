import React from "react";

// function header()
// {
//     return(<h1 style={{color: "red", backgroundColor: "blue"}}>This is Header part</h1>) // the style properties in javascript should be written as objects
// }

//or we can use the above example as follow

function header()
{
     const mystyle ={
         color:"red",
         backgroundColor:"blue",
         fontsize:"20px"
     };
     return (<h1 style={mystyle}>This is My header</h1>)
}
export default header;