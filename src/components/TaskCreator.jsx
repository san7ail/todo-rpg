import React, { useState } from "react";

function TaskCreator() {

    const [tasks, setTasks] = useState ([""]);
    const [newTask, setNewTask] = useState("");

    function handleInputChange(event){
        setNewTask(event.target.value);
    
    }
    
    function addTask(){

        if(newTask.trim() !== ""){
        setTasks(t => [...tasks, newTask]);
        setNewTask("");

        }
    }

    function deleteTask(index){
        const updatedTasks = tasks.filter((_, i) => i !== index)
        setTasks(updatedTasks);
    }

    function moveTaskUp(index){

        if(index > 0){
            const updatedTasks = [...tasks];
            [updatedTasks[index], updatedTasks[index - 1]] =
            [updatedTasks[index - 1], updatedTasks[index]];
            setTasks(updatedTasks);
        }

    }
    
    function moveTaskDown(index){
        if(index < tasks.length - 1){
            const updatedTasks = [...tasks];
            [updatedTasks[index], updatedTasks[index + 1]] =
            [updatedTasks[index + 1], updatedTasks[index]];
            setTasks(updatedTasks);
        }

    }

    return(
    <div className="rpg-todo">
        <h1>RPG To-Do</h1>
        <div>
            <input
            type="text"
            placeholder="Enter a task..."
            value={newTask}
            onChange={handleInputChange}/>
            <button
                className="add-button"
                onClick={addTask}>
                Add task
            </button>
        </div>

        <ol>
            {tasks.map((task,index) => 
            <li key={index}>
                <span className="text">{task}</span>
                <button
                    className="delete-button"
                    onClick={() => deleteTask(index)}>
                    Delete task
                    </button>
                    <button
                    className="move-up-button"
                    onClick={() => moveTaskUp(index)}>
                    Up
                    </button> 
                    <button
                    className="move-down-button"
                    onClick={() => moveTaskDown(index)}>
                    Down
                    </button> 
            </li>
        )}
        </ol>

    </div>)
};

export default TaskCreator;







{/* const TaskCreator = ({ onAddTask }) => {
    const [taskName, setTaskName] = useState (""); //state to track the input

    const handleInputChange = (event) => {
        setTaskName(event.target.value); //updates state with input value
    };

    const handleAddTask = () => {
        if (taskName.trim() === "") return; //prevents adding empty tasks
    
        onAddTask(taskName); //sends new task to parent component (whatever it means?)
        setTaskName(""); //clears the input after adding a task
    };

    return (
        <div>
            <input
                type="text"
                placeholder="Enter a task..."
                value={taskName}
                onChange={handleInputChange}
                />
                <button onClick={handleAddTask}>Add Task</button>
                </div>
            
    );

};

*/}

