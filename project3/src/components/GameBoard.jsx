import { useState,useEffect } from "react";

const startingGameBoard =[
    [null, null, null],
    [null, null, null],
    [null, null, null]
]

function checkWinner(board)
{
    const winningCombinations = [
    // rows
    [[0, 0], [0, 1], [0, 2]],
    [[1, 0], [1, 1], [1, 2]],
    [[2, 0], [2, 1], [2, 2]],

    // columns
    [[0, 0], [1, 0], [2, 0]],
    [[0, 1], [1, 1], [2, 1]],
    [[0, 2], [1, 2], [2, 2]],

    // diagonals
    [[0, 0], [1, 1], [2, 2]],
    [[0, 2], [1, 1], [2, 0]],
  ]


    for(const combination of winningCombinations)
    {
        const [a, b, c] = combination

        const first = board[a[0]][a[1]]
        const second = board[b[0]][b[1]]
        const third = board[c[0]][c[1]]

        if (first && first === second && first === third) 
        {
        return first
        }
    }

    return null
}


function checkDraw(board)
{
  return board.every(row =>row.every(square => square !== null))
}


export default function GameBoard({onSelectSquare, activePlayerSymbol, onGameOver,gameOver,resetGame})
{
    const [gameBoard, setGameBoard] = useState(() => startingGameBoard);

    useEffect(() => {
        console.log("RESET EFFECT:", resetGame);
    setGameBoard(startingGameBoard);}, [resetGame]);

    function handleSelectSquare(rowIndex, colIndex)
    {
        // Don't allow moves after game is over
        if(gameOver)
        {
            return
        }
         // Don't allow selecting an already selected square
        if(gameBoard[rowIndex][colIndex] !== null)
        {
            return
        }
       
        
        // setGameBoard((prevGameBoard) => {
            // const updatedBoard = [...prevGameBoard.map(innerArray => [...innerArray])];
            // prevGameBoard[rowIndex,colIndex] = activePlayerSymbol;
            // return prevGameBoard;

            const updateBoard = gameBoard.map(row => [...row]);
            // Put X or O into the clicked square
            updateBoard[rowIndex][colIndex] = activePlayerSymbol;

            setGameBoard(updateBoard);
            // checking winner
            const winner = checkWinner(updateBoard);

            if(winner)
            {
                onGameOver(winner)
                
                 
            }else if(checkDraw(updateBoard))  // Check draw
            {
                onGameOver("draw")

                
            }else{   // Continue game
                onSelectSquare(rowIndex,colIndex);
            }

            // return updateBoard;

        // });

        // onSelectSquare();
    }

    
    return(
        // <ol id="game-board">{staringGameBoard.map((row) => 
        // <li key={rowIndex}>
        //     <ol>
        //         {row.map((playerSymbol,colIndex) => (
        //         <li key={colIndex}> <button onClick={() => handleSelectSquare(rowIndex,colIndex)}>{playerSymbol}</button></li>))}
        //     </ol>
        // </li>)}</ol>

        <ol id ="game-board"  className="list-unstyled">
            {gameBoard.map((row,rowIndex) => (
                <li  key={rowIndex}>
                    <ol className="list-unstyled d-flex justify-content-center">
                        {row.map((playerSymbol, colIndex) =>(
                        <li key={colIndex} className="m-1"><button type="button"
                         className={`game-square btn btn-outline-dark p-7   ${playerSymbol === "X" ? "square-x" : playerSymbol === "O" ? "square-o" : ""}`} 
                         onClick={() =>handleSelectSquare(rowIndex,colIndex)}
                         disabled = {playerSymbol !==null || gameOver }> 
                         {playerSymbol}</button></li>
                    ))}</ol>

                </li>
            ))}

        </ol>
    );
}