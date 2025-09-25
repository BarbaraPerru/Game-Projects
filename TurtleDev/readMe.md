🐍 SnakeDev Game

Un simpatico gioco in stile Snake, dove il serpente mangia icone di linguaggi e strumenti di programmazione! Costruito usando la libreria turtle di Python3.

🎮 Caratteristiche

Controlli semplici tramite frecce direzionali.

Quando il serpente mangia una nuova icona:

Si allunga.

Appare un'etichetta con il nome della tecnologia.

Il gioco termina se:

Il serpente tocca il bordo.

Si morde la coda.

Dopo il "Game Over", puoi:

Premere R per riavviare.

Premere E per uscire.

📁 Struttura del progetto:

snakedev_game/
│
├── images/
│   ├── boot.gif
│   ├── css.gif
│   ├── html.gif
│   ├── java.gif
│   ├── js.gif
│   ├── ... (altri file .gif)
│
├── snakedev.py          
└── README.md  

📦 Funzioni Principali
run_game()

Avvia una nuova sessione del gioco. Imposta la finestra, crea il serpente, genera le icone, gestisce il ciclo di gioco e le collisioni.

game_over()

Mostra un messaggio di "Game Over" e ascolta i tasti R (restart) o E (exit).

restart_game()

Pulisce la schermata (screen.clear()) e fa ripartire il gioco da capo.
