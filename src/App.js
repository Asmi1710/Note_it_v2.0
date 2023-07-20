import React, {useState, useEffect} from 'react';
import './App.css';
import bootstrap from 'bootstrap';
import Home from './pages/Home';
import Login from './pages/Login';

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
          :login?
            <Home />
            : 
              <Login />
        }
    </div>
  );
}

export default App;
