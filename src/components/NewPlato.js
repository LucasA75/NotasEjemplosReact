import { Fab, TextField } from '@mui/material'
import React from 'react'



const NewPlato = () => {

    
    const addDish = (event) =>{
        console.log("agregar plato")
        /* Esto evita que se actualize la pagina por completo */
        event.preventDefault();
        console.log(this)
    }
    
 
  return (
    <form autoComplete='off' onSubmit={addDish}>
    <TextField 
        label="platillo..."
        type="text"
        margin='normal'
        variant='outlined'
    />
    <Fab color="primary" size='medium'
    className='dish-form-icon' onClick={addDish}>
    +
    </Fab>
    </form>
  )
}

export default NewPlato