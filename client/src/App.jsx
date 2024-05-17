import React,{lazy} from 'react'
import {BrowserRouter as Router,Routes,Route, BrowserRouter} from 'react-router-dom'
import ProtectRoute from './components/auth/ProtectRoute'

//so that all file do not load at wonce without any usecase
const Home =lazy(
  ()=>import("./pages/home")
)

const Login =lazy(
  ()=>import("./pages/Login")
)


const NotFound =lazy(
  ()=>import("./pages/NotFound")
)
const Chat =lazy(
  ()=>import("./pages/Chat")
)

const Groups =lazy(
  ()=>import("./pages/Groups")
)

let user =true;


const App = () => {
  return(
    <BrowserRouter>
      <Routes>

      
        <Route path='/chat/:chatId' element={
        <ProtectRoute user={user}><Chat/></ProtectRoute>}
        />
        <Route path='/groups' element={
        <ProtectRoute user={user}><Groups/></ProtectRoute>

        }/>
        <Route path='/' element={
          <ProtectRoute user={user}><Home/></ProtectRoute>

        }/>
      


        <Route path='/login' element={
          <ProtectRoute user={!user} redirect='/'><Login/></ProtectRoute>
        }/>

        <Route path='*' element={<NotFound/>}/>
   


      </Routes>
    </BrowserRouter>
  )
}

export default App