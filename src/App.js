
import 'bootstrap/dist/css/bootstrap.min.css'
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom'
import Shop from './pages/shop/Shop';
import Cart from './pages/cart/Cart';
import Navbar from './components/Navbar';
import NotFound from './components/NotFound';

function App() {
  return (
    <div className="App">
      <shopContextProvider>
        <Router>

            <Navbar />

            <Routes>
              <Route path='/' element={<Shop/>} />
              <Route path='/cart' element={<Cart/>} />
              <Route path='*' element={<NotFound/>} />
            </Routes>
        </Router>
      </shopContextProvider>
    </div>
  );
}

export default App;