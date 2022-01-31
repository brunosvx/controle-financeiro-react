import { createContext, useState, useEffect } from 'react';

export const TransactionsContext = createContext({});

export function TransactionsContextProvider({ children }) {

    const [transactions, setTransactions] = useState([]);

    useEffect(() => {
        setTransactions(JSON.parse(localStorage.getItem('Transactions')) || []);
    }, [])

    return (
        <TransactionsContext.Provider value={{ transactions, setTransactions }}>
            {children}
        </TransactionsContext.Provider>
    )
}