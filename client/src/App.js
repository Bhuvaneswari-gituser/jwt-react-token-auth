import {Routes,Route, Navigate} from 'react-router-dom'
import Main from './components/Main';
import Login from './components/Login';
import Signup from './components/Signup';

function App() {
  const user = localStorage.getItem('token')
  return (
    <div>
      <Routes>
        {user && <Route path='/' element={<Main />} />}
        <Route path='/login' element={<Login />} />
        <Route path='/signup' element={<Signup />} />
        <Route path='/' element={<Navigate replace to='/login' />}/>
      </Routes>
    </div>
  );
}

export default App;
