import React, {useState} from "react";


//create your first component
const Tareas = () => {
    const [task,setTask]=useState("")
    const [list,setList]=useState([])
    const [map,setMap]=useState([])

    function addTask(e) {
        setTask(e.target.value)
        }

    function sumbitTask(e) {
       
            if (e.key === "Enter") {
            setList(list.concat(task))
            setMap(list.map((i)=><li>{i}</li>))
            setTask("")
            
            // setMap(list.map((i)=><li>{i}</li>))
            // list.map(setList(list),`<li>${list}</li></br>`)
            // array.map(function(currentValue, index, arr), thisValue)
        }
            // console.log(task,list)
    };
    
    
    

   

	return (
		<div>
            <h1>TAREAS</h1>
            <div>
                <input onChange={addTask} value={task} onKeyDown={sumbitTask} ></input>
            </div>
            <div>
                <ul>
                    {map}
                </ul>
            </div>
		</div>
	);
};

export default Tareas;
