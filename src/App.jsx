import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './pages/Home'
import Header from './components/Header'
import Footer from './components/Footer'
import Works from './pages/Works'
import Blog from './pages/Blog'
import HireMe from './pages/HireMe'

function App() {

  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/works' element={<Works />} />
        <Route path='/blog' element={<Blog />} />
        <Route path='/hireme' element={<HireMe />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  )
}

export default App
