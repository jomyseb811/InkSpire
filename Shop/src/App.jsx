import Home from "./assets/User/home/Home"
import AuthBook from "./assets/User/login/AuthBook"
import {BrowserRouter,Route,Routes} from 'react-router-dom'
import LoginForm from "./assets/User/login/LoginForm"
import RegisterForm from "./assets/User/login/Register"
import { ToastContainer } from 'react-toastify';
import BrowseBook from "./assets/User/AllBooks.jsx/BrowseBook"



function App() {

  return (      
<>
    <BrowserRouter>

<Routes>
  

  <Route path="/" element={<RegisterForm/>}/>
  <Route path="/log" element={<LoginForm/>}/>
  <Route path="/home" element={<Home/>}/>
  <Route path="/auth" element={<AuthBook/>}/>
  <Route path="/browse" element={<BrowseBook/>}/>

</Routes>
    </BrowserRouter>
    <ToastContainer/>
</>
  )
}

export default App
