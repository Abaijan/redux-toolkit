import { Provider } from 'react-redux';
import './App.css';
import { BrowserRouter, Routes , Route} from 'react-router-dom';
import Navbar from './Components/Navbar';
import store from './Components/Redux/Store'
import Home from './Components/Pages/Home';
import Cart from './Components/Pages/Cart';

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/cart' element={<Cart/>} />
        </Routes>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
