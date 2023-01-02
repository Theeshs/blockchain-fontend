import React, { useState } from "react";
import { Button } from "react-bootstrap";
import { MILLISECONDS_PY } from "../config";
import Transaction from "./Trasaction";

const ToggleTransactionDisplay = ({ block }) => {
    const [displayTransaction, setDisplayTransaction] = useState(false)


    const toggleDisplayTransaction = () => {
        setDisplayTransaction(!displayTransaction)
    }

    const { data } = block

    if (displayTransaction) {
        return (
            <div>{
                data.map(transaction => (
                    <div key={transaction.id}>
                        <hr />
                        <Transaction transaction={transaction} />

                    </div>
                ))}

                <br />
                <Button
                    variant="danger"
                    size="sm"
                    onClick={toggleDisplayTransaction}
                >
                    Show More
                </Button>
            </div>

        )
    }

    return (
        <div>
            <br />
            <Button
                variant="danger"
                size="sm"
                onClick={toggleDisplayTransaction}
            >
                Show More
            </Button>
        </div>
    )
}

const Block = ({ block }) => {
    const { timestamp, hash, data } = block;
    const hash_display = `${hash.substring(0, 15)}...`
    const timeStampDisplay = new Date(timestamp / MILLISECONDS_PY).toLocaleDateString();

    return (
        <div className="Block" >
            <div>Hash: {hash_display}</div>
            <div>Time Stamp: {timeStampDisplay}</div>
            <ToggleTransactionDisplay block={block} />
        </div>
    )
}

export default Block