import { useContext } from 'react';

import { TransactionsContext } from '../../../contexts/Transactions';


export function Transaction({ id, name, amount }){

    const { transactions, removeTransaction } = useContext(TransactionsContext);

    return (
        <li className={amount > 0 ? 'plus' : 'minus'} >
            {name} <span>{amount > 0 ? '+' : '-'} ${amount.toFixed(2).replace('.',',').replace('-','')}</span>
            <button className="delete-btn" id={id} onClick={() => removeTransaction(id)}>x</button>
        </li>
    )
}