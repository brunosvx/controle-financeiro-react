import { useState, useContext } from 'react';

import { TransactionsContext } from '../../../contexts/Transactions';


export function Form() {

    const { addTransaction } = useContext(TransactionsContext);

    const [inputs, setInputs] = useState({});

    function handleInput({ target }){
        const { name, value } = target;
        setInputs({ ...inputs, [name]: value });
    }

    function handleFormSubmit(event){
        event.preventDefault();

        addTransaction(inputs)
    }

    return (
        <form id="form" onSubmit={handleFormSubmit}>
                <div className="form-control">
                <label>Nome</label>
                <input autoFocus type="text" name="transactionName" placeholder="Nome da transação"
                    onChange={handleInput} required/>
                </div>

                <div className="form-control">
                <label>Valor <br />
                    <small>(negativo - despesas, positivo - receitas)</small>
                </label>
                <input type="number" name="transactionAmount" step="0.01" placeholder="Valor da transação"
                    onChange={handleInput} required/>
                </div>

                <button className="btn">Adicionar</button>
            </form>
    )
}