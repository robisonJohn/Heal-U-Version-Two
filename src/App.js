// MAIN IMPORTS
import './App.css';
import axios from 'axios';

// COMPONENT IMPORTS
import Navbar from './components/Navbar/Navbar.jsx';
import Header from './components/Header/Header.jsx';
import ParticlesWrapper from "./components/Particles/ParticlesWrapper.jsx";
import Feeling from "./components/Feeling/Feeling.jsx";
import About from "./components/About/About.jsx";
import Form from "./components/Form.jsx";
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
    
    <div className="App">

      <Route path="/">
        <Navbar />
      </Route>

      <Route path="/home">
        <main>
          <Header />
        </main>
      </Route>

      <Route path="/visualize">
        <BarChart />
      </Route>

      <Route path="/old">
        <main id="table-grid">
          <Table responsive="lg" striped bordered hover variant="dark" id="feelings-table">
              <thead>
                  <tr>
                  <th>Love</th>
                  <th>Peace</th>
                  <th>Pride</th>
                  <th>Joy</th>
                  <th>Intrigue</th>
                  <th>Trust</th>
                  <th>Comfort</th>
                  <th>Safety</th>
                  <th>Relationships</th>
                  <th>Confidence</th>
                  <th>Actualization</th>
                  <th>Reason</th>
                  <th>Date</th>
                  </tr>
              </thead>
              {feelings.map((feeling) => (
                <Feeling key={feeling.id} feeling={feeling} setToggleFetch = {setToggleFetch} />
              ))}
              
          </Table> 
        </main>

      </Route>

      <Route path="/new">
        <Form setToggleFetch={setToggleFetch}/>
      </Route>

      <Route path="/about">
        <About />
      </Route>



      
    </div>
  );
}

export default App;
