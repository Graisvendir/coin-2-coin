import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './style.less';

import { App } from './app/App';

const rootElement = document.getElementById('app');

if (!rootElement) {
    throw new Error('Потерялся элемент с ID === app');
}

const root = createRoot(rootElement);
root.render(
    <StrictMode>
        <App />
    </StrictMode>
);
