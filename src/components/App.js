import { BrowserRouter, Routes , Route } from 'react-router-dom';
import '../css/App.css';
import Signin from './Signin';
import Profile from './Profile';
import ProductDetail from './ProductDetail';

function App() {

  const token = localStorage.getItem('id');

  if(!token){
    return <Signin />
  }

  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/profile" element={<Profile />}/>
          <Route path="/" element={<Profile />}/>
          <Route path="/profile/products/:productId" element={<ProductDetail />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
