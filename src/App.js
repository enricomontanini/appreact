import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faBars} from '@fortawesome/free-solid-svg-icons'
import {useState} from 'react';

import './App.css';
import Sidebar from './components/Sidebar';
import Dashboard from './views/Dashboard';
import Classifica from './views/Classifica';
import Calendario from './views/Calendario';
import Squadre from './views/Squadre';

function App() {
  const [open, setOpen] = useState(true);

  const handleSidebarClick = () => setOpen(!open);

  return (
    <div id="app">

      <Sidebar 
        isOpen={open}
      />
      
      <div id="main">
        <div id="head">
          <FontAwesomeIcon 
            icon={faBars} 
            size='xl'
            onClick={handleSidebarClick}
          />
        </div>
        <div id="corpo">
          <Dashboard />
          <Classifica />
          <Calendario />
          <Squadre />
        </div>
      </div>
    </div>
  );
}

export default App;
