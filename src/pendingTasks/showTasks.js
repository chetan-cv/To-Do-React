import React, { useState, useEffect } from 'react';
import logo from '../clipboard.svg';
import { firestore, auth } from '../firebase';
import { useCollectionData } from "react-firebase-hooks/firestore";

const ShowTasks = () => {
    // const toDoRef = firestore.collection(`users/${auth.currentUser.uid}/todos`);
    const toDoRef = firestore.collection(`users/todos/list`);

    const todos = useCollectionData(toDoRef, {'idField':'id'});
    const [tasks, setTasks] = useState([]);

    const fetchData = async () => {
        var temp = [];
        // const response = firestore.collection(`users/${auth.currentUser.uid}/todos`);
        const response = firestore.collection(`users/todos/list`);
        const data = await response.get();
        data.docs.forEach((item) => {
            temp.push( {
                id:item.id,
                color: item.data().complete ? 'green': '    black',
                data: item.data()

            });  
        })
        setTasks(temp);
    }
    useEffect(() => {
        fetchData();
    }, [])

    const completeToDo = (id) => {
        // firestore.collection(`users/${auth.currentUser.uid}/todos`).doc(id).set({complete:true},{merge:true});
        firestore.collection(`users/todos/list`).doc(id).set({complete:true},{merge:true});
        fetchData();
        }
        
    const deleteToDo = (id) => { 
        // firestore.collection(`users/${auth.currentUser.uid}/todos`).doc(id).delete(); 
        firestore.collection(`users/todos/list`).doc(id).delete();
        fetchData();
}
        
        
    

    return (
        <div>
             {   
              tasks.length !== 0 ? 
                tasks.map( (item)=>(
                    
                        <div className="task" key={item.id}>
                            <img style={{ padding: '1rem' }} alt="thubmnail" src={logo} height='40px' width='40px' />
                            <card>
                                {item.data.toDo} <span><br />By {item.data.name}, {item.data.deadline}</span>
                            </card>
                            <div>
                                <i style={{ fontSize: '30px', padding: '1rem', cursor: 'pointer', color: item.color}}  onClick={()=>completeToDo(item.id)}className="fa fa-check-square"></i>
                                <i style={{ fontSize: '30px', padding: '1rem', color: 'rgb(224, 15, 0)', cursor: 'pointer' }} onClick={()=>deleteToDo(item.id)} className="fa fa-trash"></i>
                            </div>
                        </div>
                    
                )) : <p style={{textAlign:'center'}}>Well done! no pending task</p>
            } 

        </div>);
}

export default ShowTasks;