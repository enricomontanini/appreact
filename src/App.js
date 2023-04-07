import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faBars} from '@fortawesome/free-solid-svg-icons'
import {useState} from 'react';

import './App.css';
import Sidebar from './components/Sidebar';

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
          /> { open ? 'aperto' : 'chiuso'}
        </div>
        <div id="corpo">corpo</div>
      </div>
    </div>
  );
}

export default App;
