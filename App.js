import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import NavBar from './Layout/NavBar';
import Home from './Pages/Home';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import AddStudent from './Student/AddStudent';
import EditStudent from './Student/EditStudent';
import ViewStudent from './Student/ViewStudent';
import ViewAll from './Student/VeiwAll';

function App() {
  return (
    <div className="App">
    <Router>
      <NavBar/>
      <Routes>
        <Route exact path="/" element={<Home/>}/>
        <Route exact path="/addStudent" element={<AddStudent/>}/>
        <Route exact path="/editStudent/:htNo" element={<EditStudent/>}/>
        <Route exact path="/viewStudent/:htNo" element={<ViewStudent/>}/>
        <Route exact path="/viewAll" element={<ViewAll/>}/>    
      </Routes>
      
    </Router>
    
    </div>
  );
}

export default App;
