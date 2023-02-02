import './App.css';
import { Route, Routes } from 'react-router-dom';
import RegisterForm from './views/login/components/RegisterForm';
import Navigation from './views/navbar/components/Navigation';
import LoginForm from './views/login/components/LoginForm';
import Products from './views/products/components/Products';

function App() {
  return (
    <div className="App">
      <Navigation />
      <Routes>
        <Route path='/register' element={<RegisterForm />} />
        <Route path='/login' element={<LoginForm />} />
        <Route path='/products' element={<Products />} />
      </Routes>
    </div>
  );
}

export default App;
