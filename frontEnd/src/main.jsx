import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';
import { BrowserRouter } from 'react-router-dom';
import { Auth0Provider } from '@auth0/auth0-react';

const domain = import.meta.env.VITE_AUTH0_DOMAIN;
const client = import.meta.env.VITE_AUTH0_CLIENTID;


ReactDOM.createRoot(document.getElementById('root')).render(
    <Auth0Provider
        domain={domain}
        clientId={client}
        authorizationParams={{
            redirect_uri: window.location.origin,
        }}
    >
        <BrowserRouter>
            <App />
        </BrowserRouter>
    </Auth0Provider>
);
