import React from 'react'
import { Route ,Routes } from 'react-router'
// import discription from './src/Discription'
import Discription from './src/discription'
import Home from './src/Home'
import UpdateProduct from './src/UpdateProduct'

const Allroutes = () => {
  return (
    <div>
      <Routes>
      <Route path='/' element={<Home/>}></Route>
      <Route path='/update/:id' element={<UpdateProduct/>}></Route>

       <Route path='/discription/:id' element={<Discription/>}></Route>
      </Routes>
    </div>
  )
}

export default Allroutes
