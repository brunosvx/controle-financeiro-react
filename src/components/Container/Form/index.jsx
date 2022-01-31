import { useState, useContext } from 'react';

import { TransactionsContext } from '../../../contexts/Transactions';


export function Form() {

    const { transactions, setTransactions } = useContext(TransactionsContext);

    const [name, setName] = useState('');
    const [amount, setAmount] = useState(0);

    function addTransaction(event) {
        event.preventDefault();

        const newTransaction = { id: Date.now(), name, amount: Number(amount) };

        setTransactions([...transactions, newTransaction])
        localStorage.setItem('Transactions', JSON.stringify([...transactions, newTransaction]))
    }

    return (
        <form id="form" onSubmit={addTransaction}>
                <div className="form-control">
                <label>Nome</label>
                <input autoFocus type="text" id="text" placeholder="Nome da transação"
                    onChange={e => setName(e.target.value)} required/>
                </div>

                <div className="form-control">
                <label>Valor <br />
                    <small>(negativo - despesas, positivo - receitas)</small>
                </label>
                <input type="number" id="amount" step="0.01" placeholder="Valor da transação"
                    onChange={e => setAmount(e.target.value)} required/>
                </div>

                <button className="btn">Adicionar</button>
            </form>
    )
}