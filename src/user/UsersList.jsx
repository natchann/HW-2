import React from 'react';

export const UsersList = ({users, onDeleted}) =>(
    <table>
         <thead>
        <tr key={user.id}>
           
            <td>ID</td>
            <td>Name</td>
            <td>Edit</td>
            <td>Delete</td>
        </tr>
        </thead>
<tbody>
    {users.map(user=>
        (
            <tr key={user.id}>
                
                <td>{user.id}</td>
            <td>{user.name}</td>
            <td><button onClick={()=> onEdited(user)}>Edit</button></td>
            <td><button onClick={()=> onDeleted(user)}>Delete</button></td>
            </tr>
        ))}
</tbody>
    </table>
)
