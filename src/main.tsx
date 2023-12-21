import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import { AuthProvider } from './components/Autenticacao/AuthContext';

const root = document.getElementById('root');

if (root) {
  ReactDOM.render(
    <BrowserRouter>
      <AuthProvider>
        <React.StrictMode>
          <App />
        </React.StrictMode>
      </AuthProvider>
    </BrowserRouter>,
    root
  );
} else {
  console.error("Element with id 'root' not found in the document.");
}
