import React, { useState, useEffect } from "react";


//create your first component
const Tareas = () => {
    const [task, setTask] = useState("")
    const [list, setList] = useState([])
    // const [inicio, setInicio] = useState("")
    const [inputValue, setInputValue] = useState("");
    // const [nameRegistro, setNameRegistro] = useState("")
    // const [map,setMap]=useState([]) !!!!IMPORTANTE MAP



    // function Onload() {
    //     let consulta = prompt(`marque 1 si quiere iniciar sesión o marque 2 si quiere registrarse`)
    //     if (consulta == 1) {
    //         let userName = prompt(`Para iniciar sesión: indique su nombre de usuario`)
    //         setInicio(userName)
    //         getIniciar(userName)
    //         setNameRegistro(userName)
    //     } else {
    //         let userNameRegistro = prompt(`Para Registrarse: indique su nombre de usuario`)
    //         setNameRegistro(userNameRegistro)
    //         postRegistrar(userNameRegistro)
    //         setInicio(userNameRegistro)

    //     }
    // }

    const onFormSumbit = (event) => {
        event.preventDefault();
        getIniciar(inputValue)
        return(inputValue);
    };


    function postRegistrar(name) {

        fetch(`https://playground.4geeks.com/apis/fake/todos/user/${name}`, {
            method: "POST",
            body: JSON.stringify([]),
            headers: {
                "Content-Type": "application/json"
            }
        })
            .then(resp => {
                console.log(resp.ok); // Será true si la respuesta es exitosa
                console.log(resp.status); // El código de estado 200, 300, 400, etc.
                // console.log(resp.text()); // Intentará devolver el resultado exacto como string
                return resp.json();
            })
            .then(data => {
                // Aquí es donde debe comenzar tu código después de que finalice la búsqueda
                console.log(data);// Esto imprimirá en la consola el objeto exacto recibido del servidor
                getIniciar(name)
            })
            .catch(error => {
                // Manejo de errores
                console.log(error);
            });
    }

    function getIniciar(name) {

        fetch(`https://playground.4geeks.com/apis/fake/todos/user/${name}`)
            .then(resp => {
                console.log(resp.ok); // Será true si la respuesta es exitosa
                console.log(resp.status); // El código de estado 200, 300, 400, etc.
                if (resp.status == 404) {
                    postRegistrar(name)
                    throw new Error("Error en la respuesta del servidor"); // !!Super Importante, sin eso no andaba 
                }
                // console.log(resp.text()); // Intentará devolver el resultado exacto como string
                return resp.json(); // Intentará parsear el resultado a JSON y retornará una promesa donde puedes usar .then para seguir con la lógica
            })
            .then(data => {
                // Aquí es donde debe comenzar tu código después de que finalice la búsqueda
                // setList(data);
                setList(data)
                 // Esto imprimirá en la consola el objeto exacto recibido del servidor

                console.log(data)
                console.log(list);
            })
            .catch(error => {
                // Manejo de errores
                console.log(error);
            });
            
    }

    function putGuardar(array) {
        fetch(`https://playground.4geeks.com/apis/fake/todos/user/${inputValue}`, {
            method: "PUT",
            body: JSON.stringify(array),
            headers: {
                "Content-Type": "application/json"
            }
        })
            .then(resp => {
                console.log(resp.ok); // Será true si la respuesta es exitosa
                console.log(resp.status); // El código de estado 200, 300, 400, etc.
                // console.log(resp.text()); // Intentará devolver el resultado exacto como string
                return resp.json();
            })
            .then(data => {
                // Aquí es donde debe comenzar tu código después de que finalice la búsqueda
                console.log(data); // Esto imprimirá en la consola el objeto exacto recibido del servidor
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
            // setList(list.concat({ label:task, done: false }));
            setList(list.concat({ label: task, done: false }))
            // putGuardar(list)
            // setList(list.concat({task}))
            // setMap(list.map((i)=><li>{i}</li>)) !!!!IMPORTANTE MAP
            // setList(list.concat(<li>{task}</li>))
            setTask("")
            putGuardar(list)
        }
    };

    const removeTask = (index) => {
        setList(list.filter((item, i) => i !== index));
        console.log(index);
        putGuardar(list)
    };

    
    //   boton que va en la li de la task
    //   <button className="btn btn-danger ml-2" onClick={() => removeTask(index)}>
    //   X
    // </button>


    // useEffect(() => {
        
    //     // getArr()
    //     // setArr(prompt(`Nombre de Usuario`))
    //     // Onload()
    //     // postRegistrar("JohnDoe");
    // }, [])



    return (
        <div className="container">
            <div className="">
                {/* <!-- Button trigger modal --> */}
                <button type="button" className="btn degradado m-2 align-middle " data-bs-toggle="modal" data-bs-target="#exampleModal">
                    Iniciar Sesión / Registrarse
                </button>

                {/* <!-- Modal --> */}
                <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                    <div className="modal-dialog">
                        <div className="modal-content">
                            <form onSubmit={onFormSumbit}>
                                <div className="modal-header">
                                    <h1 className="modal-title fs-5" id="exampleModalLabel">Ingrese su nombre de usuario</h1>
                                    <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                </div>
                                <div className="modal-body">
                                    <input type="text" name="name" className="" value={inputValue} onChange={(e) => setInputValue(e.target.value)}></input>
                                    <button type="submit" className="btn btn-primary" data-bs-dismiss="modal">Save changes</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>




                <h1 className="mx-auto text-center align-middle">TAREAS</h1>
            </div>
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

