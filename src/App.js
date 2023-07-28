import './App.css';
import HomePage from './Components/HomePage';
import { Routes, Route } from "react-router-dom"
import Test from './Components/Test';

function App() {
  return (
    <Routes>
      <Route path='/react_deploy' element={<HomePage />} />
      <Route path='/test' element={<Test />} />
    </Routes>
  )
}

export default App;
