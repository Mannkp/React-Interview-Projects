import React, { useCallback, useEffect, useMemo, useState } from 'react'
import "./style.css";

function Square({ value, clickHandler }) {
    return (
        <button onClick={clickHandler}>{value}</button>
    )
}

function Board({ squares, setSquares, winner }) {
    const [turn, setTurn] = useState('X');

    const handleClick = useCallback((buttonIndex) => {
        if (winner || squares[buttonIndex]) return;

        const newSquares = squares.slice();
        newSquares[buttonIndex] = turn;
        turn === 'X' ? setTurn('O') : setTurn('X');
        setSquares(newSquares);
    }, [setSquares, squares, turn, winner]);

    return (
        <div className='board'>
            <div className="row">
                <Square value={squares[0]} clickHandler={() => handleClick(0)} />
                <Square value={squares[1]} clickHandler={() => handleClick(1)} />
                <Square value={squares[2]} clickHandler={() => handleClick(2)} />
            </div>
            <div className="row">
                <Square value={squares[3]} clickHandler={() => handleClick(3)} />
                <Square value={squares[4]} clickHandler={() => handleClick(4)} />
                <Square value={squares[5]} clickHandler={() => handleClick(5)} />
            </div>
            <div className="row">
                <Square value={squares[6]} clickHandler={() => handleClick(6)} />
                <Square value={squares[7]} clickHandler={() => handleClick(7)} />
                <Square value={squares[8]} clickHandler={() => handleClick(8)} />
            </div>
        </div>
    )
}

function TicTacToe() {
    const [squares, setSquares] = useState(Array(9).fill(null));
    const [winner, setWinner] = useState(null);

    const handleReset = () => {
        setWinner(null);
        setSquares(Array(9).fill(null));
    }

    const winningMoves = useMemo(() => [
        [0, 1, 2], [3, 4, 5], [6, 7, 8], [0, 4, 8], [2, 4, 6], [0, 3, 6], [2, 5, 8], [1, 4, 7]
    ], []);

    const calculateWinner = useCallback((squares) => {
        for (let i = 0; i < winningMoves.length; i++) {
            const [a, b, c] = winningMoves[i];
            if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
                return squares[a];
            }
        }
        return null;
    }, [winningMoves]);

    useEffect(() => {
        const winner = calculateWinner(squares);
        if (winner) {
            setWinner(winner);
        }
    }, [calculateWinner, squares, winningMoves]);

    return (
        <section className="TicTacToe">
            <h2>Tic Tac Toe</h2>
            <Board squares={squares} setSquares={setSquares} winner={winner} />
            <button onClick={handleReset}>reset</button>
            <div className="result">
                {winner && <div className="winner">Winner is: {winner}</div>}
                {!winner && squares.every(Boolean) && <div className="draw">It's a draw!</div>}
            </div>
        </section>
    )
}

export default TicTacToe