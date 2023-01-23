import React from 'react'
/* Buena practica -> solo tener un componente por archivo */

export const Flag = () => {
    return (
        <div>
            Hola Mundo soy un componente
        </div>
    )
}

export const Bandera = () => {
    return (
        /* vamos a ocupar React native */
        React.createElement("h4", {}, "Banderitas")
        /* Primero la etiqueta , segundo el estado , tercero la informacion -> tambien puede ser un componente */
    )
}

/* El parametro entre llaves es el nombre de la variable que le mando en App */
const Dish = ({nombre}) => {
    return (
        <div>
            <h1>
               {nombre}
            </h1>
        </div>
    )
}

export default Dish