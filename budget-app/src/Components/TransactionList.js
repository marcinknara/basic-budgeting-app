export default function TransactionList(props){
    var transList = props.transactions.map((transaction, idx) => (
        <TransactionListEntry transaction={transaction} key={idx} />
    ));

    return (
        <div>
            <h1>
                Transactions
            </h1>
            <div>
                {transList}
            </div>

        </div>
    )
};