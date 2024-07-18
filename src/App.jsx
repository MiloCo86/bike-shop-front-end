import { Routes, Route } from 'react-router-dom'

//css
import './styles/App.css'

//layout
import NavBar from './layout/NavBar'
import TopBar from './layout/TopBar'
//componentes here
import Home from './components/Home'




function App() {
 
  return (
    <div className="main__container">
      <NavBar />
      <TopBar />
      <Routes>

        <Route path='/' element={<Home />} />
        {/* <Route path='/bikes' element={<NewBike />} />
        <Route path='/bikes/new' element={<NewBike />} />
        <Route path='/bikes/:idx' element={<ShowBike />} />
        <Route path='/bikes/:idx/edit' element={<EditBike />} />
        <Route path='/usedBikes' element={<UsedBikes />} /> */}

      </Routes>
    </div>
  )
}

export default App
