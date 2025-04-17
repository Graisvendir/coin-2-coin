import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router';
import Modal from 'react-modal';
import './style.less';

import { App } from './app/App';

const rootElement = document.getElementById('app');

if (!rootElement) {
    throw new Error('Потерялся элемент с ID === app');
}

Modal.setAppElement(rootElement);

const root = createRoot(rootElement);
root.render(
    <StrictMode>
        <BrowserRouter>
            <App />
        </BrowserRouter>
    </StrictMode>
);
