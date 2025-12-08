import { useState } from 'react'
import Header from '../components/Header/Header'
import Footer from '../components/Footer/footer'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <Header />   {/* <-- This shows your header */}
        <Footer />   {/* <-- This shows your footer */}
      </div>
    </>
  )
}

export default App
