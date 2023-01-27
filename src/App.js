import './App.css';
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import Reducer from "./components/Reducer";
function App() {
  return (
    <BrowserRouter>
     <Routes>
        <Route path="*" exact element={<Reducer/>} />
     </Routes>
    </BrowserRouter>
  );
}

export default App;
