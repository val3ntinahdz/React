import { useState } from 'react'
import './App.css'
// import Card from '../react_styles/Card';
import Button from '../components/Button/Button';
// import TailwindText from '../components/Text/TailwindText';


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Button rounded><p>Hola, un botón gris</p></Button> 
      <Button blue><p>Hola, un botón azul</p></Button> 


      {/* <TailwindText /> */}
    </>
    
  )
}

export default App
