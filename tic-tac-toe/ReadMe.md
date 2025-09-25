🕹️ React Tic-Tac-Toe Game

Un semplice ma ben strutturato gioco di Tris (Tic-Tac-Toe) sviluppato con React.js, che include funzionalità come:

-Cambio nome dei giocatori
-Rilevamento automatico del vincitore o pareggio
-Possibilità di giocare nuovamente (rematch)
-Registro dei turni

🛠️ Tecnologie Utilizzate:

-React.js--->Libreria JavaScript per la costruzione di interfacce utente (UI) component-based
-JavaScript (ES6+)--->Linguaggio di programmazione principale per logica e manipolazione dei dati
-JSX--->Estensione di sintassi per JavaScript che permette di scrivere codice simile a HTML all'interno di React
-CSS--->Stili base per il layout e l'evidenziazione dei componenti attivi
-React Hooks (useState)--->Hook usato per gestire lo stato all’interno dei functional components
-Modular Components--->Architettura basata su componenti riutilizzabili (Player, GameBoard, GameOver, Log)
-Vite--->Strumento per live reloading 

📁 Struttura del Progetto:

📦 src/
├── components/
│   ├── Player.jsx
│   ├── GameBoard.jsx
│   ├── Log.jsx
│   └── GameOver.jsx
├── winning-combination.js
├── App.jsx
├── Index.css
└── index.js


🔧 Funzioni principali nel App.jsx:

-deriveActivePlayer(gameTurn)--->Calcola quale giocatore è attivo in base al turno
-deriveGameBoard(gameTurn)--->Rigenera la griglia da gameTurn
-deriveWinner(gameBoard, players)--->Determina se qualcuno ha vinto
-handleSelectCell(row, cell)--->Gestisce il click su una cella della griglia
-handleRemach()--->Reimposta lo stato per una nuova partita
-handleEditPlayerName(symbol, newName)--->Cambia il nome di un giocatore