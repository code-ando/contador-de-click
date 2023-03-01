import image from './assets/logo1.jpg'

import './App.css'

import Boton from './component/Boton'

import Contador from '../src/component/Contador'

function App() {
  
  
  const manejarClic = () => {
    console.log('Clic')
  
  
  }

  const reiniciarContador = () => {
    console.log('reiniciar')
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
          numeroClic='5'
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
