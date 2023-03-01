import image from './assets/logo1.jpg'

import './App.css'

import Boton from './component/Boton'

import Contador from '../src/component/Contador'
import { useState } from 'react'

function App() {
  
  const [numClics, setNumClics] = (useState(0));

  
  const manejarClic = () => {
    setNumClics(numClics + 1)
  
  
  }

  const reiniciarContador = () => {
    setNumClics(0)
  }
  
  


  return (
    <div className="App">
      <div className='logo-contenedor'>
        <img
          className='logo'
          src={image}
          alt='logo'
        />
      </div>
      <div className='contenedor-principal'>
        <Contador
          numeroClic={numClics}
        />

        <Boton
          texto='Clic'
          esBotonDeClic={true}
          manejarClic={manejarClic} 

          />

        <Boton
          texto='Reiniciar'
          esBotonDeClic={false}
          manejarClic={reiniciarContador}
        />  


      </div>
        
    </div>
  )
}

export default App
