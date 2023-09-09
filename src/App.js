
import 'bootstrap/dist/css/bootstrap.min.css'
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom'
import Shop from './pages/shop/Shop';
import Cart from './pages/cart/Cart';
import Navbar from './components/Navbar';
import NotFound from './components/NotFound';
import { ShopContextProvider } from './context/shopContext';



function App() {

  
  return (
    <div className="container">
      <ShopContextProvider>
        <Router>

            <Navbar />

            <Routes>
              <Route path='/' element={<Shop/>} />
              <Route path='/cart' element={<Cart/>} />
              <Route path='*' element={<NotFound/>} />
            </Routes>
        </Router>
      </ShopContextProvider>
    </div>
  );
}

export default App;