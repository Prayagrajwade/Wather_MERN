import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { WeatherProvider } from './context/waetherContext';
import Home from './pages/Home';
import FavoritesPage from './pages/FavoritesPage';

function App() {
  

  return (
    <>
     <WeatherProvider>
      <Router>
        <div className="container mx-auto p-4">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/favorites" element={<FavoritesPage />} />
          </Routes>
        </div>
      </Router>
    </WeatherProvider>
    </>
  )
}

export default App
