import React from 'react';
import ReactDOM from 'react-dom';
// import './index.css';
import './nav.css';
import * as serviceWorker from './serviceWorker';
// import { Nav } from './nav';


class Navbar extends React.Component{


static getDerivedStateFromProps(props){
    return{
        activeItem: props.activeItem
    }
}

    render(){
   
        return( 
           
            <div className="topnav">
             {this.props.item.map(item=>
                 <a  id={item} className={(this.state.activeItem === item && "active") || null} 
                 href="" ref={this.domRef} 
                 onClick={e => {
                     this.setState({activeItem: item}, ()=>{
                         this.props.onItemChanged(item)
                     })
                 }} 
                 key={item}>{item}</a>
                )}   
           
          </div>
        )
    }
}






// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
