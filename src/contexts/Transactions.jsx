import { createContext, useState, useEffect } from 'react';

export const TransactionsContext = createContext({});

export function TransactionsContextProvider({ children }) {

    const [transactions, setTransactions] = useState([]);

    useEffect(() => {
        setTransactions(JSON.parse(localStorage.getItem('Transactions')) || []);
    }, [])

    function getExpenditure() {
        return transactions.filter(transaction => transaction.amount < 0).reduce((prev, curr) => prev + curr.amount, 0);
    }

    function getIncome() {
        return transactions.filter(transaction => transaction.amount > 0).reduce((prev, curr) => prev + curr.amount, 0);
    }

    function removeTransaction(transactionId){
        const updatedTransactions = transactions.filter(({ id }) => id !== transactionId );
        setTransactions(updatedTransactions);
        localStorage.setItem('Transactions', JSON.stringify(updatedTransactions));
    }

    function addTransaction({ transactionName, transactionAmount }) {
        const newTransaction = { id: Date.now(), name: transactionName , amount: Number(transactionAmount) };

        setTransactions([...transactions, newTransaction])
        localStorage.setItem('Transactions', JSON.stringify([...transactions, newTransaction]))
    }

    function getBalance(){
        return transactions.reduce((prev, curr) => prev + curr.amount, 0);
    }

    return (
        <TransactionsContext.Provider value={{
            transactions,
            getExpenditure,
            getIncome,
            removeTransaction,
            addTransaction,
            getBalance
            }}>
            {children}
        </TransactionsContext.Provider>
    )
}