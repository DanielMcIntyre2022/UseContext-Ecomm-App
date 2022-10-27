import './App.css';
import Header from './components/Header';
import Home from './pages/Home';
import Cart from './pages/Cart';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
     <Header />
     <div className='App'>
      <Routes>
        <Route path='/' element={Home()} exact/>
        <Route path='/cart' element={Cart()} />
      </Routes>
     </div>
    </BrowserRouter>
  );
}

export default App;
