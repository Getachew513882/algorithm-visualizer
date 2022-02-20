import React,{Component} from "react"
import BubbleSort from "./Bubblesort.js";
import bubblesort from './bubblesort.css';
class  App extends Component {
  
  constructor()
  {
     super();
     this.state = { thenewUI:[] ,buttoname : "Start Sorting", loop1index :0, loop2index :0, MySortingDatas : [
      {
         id :"id1",
         heightofthetower : 40,
         valueoftower : 1,
         MarginLeft: 100,
         backgroundColor: "green" 
      },

      {
        id :"id3",
        heightofthetower : 120,
        valueoftower : 3,   
        MarginLeft: 200,
        backgroundColor: "green" 
      },

      {
        id :"id4",
        heightofthetower : 80,
        valueoftower :  2,
        MarginLeft:  300,
        backgroundColor: "green" 
      },

      {
        id :"id5",
        heightofthetower : 160,
        valueoftower :  4,
        MarginLeft:  400,
        backgroundColor: "green" 
      },

      {
        id :"id6",
        heightofthetower : 320,
        valueoftower :  8,
        MarginLeft:  500,
        backgroundColor: "green"
      },
        
      {
        id :"id2",
        heightofthetower : 200,
        valueoftower :  5,
        MarginLeft:0,
        backgroundColor: "green"
      },

      {
        id :"id7",
        heightofthetower : 280,
        valueoftower :  7,
        MarginLeft:  600,
        backgroundColor: "green"
      },

      {
        id :"id8",
        heightofthetower : 240,
        valueoftower :  6,
        MarginLeft:  700,
        backgroundColor: "green"
      }

    ]}     
   }

    componentDidMount()
    {
        //draw the UI
        this.setState( {thenewUI : this.state.MySortingDatas.map( detailinfo => <BubbleSort key={detailinfo.id}  height = {detailinfo.heightofthetower} value={detailinfo.valueoftower}  transition ={0}  marginLeft = {detailinfo.MarginLeft} backgroundColor = {detailinfo.backgroundColor}/> )}); 
    }

    startTheLoop = () =>
    {
      this.loop1( this.state.loop1index );
    }

    //the first loop 
    loop1 = ( index ) =>
    {      
        if( index <= this.state.MySortingDatas.length-2 )
        {
            var temp = index+1;

            this.setState({
              loop2index : temp
            })

            if( index === 0 )
            {
                setTimeout(() => {
                  this.loop2( index,this.state.loop2index );
                }, 500);
            }

            else
            this.loop2( index,this.state.loop2index );
        }

        else{
          this.setState( {buttoname : "Sort finished"} );
        }
        
    }

    //the second loop
    loop2 = ( incommingindex, selfindex ) =>
    { 
            var temparray = this.state.MySortingDatas.map( function( detailitems )
            {
                return detailitems;
            });
          
            if( selfindex < temparray.length )
            {
                  //alert(selfindex);
                  if( temparray[ incommingindex ].valueoftower >= temparray[ selfindex ].valueoftower )
                  {
                          //swap the value of towers
                          var temp = temparray[ incommingindex ].valueoftower;
                          temparray[ incommingindex ].valueoftower = temparray[ selfindex ].valueoftower;
                          temparray[ selfindex ].valueoftower = temp;               
  
                          //swap the height of the towers
                          var temp1 = temparray[ incommingindex ].heightofthetower;
                          temparray[ incommingindex ].heightofthetower = temparray[ selfindex ].heightofthetower;
                          temparray[ selfindex ].heightofthetower = temp1;

                          this.draw( temparray );
                          
                          this.setState( previousindex =>{  
                              return{
                                        loop2index : previousindex.loop2index + 1
                                    }
                            })

                          setTimeout(() =>{  
                            this.loop2( incommingindex,this.state.loop2index );
                          }, 3500);
                  }

                  else
                  {
                      this.setState( previousindex =>{  
                        return{
                                  loop2index : previousindex.loop2index + 1
                              }
                      })

                      this.loop2( incommingindex, this.state.loop2index );
                  }
            }

            else
            {           
              this.setState( previousindex =>{
                      return{
                        loop1index : previousindex.loop1index + 1 
                      }
                });

                //alert("entered else" + " " + this.state.loop2index);
                this.setState({
                          loop2index : 0
                  });

                this.loop1( this.state.loop1index );
            }   
    }

    draw = ( temparray) =>{
      this.setState( { MySortingDatas : temparray } );
      this.setState( { thenewUI : temparray.map( detailinfo => <BubbleSort key={ detailinfo.id }  height = { detailinfo.heightofthetower } value={ detailinfo.valueoftower }  transition ={ "2s" }  marginLeft = { detailinfo.MarginLeft } backgroundColor = { detailinfo.backgroundColor }/> ) } ); 
    }

    render(){
      return(
        <div className="parent">
          <div className="theUI">
                {this.state.thenewUI}
          </div>
              <button onClick={ this.startTheLoop }> { this.state.buttoname } </button>
        </div>
      );
    }
  }

export default App;
