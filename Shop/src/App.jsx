import Home from "./assets/User/home/Home"
import AuthBook from "./assets/User/login/AuthBook"
import {BrowserRouter,Route,Routes} from 'react-router-dom'
import LoginForm from "./assets/User/login/LoginForm"
import RegisterForm from "./assets/User/login/Register"
import { ToastContainer } from 'react-toastify';
import BrowseBook from "./assets/User/AllBooks.jsx/BrowseBook"
import ProductPage from "./assets/User/AllBooks.jsx/Productpage"
import { CartProvider } from "./assets/User/AllBooks.jsx/Cartcontext"
import CartPage from "./assets/User/AllBooks.jsx/CartPage"
import PlaceOrder from "./assets/User/OrderSection/Placeorder"


function App() {

  return (      
<>
<CartProvider>

    <BrowserRouter>

<Routes>
  

  <Route path="/reg" element={<RegisterForm/>}/>
  <Route path="/login" element={<LoginForm/>}/>
  <Route path="/" element={<Home/>}/>
  <Route path="/auth" element={<AuthBook/>}/>
  <Route path="/browse" element={<BrowseBook/>}/>
  <Route path="/browse/:id" element={<ProductPage />} />
  <Route path="/cart" element={<CartPage />} />
  <Route path="/order" element={<PlaceOrder/>} />


</Routes>
    </BrowserRouter>
    </CartProvider>
    <ToastContainer/>
</>
  )
}

export default App
