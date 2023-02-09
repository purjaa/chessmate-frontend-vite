import React from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from 'react-router-dom';
import {
  LoginPage,
  RegistrationPage,
  LobbyPage,
  ErrorPage,
} from './pages';
import { PrivateRoute } from './utils';

function App() {
  return (
    <div>
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
    </div>
  );
}

export default App;
