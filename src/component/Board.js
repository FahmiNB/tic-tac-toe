import React from 'react'
import Square from './Square'

export default function Board(props) {
    return (
        <div className='board'>
            <div>
                <Square
                    value={props.Square[0]}
                    onClick={() => props.onClick(0)}
                />
                <Square
                    value={props.Square[1]}
                    onClick={() => props.onClick(1)}
                />
                <Square
                    value={props.Square[2]}
                    onClick={() => props.onClick(2)}
                />
            </div>
            <div>
                <Square
                    value={props.Square[3]}
                    onClick={() => props.onClick(3)}
                />
                <Square
                    value={props.Square[4]}
                    onClick={() => props.onClick(4)}
                />
                <Square
                    value={props.Square[5]}
                    onClick={() => props.onClick(5)}
                />
            </div>
            <div>
                <Square
                    value={props.Square[6]}
                    onClick={() => props.onClick(6)}
                />
                <Square
                    value={props.Square[7]}
                    onClick={() => props.onClick(7)}
                />
                <Square
                    value={props.Square[8]}
                    onClick={() => props.onClick(8)}
                />
            </div>
        </div>
    )
}
