import { func } from "prop-types";
import React, { useState, useEffect} from "react";


//create your first component
const Tareas = () => {
    const [task, setTask] = useState("")
    const [list, setList] = useState([])
    const [arr, setArr] = useState([])
    // const [map,setMap]=useState([]) !!!!IMPORTANTE MAP

function Onload () {
    let consulta = prompt(`marque 1 si quiere iniciar sesión o marque 2 si quiere registrarse`) 
    if (consulta==1) {
        var inicio = prompt(`Para iniciar sesión: indique su nombre de usuario`)
        return getArr(inicio)
    } else {
        var nameRegistro = prompt(`Para Registrarse: indique su nombre de usuario`)
        return postRegistrar(nameRegistro)
    }
}


function postRegistrar(name) {
    fetch(`https://playground.4geeks.com/apis/fake/todos/user/RamiroSca`, {
      method: "POST",
      body: [],
      headers: {
        "Content-Type": "application/json"
      }
    })
    .then(resp => {
        console.log(resp.ok); // Será true si la respuesta es exitosa
        console.log(resp.status); // El código de estado 200, 300, 400, etc.
        // console.log(resp.text()); // Intentará devolver el resultado exacto como string
        return resp.json(); // Intentará parsear el resultado a JSON y retornará una promesa donde puedes usar .then para seguir con la lógica
    })
    .then(data => {
        // Aquí es donde debe comenzar tu código después de que finalice la búsqueda
        setList(data); // Esto imprimirá en la consola el objeto exacto recibido del servidor
    })
    .catch(error => {
        // Manejo de errores
        console.log(error);
    });
}

function getArr(name) {
    fetch(`https://playground.4geeks.com/apis/fake/todos/user/${name}`)
    .then(resp => {
        console.log(resp.ok); // Será true si la respuesta es exitosa
        console.log(resp.status); // El código de estado 200, 300, 400, etc.
        // console.log(resp.text()); // Intentará devolver el resultado exacto como string
        return resp.json(); // Intentará parsear el resultado a JSON y retornará una promesa donde puedes usar .then para seguir con la lógica
    })
    .then(data => {
        // Aquí es donde debe comenzar tu código después de que finalice la búsqueda
        setList(data); // Esto imprimirá en la consola el objeto exacto recibido del servidor
    })
    .catch(error => {
        // Manejo de errores
        console.log(error);
    });
}


    function addTask(e) {
        setTask(e.target.value)
    }

    function sumbitTask(e) {

        if (e.key === "Enter") {
            e.preventDefault();
            setList(list.concat({ label:task, done: false }));
            // setList(list.concat({task}))
            // setMap(list.map((i)=><li>{i}</li>)) !!!!IMPORTANTE MAP
            // setList(list.concat(<li>{task}</li>))
            setTask("")
        }
    };

    const removeTask = (index) => {
        setList(list.filter((_, i) => i !== index));
        console.log(index);
    };
    //   boton que va en la li de la task
    //   <button className="btn btn-danger ml-2" onClick={() => removeTask(index)}>
    //   X
    // </button>

useEffect(()=>{
// getArr()
// setArr(prompt(`Nombre de Usuario`))
Onload()
},[])



    return (
        <div className="container">
            <h1 className="mx-auto text-center">TAREAS</h1>
            <div className="mx-auto text-center ">
                <input className="bg-success p-2" onChange={addTask} value={task} onKeyDown={sumbitTask} ></input>
            </div>
            <div className="mx-auto">
                <ul className="mx-auto px-2">
                    {list.map((item, index) => (<li id="oculto" key={index} className="d-flex justify-content-between">{item.label}<button className="btn btn-transparent text-danger ml-5 oculto" onClick={() => removeTask(index)}>
                        X
                    </button></li>))}
                    <li className="tareasPorHacer d-flex">{list.length} tareas por Hacer</li>
                </ul>
            </div>
        </div>
    );
};

export default Tareas;
