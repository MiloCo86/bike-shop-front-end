import { Routes, Route } from 'react-router-dom'

//css
import './styles/App.css'

//layout
import NavBar from './layout/NavBar'
import TopBar from './layout/TopBar'
//componentes here
import Home from './components/Home'
import Bikes from './components/Bikes'
import AddBike from './components/AddBike'
import ShowBike from './components/ShowBike'
import EditBike from './components/EditBike'
import About from './components/About'
import ShopCart from './components/ShopCart'




function App() {
 
  return (
    <div className="main__container">
      <NavBar />
      <TopBar />
      <Routes>

        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/shopcart' element={<ShopCart />} />
        <Route path='/bikes' element={<Bikes />} />
        <Route path='/bikes/new' element={<Bikes evaluator={'new'}/>} />
        <Route path='/bikes/used' element={<Bikes evaluator={'used'}/>} />
        <Route path='/bikes/add' element={<AddBike />} />
        <Route path='/bikes/:id' element={<ShowBike />} />
        <Route path='/bikes/:id/edit' element={<EditBike />} />
  
      </Routes>
    </div>
  )
}

export default App
