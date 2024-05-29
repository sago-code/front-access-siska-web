import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom';
import './App.css';
import { Fragment } from 'react';
import { Login } from './Components/modules/Login';
import { MainPage } from './Components/modules/MainPage';
import { Menu } from './Components/modules/Menu';
import { User } from './Components/modules/User';

function ProtectedLayout({ children }) {
  return (
    <div className="containerAll">
      <Menu />
      {children}
    </div>
  );
}


function App() {
  return (
    <Fragment>
      <BrowserRouter>
        <Routes>
          <Route exact path="/login" element={<Login/>}/>
          <Route path="/mainPage" element={
            <ProtectedLayout>
              <MainPage/>
            </ProtectedLayout>  
          }/>
          <Route path="/user" element={
            <ProtectedLayout>
              <User/>
            </ProtectedLayout>  
          }/>
          <Route path="/" element={<Navigate to="/login"/>} />
        </Routes>
      </BrowserRouter>
    </Fragment>
  );
}

export default App;
