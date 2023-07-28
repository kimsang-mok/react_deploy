import './App.css';
import HomePage from './Components/HomePage';
import { Routes, Route } from "react-router-dom"

function App() {
  return (
    <Routes>
      <Route path='/react_deploy' element={<HomePage />} />
    </Routes>
  )
}

export default App;
