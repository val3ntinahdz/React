import { useState } from 'react'
import Counter from '../components/Counter'

import './App.css'
import { CounterWithEffect } from '../components/CounterWithEffect'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <CounterWithEffect /> 
    </>
    
  )
}

export default App
