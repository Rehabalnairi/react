import { useState } from 'react';
import Header from '../components/Header/Header';
import Footer from '../components/Footer/footer';
import logo from './img/re.png';

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div>
        <Header />   {/* Header component */}
        
        <img src={logo} alt="Project Logo" className="logo" />   {/* Logo image */}

        <Footer />   {/* Footer component */}
      </div>
    </>
  );
}

export default App;

