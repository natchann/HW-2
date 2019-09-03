import React from 'react';
import ReactDOM from 'react-dom';
import * as serviceWorker from './serviceWorker'; 

import './nav.css';

export const Nav=(props)=>{
return (
    <nav className="nav">
        <a src="#1" onChange={e=>this.setState({value:e.target.value})}>{props.children}</a>
    </nav>
)
}

// render(props){
//     return(
//         <nav className="nav">
//         <a src="#1" ref={this._domRef} value={this.state.value} onChange={e=>this.setState({value:e.target.value})}>{props.children}</a>
//     </nav>
//         // <div className="header">
//         // <Nav autoFocus={true}>Home</Nav>
//         // <Nav>Profile</Nav>
//         // <Nav>Contacts</Nav>
//         // </div>
//     )
// }
// }

// import App from './App';







// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
