
import { BrowserRouter } from 'react-router-dom';
import './App.css';
import { Combined } from './components/allCombined/Combined';
import Home from './components/routes/Home';

function App() {
  return (
    <div>
    
     <BrowserRouter>
     <Home/>
     </BrowserRouter>
    </div>
  );
}

export default App;
