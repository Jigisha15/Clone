import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import Navbar from './components/Navbar/Navbar'
import Footer from './components/Footer/Footer'

import Home from './pages/Home/Home'
import Login from './pages/Login/Login'
import Register from './pages/Register/Register'

import './App.css'

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route
            path="/"
            Component={Home}
          />
          <Route
            path="/login"
            Component={Login}
          />
          <Route
            path="/register"
            Component={Register}
          />
        </Routes>
        <Footer />
      </Router>
    </div>
  )
}

export default App
