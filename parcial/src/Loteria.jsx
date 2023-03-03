import  React  from "react";
import { useState } from "react";
//import { useState } from "react";

const Loteria = ({nombre,id}) => {

    
    
    let loteria = [
        {
            id: 1,
            nombre: "a"
        },
        {
            id: 2,
            nombre: "aa"
        },
        {
            id: 3,
            nombre: "aaa"
        }
    ]



    console.log(loteria)
    function lista(){
        document.write(loteria.nombre)
    }


    return(
        <>
            <h1>Loteria</h1>
            <input type="text" ></input>
            {/*<label >{lista()}</label>*/}
            
                      
            <h1>numero</h1>
            <input type="number" id="numero"></input>

            <h1>precio</h1>
            <input type="number" id="precio"></input>
            <hr/>
            <button >Add</button>
            <hr/>
            <button>mostrar</button>
        </>
    )

}



export default Loteria;