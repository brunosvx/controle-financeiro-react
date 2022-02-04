import { TransactionsContext } from '../../../../contexts/Transactions';
import { useContext } from 'react';

export function Income() {

    const { getIncome } = useContext(TransactionsContext);

    return (
        <p id="money-plus" className="money plus">+ R${getIncome().toFixed(2).replace('.',',')}</p>
        )
}