import { useState } from 'react'

import './App.css'
import Player from './components/Player'
import GameBoard from './components/GameBoard'

function App() {
  const [activePlayer, setActivePlayer] = useState("X")
  const [winner, setWinner] = useState(null);
  const [gameOver, setGameOver] = useState(false);
  const [resetGame, setResetGame] = useState(false);

  // Store all game moves
  const [gameTurns, setGameTurns] = useState([]);

  function handleSelectedSquare(rowIndex,colIndex)
  {

    console.log("Current active player:", activePlayer);
    // Add move to game log
    setGameTurns((prevTurns) => [
      ...prevTurns,{player : activePlayer,row:rowIndex +1,col: colIndex+1}
    ])
    // chnage player
    setActivePlayer((curActivePlayer) => curActivePlayer === "X" ? "O" : "X");
  }

  function handleGameOver(result) 
  {
    setWinner(result)
    setGameOver(true)
  }

  function handleRestart()
  {
    setActivePlayer('X')
    setWinner(null)
    setGameOver(false)
    // clear game log
    setGameTurns([]);

    setResetGame((prev) => !prev);
  }


  return (
    <main className='game-page'>
      <div id= "game-container" className='container'>
        <h1 className='game-title'>Tic Tac Toe</h1>

        <ol id='players' className='row list-unstyled'>

          <Player name ="player 1" symbol="X" isActive ={activePlayer === "X" && !gameOver}/>
          <Player name="player 2" symbol="O" isActive={activePlayer === "O" && !gameOver} />
          
        </ol>
        {winner && winner !=="draw" && (
           <div className="alert alert-success text-center game-result">
            <strong>{winner}</strong> wins!
          </div>
        )}
        {winner === 'draw' && (
          <div className="alert alert-warning text-center game-result">
            It's a draw!
          </div>
        )}
        <div className="game-board mt-4">
          <GameBoard onSelectSquare={handleSelectedSquare}  activePlayerSymbol={activePlayer} 
          onGameOver={handleGameOver}  gameOver={gameOver} resetGame={resetGame}/>
        </div>

        <div className="text-center mt-4">
          <button type="button" className="btn btn-primary restart-btn" onClick={handleRestart}>Restart Game</button>
        </div>

        <div className="game-log mt-5">
          <h2>Game Log</h2>
          <ol className="list-group list-group-numbered">
            {
              gameTurns.map((turn,index) =>(
                <li key={index} className="list-group-item game-log-item">
                  Player {turn.player === "X" ? "1" : "2"} selected row {turn.row}, column {turn.col}
                </li>
              ))
            }

          </ol>
        </div>
      </div>
      
    </main>
   
   
  )
}

export default App
