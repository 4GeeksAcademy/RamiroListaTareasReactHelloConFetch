import React, {useState} from "react";


//create your first component
const Tareas = () => {
    const [task,setTask]=useState("")
    const [list,setList]=useState([])
    // const [map,setMap]=useState([]) !!!!IMPORTANTE MAP

    function addTask(e) {
        setTask(e.target.value)
        }

    function sumbitTask(e) {
       
            if (e.key === "Enter") {
            setList(list.concat(<li>{task}</li>))
            // setMap(list.map((i)=><li>{i}</li>)) !!!!IMPORTANTE MAP
            setTask("")
        }
    };
    
    
    

   

	return (
		<div className="container">
            <h1 className="mx-auto text-center">TAREAS</h1>
            <div className="mx-auto text-center ">
                <input className="bg-success p-2" onChange={addTask} value={task} onKeyDown={sumbitTask} ></input>
            </div>
            <div className="mx-auto">
                <ul className="mx-auto ">
                    {list}
                </ul>
            </div>
		</div>
	);
};

export default Tareas;
