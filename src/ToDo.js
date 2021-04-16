import PendingTasks from './pendingTasks/pendingTasks';
import 'font-awesome/css/font-awesome.min.css';
import React, { Component } from 'react';
import { auth } from './firebase';

 const signOut = () => auth.signOut(); 

class ToDo extends Component{
    render(){
        return ( <div className="App">
        <header className="signOut"><button className="signOutBtn" onClick={signOut}>Sign Out</button></header>
        <header className="header">TO-DO LIST</header>
        <PendingTasks></PendingTasks>
       </div>);
    }
}

export default ToDo

