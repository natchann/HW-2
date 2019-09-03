
import React from 'react';
import {UsersList} from './UsersList'

const Mode ={
 List: "list"
}

class UsersContainer extends React.Component{

     state={
         isLoadind: true,
         error: null,
         users: null,
         mode: Mode.LIST,
         currentUser: null,
        
     }
componentDidMount(){

    fetch()
    .then(response=>response.json())
    .then(users=> this.setState({users, isLoading:false}))
    .catch(error=> this.setState({error, isLoadind:false}))
}
     render(){
    
           if(this.state.isLoading){
return "...isLoading///";
           }
           if(this.state.error){
return `unexpected error"${this.state.error.message}` 
           }
const Component = this.props.component;

if
return <Component users={this.state.users} 
onEdited={user=>}
onDeleted={user =>{
    this.setState({isLoading: true})
    fetch( `url ${user.id}  `,
    {
        method: 'DELETE'
    })
    .then(()=> {
        this.setState(({user})=> ({users: users.filter(u.id !== user.id),
            }))
    })
  }} />
        //    return <UsersList users={this.state.users} />
        return<UserDetails onSave
        }
    }