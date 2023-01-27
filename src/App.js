import './App.css';
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Form from  './components/Form';
import CalculateTemps from './components/CalculateTemps';
import { AcademicSessionMgmt } from './components/AcademicSessionMgmt';
import Game from "./components/Game";
import Reducer from "./components/Reducer";
function App() {
  return (
    <BrowserRouter>
     <Routes>
        <Route path="/" exact element={<Reducer/>} />
        <Route path="/game" exact element={<Game/>} />

        <Route path="/checkTemps" exact element={<CalculateTemps/>}/>
        <Route path="/dashboard" exact element={<AcademicSessionMgmt/>} />
        <Route path="*" exact element={<Form/>} />
     </Routes>
    </BrowserRouter>
  );
}

export default App;
