

export function Balance({ transactions }) {

    const balance = transactions.reduce((prev, curr) => prev + curr.amount, 0);
    
    return (
        <h1 id="balance" className="balance">R$ {balance.toFixed(2).replace('.',',')}</h1>
    )
}