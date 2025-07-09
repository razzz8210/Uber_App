import React, { useContext } from 'react';
import { Route,Routes } from 'react-router-dom';
import Home from './pages/Home';
import UserSignup from './pages/UserSignup';
import UserLogin from './pages/UserLogin';
import CaptainSignup from './pages/CaptainSignup';
import CaptainLogin from './pages/CaptainLogin';
import { UserContext } from './context/UserProvider';
import Start from './pages/Start';
import UserProtectWrapper from './pages/UserProtectWrapper';
import UserLogout from './pages/UserLogout';
import CaptainHome from './pages/CaptainHome';
import CaptainProtectWrapper from './pages/CaptainProtectWrapper';
import CaptainLogout from './pages/CaptainLogout';
import Riding from './components/Riding';

function App() {

  const ans = useContext(UserContext)
  return (
    <div>
      <Routes>
        <Route
        path="/"
        element={<Start />}
      />
      <Route
        path="/signup"
        element={<UserSignup />}
      />     
      <Route
        path="/login"
        element={<UserLogin />}
      />
      <Route
        path="/captain-signup"
        element={<CaptainSignup />}
      />
      <Route
        path="/captain-login"
        element={<CaptainLogin />}
      />
      <Route
        path="/home"
        element={<UserProtectWrapper>
          <Home />
        </UserProtectWrapper>}
      />
      <Route
      path='/riding'
      element={<Riding />}
      />
      <Route
        path="/users/logout"
        element={<UserLogout />}
      />
      <Route
        path="/captain-home"
        element={<CaptainProtectWrapper>
          <CaptainHome />
        </CaptainProtectWrapper>}
      />
      <Route
        path="/captains/logout"
        element={<CaptainLogout />}
      />
      </Routes>


    </div>
  )
}

export default App
