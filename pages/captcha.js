import React from 'react';


 
class aptcha extends React.Component {
  
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
    this.state = { random: 0 };
  }

  handleClick() {
    const min = 0;
    const max = 8;
    const rand1 =Math.floor( min + Math.random() * (max - min));
    const rand2 = Math.floor(min + Math.random() * (max + min));
    const rand3 = Math.floor(min + Math.random() * (max ));
    const rand4 = Math.floor(min + Math.random() * (min + (max-min)));
    this.setState({ random1: this.state.random + rand1 });
    this.setState({ random2: this.state.random + rand2 });
    this.setState({ random3: this.state.random + rand3 });
    this.setState({ random4: this.state.random + rand4 });
  }

  render() {
    return (
      <>
        <div >
          
            
            <div style={{  border: "1px solid #ccc", "border-radius": "4px","box-sizing": "border-box" , margin:"0.5rem", }}>
                <div>
                    <span style={{color: "black", fontWeight: 'bold' ,fontStyle: 'italic' , marginLeft: '0.8rem',backgroundColor:"white" , border:"black", }}>{this.state.random1}</span>
                    <span style={{color: "black", fontWeight: 'bold' ,fontStyle: 'italic' , marginLeft: '0.8rem',backgroundColor:"white" , border:"black", }}>{this.state.random2} </span>
                    <span style={{color: "black", fontWeight: 'bold' ,fontStyle: 'italic' , marginLeft: '0.8rem',backgroundColor:"white" , border:"black", }}>{this.state.random3} </span> 
                    <span style={{color: "black", fontWeight: 'bold' ,fontStyle: 'italic' , marginLeft: '0.8rem',backgroundColor:"white" , border:"black", }}>{this.state.random4} </span> 
                </div>
            </div>
         
             
            
            <center className="">                 
                 <div align="left">  <input  style={{backgroundColor:"black", color: "white",padding:"0.5rem"}} onClick={this.handleClick.bind(this)} value="Refresh" type="button" tabindex="5" /></div>
             </center>
          </div>
          
      </>  
    );
  }
}

export default aptcha;