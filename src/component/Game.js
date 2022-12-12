import React, { useReducer } from 'react'
import Board from './Board'

const reducer = (state, action) => {
    switch (action.type) {
        case 'JUMP':
            return {
                ...state,
                xIsNext: (action.payload.step % 2) === 0,
                history: state.history.slice(0, action.payload.step + 1),
            };
        case 'MOVE':
            return {
                ...state,
                history: state.history.concat({ Square: action.payload.Square }),
                xIsNext: !state.xIsNext,
            };
        default:
            return state
    }
};

export default function Game() {
    const [state, dispatch] = useReducer(reducer, {
        xIsNext: true,
        history: [{ Square: Array(9).fill(null) }],
    })
    const { xIsNext, history } = state
    const jumpTo = (step) => {
        dispatch({ type: 'JUMP', payload: { step } });
    };
    const handleClick = (i) => {
        const current = history[history.length - 1];
        const Square = current.Square.slice();
        const winner = calculateWinner(Square);
        if (winner || Square[i]) {
            return;
        }
        Square[i] = xIsNext ? 'X' : 'O';
        dispatch({ type: 'MOVE', payload: { Square } });
    };
    const current = history[history.length - 1];
    const winner = calculateWinner(current.Square);

    const status = winner
        ? winner === 'D'
            ? 'Draw'
            : 'Winnder is ' + winner
        : 'Next player is ' + (xIsNext ? 'X' : 'O');

    const moves = history.map((step, move) => {
        const desc = move ? 'Go to move #' + move : 'Go to game start';
        return (
            <li key={move}>
                <button onClick={() => jumpTo(move)}>{desc}</button>
            </li>
        );
    });

    return (
        <div className={winner ? 'game disable' : 'game'}>
            <div className='game-board'>
                <Board onClick={(i) => handleClick(i)} Square={current.Square}></Board>
            </div>
            <div className='game-info'>
                <div>{status}</div>
                <ul>{moves}</ul>
            </div>
        </div>
    )
}
const calculateWinner = (Square) => {
    const winnerLines = [[0, 1, 2], [3, 4, 5], [6, 7, 8], [0, 3, 6], [1, 4, 7], [2, 5, 8], [0, 4, 8], [2, 4, 6]];
    for (let i = 0; i < winnerLines.length; i++) {
        const [a, b, c] = winnerLines[i];
        if (Square[a] && Square[a] === Square[b] && Square[a] === Square[c]) {
            return Square[a];
        }
    }
    if (Square.every((item) => item !== null)) {
        return 'D';
    }
    return null;
}
