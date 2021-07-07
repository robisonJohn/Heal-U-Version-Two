// MAIN IMPORTS
import './App.css';
import axios from 'axios';

// COMPONENT IMPORTS
import Navbar from './components/Navbar/Navbar.jsx';
import Header from './components/Header/Header.jsx';
import ParticlesWrapper from "./components/Particles/ParticlesWrapper.jsx";
import Feeling from "./components/Feeling/Feeling.jsx";
import About from "./components/About/About.jsx";
import Form from "./components/Form/Form.jsx";
import BarChart from './components/BarChart/BarChart.jsx';
// import BarChart from './components/BarChart.jsx';

import { Route } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { baseURL, config } from "./services";

import { Table } from 'react-bootstrap';

function App() {
  const [feelings, setFeelings] = useState([]);
  const [toggleFetch, setToggleFetch] = useState(true);

  useEffect(() => {
    const retrieveFeelings = async () => {
      const resp = await axios.get(baseURL, config);
      setFeelings(resp.data.records);
      console.log(resp.data.records);
      
    }
    retrieveFeelings();
    
  }, [toggleFetch]);

  console.log(feelings);
  return (
    
    <h1>hello there</h1>
  );
}

export default App;
