import { Balance } from './Balance';
import { TransactionsOverview } from './TransactionsOverview';
import { Form } from './Form';
import { Transaction } from './Transaction';

import { TransactionsContext } from '../../contexts/Transactions';
import { useContext } from 'react';


export function Container() {

    const { transactions } = useContext(TransactionsContext);

    return(
        <div className="container">
            <h4>Saldo atual</h4>
            
            <Balance />
            
            <TransactionsOverview />

            <h3>Transações</h3>
            
            <ul id="transactions" className="transactions">
                 {transactions.map((props) => {
                     return(
                        <Transaction {...props} key={props.id}/>
                     )
                 })}
            </ul>
            
            <h3>Adicionar transação</h3>
            
            <Form />
            
        </div>
    )
}