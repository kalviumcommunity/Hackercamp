import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Sample from './components/sample'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <Sample/>
    </div>
  )
}

export default App
