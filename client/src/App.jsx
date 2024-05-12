import React,{lazy} from 'react'
import {BrowserRouter as Router,Routes,Route, BrowserRouter} from 'react-router-dom'

//so that all file do not load at wonce without any usecase
const Home =lazy(
  ()=>import("./pages/home")
)

const Login =lazy(
  ()=>import("./pages/Login")
)

const Chat =lazy(
  ()=>import("./pages/Chat")
)

const Groups =lazy(
  ()=>import("./pages/Groups")
)


const App = () => {
  return(
    <BrowserRouter>
      <Routes>

        <Route path='/' element={<Home/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/chat/:id' element={<Chat/>}/>
        <Route path='/groups' element={<Groups/>}/>


      </Routes>
    </BrowserRouter>
  )
}

export default App