import {Routes, Route, Link} from 'react-router-dom';
import './App.css';
import { Home } from './Components/Home';
import { Category } from './Components/Category';
import { Products } from './Components/Products';
import { Login } from './Components/Login';
import PrivateRoute from './Components/PrivateRoute';
import AdminArea from './Components/AdminArea';
import './styles.css'

function App() {
  return (
    <div className="App">
      <nav className='navbar'>
        <ul className='nav-ul'>
          <li className='nav-li'>
            <Link to ='/' className='link'>Home</Link>
          </li>
          <li className='nav-li'>
            <Link to ='/Category' className='link'>Category</Link>
          </li>
          <li className='nav-li'>
            <Link to ='/Products' className='link'>Products</Link>
          </li>
          <li className='nav-li'>
            <Link to ='/Login' className='link'>Login</Link>
          </li>
        </ul>
      </nav>
      <Routes>
        <Route path = '/' element = {<Home/>} />
        <Route path = '/Category' element = {<Category/>} />
        <Route path = '/Products' element = {<Products/>} />
        <Route path = '/Login' element = {<Login/>} />
      </Routes>
    </div>
  );
}

export default App;
