import './App.css';
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Form from  './components/Form';
import CalculateTemps from './components/CalculateTemps';
import { AcademicSessionMgmt } from './components/AcademicSessionMgmt';

function App() {
  return (
    <BrowserRouter>
     <Routes>
       <Route path="/" exact element={<Form/>} />
       <Route path="/checkTemps" exact element={<CalculateTemps/>}/>
       <Route path="/dashboard" exact element={<AcademicSessionMgmt/>} />
     </Routes>
    </BrowserRouter>
  );
}

export default App;
