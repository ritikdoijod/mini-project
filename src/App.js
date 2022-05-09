// import logo from './logo.svg';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './modules/Home';
import PaletteFromImage from './modules/PaletteFromImage';
import TrendingPalettes from './modules/TrendingPalettes';
import PaletteFromColors from './modules/PaletteFromColors';
import PaletteInfo from './modules/PaletteInfo';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' exact element={<Home />} />
        <Route path='/palettefromimage' exact element={<PaletteFromImage />} />
        <Route path='/trendingpalettes' exact element={<TrendingPalettes />} />
        <Route path='/palettefromcolors' exact element={<PaletteFromColors />} />
        <Route path='/paletteinfo' exact element={<PaletteInfo />} />
      </Routes>
    </div>
  );
}

export default App;
