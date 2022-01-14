import './App.css';
import { Route, Routes } from 'react-router-dom';
import Calculator from './components/Calculator';
import Quotes from './components/Quotes';
import Home from './components/Home';
import Navbar from './components/Navbar';

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/calculator" element={<Calculator />} />
        <Route exact path="/quote" element={<Quotes />} />
      </Routes>
    </>
  );
}

export default App;
