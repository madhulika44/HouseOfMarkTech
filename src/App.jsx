import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';
import Hero from './components/Hero';
import Services from './components/Services';
import Pricing from './components/Pricing';
import ApiIntegration from './components/ApiIntegration';
import Contact from './components/Contact';


function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Hero />
      <Services/>
      <Pricing/>
      <ApiIntegration/>
      <Contact/>
    </>
  );
}

export default App;
