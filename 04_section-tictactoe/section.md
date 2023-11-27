Section 4: Deep Dive - Tic Tac Toe Game

70. Not All Content Must Go Into Components

71. Close Look: public/ vs assets/ for Image Storage

72. New Project: First Steps Towards Our Tic-Tac-Toe Game
-u komponenti App.jsx kreiramo HTML elemente div, ol, li, span

73. Concept Repetition: Splitting Components & Building Reusable Components
-kreiramo komponentu Player.jsx
-u komponenti Player.jsx, funkciji Player dodajemo parametre destruktuirane props name, symbol
-u komponentu App.jsx importujemo komponentu Player.jsx
-u komponenti App.jsx, komponenti Player dodajemo prop name i symbol

74. Concept Repetition: Working with State
-u komponenti Player.jsx kreiramo const [ isEditing, setIsEditing ] = useState(false)
-kreiramo funkciju handleEditClick()
-button elementu dodajemo dogadaj onClick
-kreiramo varijablu let playerName
-dodajemo uslov if (isEditing)
-u uslov if (isEditing) dodajemo varijablu playerName
-u return izjavu dodajemo varijablu {playerName}

75. Component Instances Work In Isolation!

76. Conditional Content & A Suboptimal Way Of Updating State
-u komponenti Player.jsx, u return izjavi button elementu dodajemo uslov ternarni operator {isEditing ? 'Save' : 'Edit'}
-input elementu dodajemo prop value={name}
-u funkciju handleEditClick(), u funkciju setIsEditing dodajemo uslov ternarni operator (isEditing ? false : true)

77. Best Practice: Updating State Based on Old State Correctly
-u funkciju handleEditClick(), u funkciju setIsEditing() dodajemo anonimnu funkciju

78. User Input & Two-Way-Binding
-u komponenti Player.jsx kreiramo const [ playerName, setPlayerName ] = useState(initialName)
-varijablu let playerName preimenujemo u let editablePlayerName
-kreiramo funkciju handleChange()
-input elementu dodajemo dogadaj onChange
-u dogadaj onChange proslijedujemo funkciju handleChange
-u funkciju handleChange() dodajemo funkciju setPlayerName(event.target.value)

79. Rendering Multi-Dimensional Lists
-kreiramo komponentu GameBoard.jsx
-u komponenti GameBoard.jsx kreiramo niz const initialGameBoard 
-u return izjavu dodajemo metodu initialGameBoard.map()
-dodajemo metodu row.map()
-u komponentu App.jsx importujemo komponentu GameBoard.jsx

80. Best Practice: Updating Object State Immutably
-u komponenti GameBoard.jsx kreiramo const [gameBoard, setGameBoard] = useState(initialGameBoard)
-kreiramo funkciju handleSelectSquare()
-u funkciju handleSelectSquare() dodajemo funkciju setGameBoard()
-u funkciji setGameBoard kreiramo varijablu const updatedBoard
-button elementu dodajemo dogadaj onClick
-u dogadaj onClick proslijedujemo funkciju handleSelectSquare
-u ol elementu umjesto initialGameBoard.map() pisemo gameBoard.map()
-u komponenti App.jsx kreiramo const [activePlayer, setActicePlayer] = useState('X')
-kreiramo funkciju handleSelectSquare()
-u funkciju handleSelectSquare() dodajemo funkciju setActicePlayer()
-u komponenti GameBoard.jsx, funkciji GameBoard dodajemo parametar destruktuirani prop onSelectSquare
-u funkciju handleSelectSquare() dodajemo funkciju onSelectSquare()
-u komponenti App.jsx, u return izjavi komponenti GameBoard dodajemo prop onSelectSqare
-u prop onSelectSquare proslijedujemo funkciju handleSelectSquare
-u komponenti Player.jsx, funkciji Player dodajemo parametar destruktuirani prop isActive
-u return izjavi li elementu dodajemo dinamicku klasu sa varijablom isActive
-u komponenti App.jsx, u return izjavi komponentama Player dodajemo prop isActive
-u komponenti GameBoard.jsx, funkciji GameBoard dodajemo parametar destruktuirani prop activePlayerSymbol
-u komponenti App.jsx, u return izjavi komponenti GameBoard dodajemo prop activePlayerSymbol
-u prop activePlayerSymbol proslijedujemo varijablu activePlayer

82. Avoid Intersecting States!
-kreiramo komponentu Log.jsx
-u komponentu App.jsx importujemo komponentu Log.jsx
-kreiramo const [gameTurns, setGameTurns] = useState([])
-u funkciju handleSelectSquare() dodajemo funkciju setGameTurns

