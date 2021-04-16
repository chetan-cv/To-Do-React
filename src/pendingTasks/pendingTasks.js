import React, { Component, useState } from 'react';
import { firestore, auth } from '../firebase';
import ShowTasks from './showTasks';


class PendingTasks extends Component{
    state = {show: false}
    
    showForm = ()=>{
        this.setState(prevState => ({
            show: !prevState.show
          }));
    }

    addToDo = (e)=>{
    const toDoRef = firestore.collection(`users/${auth.currentUser.uid}/todos`);
   // const [toDos] = useCollectionData(toDoRef);
        
    var form = document.forms[0];
    var toDo = form.querySelector('input[name="To-Do"]').value;
    var name = form.querySelector('input[name="Name"]').value;
    var deadline = form.querySelector('input[name="Deadline"]').value;
    if(toDo && name && deadline != null){
       toDoRef.add({
        'toDo':toDo,
        'name':name,
        'deadline':deadline,
        'complete': false,
    }); 
    }
    else{
        alert('Please enter values');
    }
    
    

        this.setState({
            show:false
        });  
        }

  formDisplay = ()=>{
        return (
            <div>
                <form className='createToDo'>
                    
                <input required type="text" id="toDo" name="To-Do" placeholder="To-Do: "></input><br />
                <input required type="text" id="name" name="Name" placeholder="Name: "></input><br />
                <input required type="text" id="deadline" name="Deadline" placeholder="Deadline: "></input><br />

                <button onClick={this.addToDo} className='add-btn'>Add</button>
                </form>
            </div>
        );
  
    }
    
    render(){
        return (
            <div className="pendingTask">
                <div className="titleBox">
                    <p>Pending Tasks</p>
                    <i style={{fontSize:'30px', padding: '1rem',cursor:'pointer'}} onClick={this.showForm} className="fa fa-plus-circle"></i>
                </div>
            <div>
                {this.state.show ? this.formDisplay() : null}
            </div>
            <ShowTasks />
     </div>
        );
}}

export default PendingTasks
        