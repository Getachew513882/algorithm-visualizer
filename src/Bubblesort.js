import React, {Component} from "react"

class BubbleSort extends Component
{
     render()
     {
         return(
                  <div style ={{borderRadius: "2px", display:"inline-block", transition: this.props.transition, marginTop : "30px",backgroundColor : this.props.backgroundColor, height:this.props.height, width: "50px", marginLeft: this.props.marginLeft}}>
                     <p className ="paragraph" style = {{color:"white", position: "absolute"}}> {this.props.value}</p>
                  </div>
         )
     }
}

export default BubbleSort