83. Prefer Computed Values & Avoid Unnecessary State Management
-u komponenti App.jsx, u funkciji handleSelectSquare(), u funkciji setGameTurns() kreiramo varijablu const updatedTurns
-u funkciji setGameTurns() kreiramo varijablu let currentPlayer
-dodajemo uslov if

84. Deriving State From Props
-u komponenti App.jsx, u return izjavi komponenti GameBoard dodajemo prop turns
-u prop turns proslijedujemo varijablu gameTurns
-u komponenti GameBoard.jsx, funkciji GameBoard dodajemo parametar destruktuirani prop turns
-kreiramo varijablu let gameBoard
-dodajemo petlju for (const turn of turns)
-u petlju for dodajemo gameBoard[row][col] = player

85. Sharing State Across Components
-u komponenti Log.jsx, funkciji Log dodajemo parametar destruktuirani prop turns
-u return izjavu dodajemo metodu turns.map()
-u komponenti App.jsx, u return izjavi komponenti Log dodajemo prop turns
-u prop turns proslijedujemo varijablu gameTurns

86. Reducing State Management & Identifying Unnecessary State
-u komponenti App.jsx kreiramo funkciju deriveActivePlayer()
-u funkciji App kreiramo varijablu const activePlayer
-u funkciji handleSelectSquare() kreiramo varijablu const currentPlayer

87. Disabling Buttons Conditionally
-u komponenti GameBoard.jsx, button elementu dodajemo prop disabled

88. Outsourcing Data Ino A Seoarate File
-u komponenti App.jsx kreiramo varijablu niz const WINNING_COMBINATIONS
-kreiramo fajl winning-combinations.js
-u komponentu App.jsx importujemo fajl winning-combinations.js

89. Lifting Computed Values Up
-u komponenti App.jsx kreiramo petlju for
-u petlji for kreiramo tri varijable
-u komponenti App.jsx, u return izjavi, komponenti GameBoard dodajemo prop board
-u prop board proslijedujemo varijablu gameBoard
-u komponenti GameBoard.jsx, funkciji GameBoard dodajemo parametar destruktuirani prop board

90. Deriving Computed Values From Other Computed Values
-u komponenti App.jsx u petlju for dodajemo uslov if
-kreiramo varijablu let winner
-u uslov if dodajemo varijablu winner
-u return izjavu, dodajemo {winner && (...)}

91. Tic-Tac-Toe Game: The "Game Over" Screen & Checking for a Draw
-kreiramo komponentu GameOver.jsx
-u komponenti GameOver.jsx, funkciji GameOver dodajemo parametar destruktuirani prop winner
-u komponentu App.jsx importujemo komponentu GameOver.jsx
-u return izjavu komponenti GameOver dodajemo prop winner
-kreiramo varijablu const hasDraw
-dodajemo uslov {(winner || hasDraw) && ...}
-u komponenti GameOver.jsx, u return izjavi dodajemo uslov winner i !winner

92. Why Immutability Matters - Aways !
-u komponenti App.jsx kreiramo funkciju handleRestart()
-u funkciju handleRestart() dodajemo funkciju setGameTurns([])
-u komponenti GameOver.jsx, funkciji GameOver dodajemo parametar destruktuirani prop onRestart
-button elementu dodajemo dogadaj onClick
-u dogadaj onClick proslijedujemo funkciju onRestart
-u komponenti App.jsx, u return izjavi komponenti GameOver dodajemo prop onRestart
-u prop onRestart proslijedujemo vrijednost funkcije handleRestart

93. When NOT to Lift State Up
-u komponenti App.jsx kreiramo const [players, setPlayers] = useState({ ... })
-kreiramo funkciju handlePlayerNameChange() sa parametrim symbol i newName
-u funkciju handlePlayerNameChange() dodajemo funkciju setPlayers
-u funkciji setPlayers() kreiramo anonimnu funkciju sa parametrom prevPlayers

94. An Alternative To Lifting State Up
-u komponenti App.jsx, u return izjavi komponenti Player dodajemo prop onChangeName
-u prop onChangeName proslijedujemo funkciju handlePlayerNameChange
-u komponenti Player.jsx, funkciji Player dodajemo parametar destruktuirani prop onChangeName
-u funkciju handleEditClick dodajemo funkciju onChangeName
-u funkciju handleEditClick dodajemo uslov if (isEditing)

95. Final Polishing & Improving Components
-u komponenti App.jsx kreiramo funkciju deriveWinner() sa parametrima gameBoard i players
-kreiramo varijablu const winner
-kreiramo funkciju deriveGameBoard() sa parametrom gameTurns
-kreiramo varijablu const gameBoard
-kreiramo varijablu const PLAYERS 
