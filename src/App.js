import React from 'react';
import logo from './logo.svg';
import './App.css';
import { UsersList } from './user';
import {UserContainer} from './user';

class LinkOnNav extends React.Component{
  constructor(props){
      super(props)
     state={
         activeItem: "Users"
     }

     render(){
       return(
<div>
  <Navbar onItemChanged={activeItem=> this.setState({activeItem})}
   activeItem={this.state.activeItem} items={["Users", "Home"]} />
  {this.state.activeItem === "Users" ? 
  <> 
   <UsersList />
  </>// то же самое что и React>fragment
  // <div><button onClick={()=>this.state({activeItem: "Home"})}>Go to Home</button>
  : ("Home")}
</div>
       )

     }}
  
  }//всплытием между компонентами лучше не пользоваться

export default App;
