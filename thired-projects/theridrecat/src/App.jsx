import { useState } from 'react'
import Header from './components/header/header.jsx'
import './App.css'

function App() {
  const [re, reset] = useState(100);

  return (
    <>
      <div>
        <h1>Welcome to Rehab {re}</h1>

        <button onClick={() => reset(re + 1)}>increase</button>

        <Header title="This is Rehab Header" />
      </div>
    </>
  )
}

export default App
