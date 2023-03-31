import './App.css';
import Sidebar from './components/Sidebar';

function App() {
  return (
    <div id="app">

      <Sidebar />
      
      <div id="main">
        <div id="head">head</div>
        <div id="corpo">corpo</div>
      </div>
    </div>
  );
}

export default App;
