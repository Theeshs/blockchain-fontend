import React, { useState, useEffect } from "react";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import { API_BASE_URL } from "../config";
import Block from "./Block";

const PAGE_RANGE = 3;

const Blockchain = () => {
    const [bockchain, setBlockchain] = useState([])

    const [blockchainLength, seltblockchainLength] = useState(0);

    const fetchBlockChainRange = ({ start, end }) => {
        fetch(`${API_BASE_URL}/blockchain/range?start=${start}&end=${end}`)
            .then(response => response.json())
            .then(json => setBlockchain(json))
    }

    useEffect(() => {
        fetchBlockChainRange({ start: 0, end: PAGE_RANGE })

        fetch(`${API_BASE_URL}/blockchain/length`)
            .then(response => response.json())
            .then(json => seltblockchainLength(json))
    }, [])

    const buttonNumbers = [];

    for (let i = 0; i < Math.ceil(blockchainLength / PAGE_RANGE); i++) {
        buttonNumbers.push(i)
    }

    return (
        <div className="Blockchain">
            <Link to='/'>Home</Link>
            <hr />
            <h3>Blockchain</h3>
            <div>
                {
                    bockchain.map(block => {
                        return <Block key={block.hash} block={block} />
                    })
                }
            </div>

            <div>
                {
                    buttonNumbers.map(num => {
                        const start = num * PAGE_RANGE;
                        const end = (num + 1) * PAGE_RANGE
                        return (
                            <span key={num} onClick={() => fetchBlockChainRange({ start, end })}>
                                <Button size="sm" variant="danger">{num + 1}</ Button>{' '}
                            </span>
                        )
                    })
                }
            </div>
        </div>
    )

}

export default Blockchain