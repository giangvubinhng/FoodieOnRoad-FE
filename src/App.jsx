import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home'
import SearchPage from './pages/SearchPage'
import NavigationBar from './navbar/Navbar';
import Login from './Login/Login';


function App() {
  
  return (
    <div className="App">
      <NavigationBar/>
      {/* <Navbar/> */}
      <Routes>
        <Route path='/' exact element={<Home />} />
        <Route path='/search' exact element={<SearchPage />} />
        <Route path='/login' exact element={<Login />} />
      </Routes>

    </div>

    
  )
}

export default App
