import { Route, Routes } from 'react-router-dom'
import Navbar from './components/Navbar'

import Home from './views/Home'
import Pokemones from './views/Pokemones'
import NotFound from './views/NotFound'

import 'bootstrap/dist/css/bootstrap.min.css'

const App = () => {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/Pokemones' element={<Pokemones />} />
        <Route path='*' element={<NotFound />} />
      </Routes>
    </div>
  )
}
export default App
