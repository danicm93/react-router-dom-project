import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './page/Home'
import About from './page/About'
import Products from './page/Products'
import { Navbar } from './components/Navbar'

function App() {

  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/products' element={<Products />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
