import './styles/App.css';
import Header from './components/Header';
import Dish, * as D from './components/Dish';
import { useState } from 'react';
import NewPlato from './components/NewPlato';
/* Estoy llamando a todos las clases que estan en dish como D */
/* solo ocupar esto si un componente tiene muchos subcomponentes que necesito */
/* Aqui se importan los componentes */

const plato = { 
  comida:"tacos",
  ingrediente:"carne"
}
const platillos =[
    "Comida",
    "Porotos",
    "Papas"
  ]

  /* Esta es una funcion personalizada */
function contPlatillos(){
  return platillos.length;
}


function App() {
  /* Lo que esta comentado es para trabajar con una variable clonada */
  const[comida/* ,setComida */] = useState(platillos);

  return (
    <div className="App">
    {/* Aqui se utiliza el componente */}
      <Header/>
      {/* Aqui esta el nombre de la variable y lo que le envio es un prompt */}
      <Dish nombre={comida}/>
      <D.Flag/>
      <D.Bandera/>
      Yo como {plato.comida}
      <ul>
        {
          /*Aqui iteramos platillos y cada uno sera un plato que mostraremos en la lista   
          cuiando se itera tira un error , de que falta la key entonces se hace lo siguiente*/
          platillos.map( (plato,index) => (
            /* Importante: colocar la llamada entre llaves*/
            <li key={index}>{plato}</li>
          ))
        }
      </ul>
      {/* Aqui estoy llamando a mi funcion personalizada */}
      <h2>Total de platillos</h2>
      <h3>{contPlatillos()}</h3>
      <br></br>
      <NewPlato/>
    </div>
  );
}

export default App;
