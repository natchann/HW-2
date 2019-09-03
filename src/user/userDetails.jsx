
import React from 'react';


class UsersContainer extends React.Component{
state={
    name: this.props.user.name
}
render(){
    <form>
        <input type="text"
        value={this.state.name}
        onChange=()
    </form>
}
}
