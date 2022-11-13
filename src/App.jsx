import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home'
import SearchPage from './pages/SearchPage'
import './App.css'

function App() {

  return (
      <Routes>
        <Route path='/' exact element={<Home />} />
        <Route path='/search' exact element={<SearchPage />} />
      </Routes>
  )
}

export default App
