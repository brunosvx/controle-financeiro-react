import { TransactionsContext } from '../../../../contexts/Transactions';
import { useContext } from 'react';

export function Expenditure() {

    const { getExpenditure } = useContext(TransactionsContext);

    return (
        <p id="money-minus" className="money minus">- R${Math.abs(getExpenditure()).toFixed(2).replace('.',',')}</p>
    )
}