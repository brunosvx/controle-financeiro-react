import { Income } from './Income';
import { Expenditure } from './Expenditure';

export function TransactionsOverview({ transactions }){

    const incomes = transactions.filter(transaction => transaction.amount > 0).reduce((prev, curr) => prev + curr.amount, 0);
    const expenditures = transactions.filter(transaction => transaction.amount < 0).reduce((prev, curr) => prev + curr.amount, 0);

    return (
        <div className="inc-exp-container">
                <div>
                <h4>Receitas</h4>
                <Income incomes={incomes} />
                </div>

                <div>
                <h4>Despesas</h4>
                <Expenditure expenditures={expenditures} />
                </div>
            </div>
    )
}