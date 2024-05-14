import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom';
import './App.css';
import { Fragment } from 'react';
import { Login } from './Components/modules/Login';
import { MainPage } from './Components/modules/MainPage';
import { Menu } from './Components/modules/Menu';

function ProtectedLayout({ children }) {
  return (
    <div>
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
          <Route path="/" element={<Navigate to="/login"/>} />
        </Routes>
      </BrowserRouter>
    </Fragment>
  );
}

export default App;
