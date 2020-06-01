import React, { Component } from 'react';
//import logo from './logo.svg';
import './App.css';
import Information from './info-json';

class App extends Component {

  constructor(){
    super();

    this.state={
      search:null,
      x: false
    };
  }

  searchSpace=(event)=>{
    let keyword = event.target.value;
    this.setState({search:keyword})
  }

  handleClick=(event)=>{

    this.setState({x:true})
    
    
  }

  render(){
    const style1 = {
      paddingRight:'10px'
    }
    
    const items = Information.filter((data)=>{
      if(this.state.search == null)
          return 
      else if(data.name.toLowerCase().includes(this.state.search.toLowerCase())){
          return data
      }
    }).map(data=>{
      return(
      <div>
        <ul>
          <li style={{position:'relative',left:'10vh'}}>
            <span style={style1}>{data.name}</span>
            {this.state.x?<span style={style1}>{data.rollno}</span>:<p></p>}
            
          </li>
        </ul>
      </div>
      )
    })

    return (
      <div>
      <input type="text" placeholder="search" onChange={(e)=>this.searchSpace(e)} />
      <button onClick={(e)=>this.handleClick(e)}>
      show
</button>
      {items}
      </div>
    )
  }
}

export default App;