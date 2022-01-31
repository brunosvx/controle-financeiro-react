import React from 'react';
import ReactDOM from 'react-dom';

import App from './App';
import { TransactionsContextProvider } from './contexts/Transactions';

ReactDOM.render(
    <TransactionsContextProvider>
        <App />
    </TransactionsContextProvider>,
    document.querySelector('#root'));