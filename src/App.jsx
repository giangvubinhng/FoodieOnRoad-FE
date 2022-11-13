import { Routes, Route } from 'react-router-dom';
import { useEffect } from 'react'
import Home from './pages/Home'
import SearchPage from './pages/SearchPage'
import NavigationBar from './navbar/Navbar';
import Login from './Login/Login';
import InputForm from './InputForm/InputForm'
import { useUserStore } from './app/store'


function App() {
  const fetchUser = useUserStore((state) => state.fetchUser)
  const currentUser = useUserStore((state) => state.user)
  useEffect(() => {
    fetchUser()
  }, [])
  return (
    <div className="App">
      <NavigationBar />
      <Routes>
        <Route path='/' exact element={<Home />} />
        <Route path='/search' exact element={<SearchPage />} />
        {currentUser?.isLoggedIn ? <Route path='/create-event' exact element={<InputForm />} /> : null}
      </Routes>

    </div>


  )
}

export default App
