

export function Income({ incomes }) {
    return (
        <p id="money-plus" className="money plus">+ R${incomes.toFixed(2).replace('.',',')}</p>
        )
}