import React, {useState, useEffect} from 'react';
import { Route, Routes } from 'react-router-dom';


import './App.css';
import ProtectedRoute from './hoc/ProtectedRoute';
import Home from './pages/Home';
import Login from './pages/Login';
import Profile from './pages/Profile';

function App() {

  const [login, setLogin] = useState(false);
  const [loader, setLoader] = useState(true);

  useEffect(() => {
    setLoader(false);
  }, [])
  

  return (
    <div className="App">
        {
            loader?
            <div>Loading....</div>
            :
            <>
              {
                login?
                <div>Header</div>
                :<></>
              }
              <Routes >
                <Route path='/' element={ <Login />} />
                <Route path='home' element={<ProtectedRoute element={<Home />}  loginStatus={login} />} />
                <Route path='profile' element={ <ProtectedRoute element={<Profile />} loginStatus={ login } /> } />
              </Routes>
            </>
        }
    </div>
  );
}

export default App;
