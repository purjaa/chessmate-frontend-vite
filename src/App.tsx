import React from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from 'react-router-dom';
import {
  Header
} from './components';
import {
  LoginPage,
  RegistrationPage,
  LobbyPage,
  ErrorPage,
} from './pages';
import { PrivateRoute } from './utils';

function App() {
  return (
    <>
      <Header />
      <Router basename={'/'}>
        <Routes>
          <Route
            path="/"
            element={
              <PrivateRoute>
                <LobbyPage />
              </PrivateRoute>
            }
          />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegistrationPage />} />
          <Route path="*" element={<ErrorPage />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
