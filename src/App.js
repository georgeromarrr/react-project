import { Routes, Route } from 'react-router';
import './styles/index.css'

// pages
import Home from './Pages/Home';

function App() {
  return (
    <>
    <Routes>
      <Route path='/' element={<Home/>}/>
    </Routes>
    </>
  );
}

export default App;
