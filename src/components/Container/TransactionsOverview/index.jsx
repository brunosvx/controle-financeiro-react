import { Income } from './Income';
import { Expenditure } from './Expenditure';

export function TransactionsOverview(){

    return (
        <div className="inc-exp-container">
                <div>
                <h4>Receitas</h4>
                <Income />
                </div>

                <div>
                <h4>Despesas</h4>
                <Expenditure />
                </div>
            </div>
    )
}