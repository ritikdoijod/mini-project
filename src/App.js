import logo from './logo.svg';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './modules/Home';
import PaletteFromImage from './modules/PaletteFromImage';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' exact element={<Home />} />
        <Route path='/palettefromimage' exact element={<PaletteFromImage />} />
      </Routes>
    </div>
  );
}

export default App;
