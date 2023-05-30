import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';
import { BrowserRouter } from 'react-router-dom';
import { Auth0Provider } from '@auth0/auth0-react';


ReactDOM.createRoot(document.getElementById('root')).render(
    <Auth0Provider
        domain="hacker-camp.jp.auth0.com"
        clientId="x2QfwLOOV9I4s4f62PuL1OSzzN3b5Pdp"
        authorizationParams={{
            redirect_uri: window.location.origin,
        }}
    >
        <BrowserRouter>
            <App />
        </BrowserRouter>
    </Auth0Provider>
);
