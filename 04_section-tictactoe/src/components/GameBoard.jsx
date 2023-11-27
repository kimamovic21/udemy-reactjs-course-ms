const GameBoard = ({ onSelectSquare, board }) => {
  return (
    <ol id="game-board">
        {board.map((row, rowIndex) => {
            console.log(row);
            return (
              <li key={rowIndex}>
                <ol>
                    {row.map((playerSymbol, colIndex) => {
                       console.log(playerSymbol);
                       return (
                         <li key={colIndex}>
                            <button 
                                onClick={() => onSelectSquare(rowIndex, colIndex)} 
                                disabled={playerSymbol !== null}
                            >
                                {playerSymbol}
                            </button>
                        </li>
                       )
                    })}
                </ol>
              </li>
            )
        })}
    </ol>
  );
};

export default GameBoard;