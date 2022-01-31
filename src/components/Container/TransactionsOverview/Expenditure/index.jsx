

export function Expenditure({ expenditures }) {
    return (
        <p id="money-minus" className="money minus">- R${Math.abs(expenditures).toFixed(2).replace('.',',')}</p>
    )
}