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
            e.preventDefault();
            setList(list.concat([task]));
            // setList(list.concat({task}))
            // setMap(list.map((i)=><li>{i}</li>)) !!!!IMPORTANTE MAP
            // setList(list.concat(<li>{task}</li>))
            setTask("")
        }
    };
    
    // const removeTask = (index) => {
    //     setList(list.filter((_, i) => i !== index));
    //   };
    //   boton que va en la li de la task
    //   <button className="btn btn-danger ml-2" onClick={() => removeTask(index)}>
    //   X
    // </button>
    

   

	return (
		<div className="container">
            <h1 className="mx-auto text-center">TAREAS</h1>
            <div className="mx-auto text-center ">
                <input className="bg-success p-2" onChange={addTask} value={task} onKeyDown={sumbitTask} ></input>
            </div>
            <div className="mx-auto">
                <ul className="mx-auto ">
                    {list.map((item, index) => (<li key={index}>{item}</li>))}
                </ul>
            </div>
		</div>
	);
};

export default Tareas;
