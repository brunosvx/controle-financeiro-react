import { useContext } from 'react';

import { TransactionsContext } from '../../../contexts/Transactions';


export function Balance() {

    const { getBalance } = useContext(TransactionsContext);
    
    return (
        <h1 id="balance" className="balance">R$ {getBalance().toFixed(2).replace('.',',')}</h1>
    )
}