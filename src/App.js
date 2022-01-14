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
        <Route exact="true" path="/" element={<Home />} />
        <Route exact="true" path="/calculator" element={<Calculator />} />
        <Route exact="true" path="/quote" element={<Quotes />} />
      </Routes>
    </>
  );
}

export default App;
