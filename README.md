Go Board

A simple, modular browser-based Go board implementation using HTML5 Canvas, ES modules, and LocalStorage.

Features

Responsive, full-screen Go board (19×19) with high-DPI support

Black, White, and Alt modes for stone placement

9-star hoshi points for easy orientation

Move numbering ledger on stones

Undo last move

Save/load board configurations to LocalStorage

Import/export JSON board state files

Modular code structure (HTML, CSS, JS modules)

Project Structure

go-board/
├── index.html           # Minimal HTML linking CSS & JS modules
├── css/
│   └── styles.css       # All visual styling rules
├── js/
│   ├── board.js         # Canvas setup & drawing logic
│   ├── ui.js            # Mode control, undo, click handling
│   ├── storage.js       # LocalStorage & file import/export
│   └── main.js          # App initialization & event binding
└── assets/
└── gofav-icon.png   # Favicon asset

Getting Started

Clone or download this repository:

git clone https://github.com/yourusername/go-board.git
cd go-board

Serve the files with any static web server. For example, using http-server:

npm install -g http-server
http-server .

Open your browser and navigate to http://localhost:8080 (or the port shown).

Play with the board:

Click Black, White, or Alt to choose placement mode

Click intersections to place stones

Use Undo to remove the last move

Save and Load board states via LocalStorage

Export to a JSON file or Import one via the hidden file input

Customization

Change boardSize in js/board.js to support different dimensions (e.g., 13×13)

Modify CSS in css/styles.css for color, spacing, or layout tweaks

Extend storage.js to integrate cloud or server-side persistence

Contributing

Fork the repository

Create a feature branch (git checkout -b feature/YourFeature)

Commit your changes (git commit -am 'Add feature')

Push to the branch (git push origin feature/YourFeature)

Open a Pull Request