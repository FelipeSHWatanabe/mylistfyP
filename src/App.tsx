import './App.css';
import Create from './components/create';
import Update from './components/update';
import { BrowserRouter as Router, Navigate, Route, Routes } from 'react-router-dom'


function App() {
  return (
    <Router>
      <div className = "main">
      <Routes>
          <Route path='/create' element={<Create/>} />
          <Route path='/update' element={<Update/>} />
          <Route path='*' element = {<Navigate to = "/create"/>}/>
        </Routes>
      </div>
    </Router>
  );
}

export default App;