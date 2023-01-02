import React from "react";

const Transaction = ({ transaction }) => {
    const { input, output } = transaction;

    const recipients = Object.keys(output)

    return (
        <div className="Transaction">
            <div>From: {input.address}</div>
            {
                recipients.map(recip => {
                    return <div key={recip}>
                        To: {recip} | Sent: {output[recip]}
                    </div>
                })
            }
        </div>
    )




}

export default Transaction