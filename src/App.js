
import { BrowserRouter, Route, Router, Routes } from 'react-router-dom';
import './App.css';
import CreateStudent from './CreateStudent';
import Dashboard from './Dashboard';


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/createStu" Component={CreateStudent}></Route>
        <Route path="" Component={Dashboard}></Route>
     </Routes>
        
      
    </BrowserRouter>
  )
}

export default App;
