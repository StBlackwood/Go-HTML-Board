// js/ui.js
import {boardConfig, drawGrid, drawStars, drawAllStones, findLastStone} from './board.js';

// Highlight and set the current mode
export function setMode(newMode) {
    boardConfig.mode = newMode;
    document.querySelectorAll('.mode-controls button').forEach(btn => {
        btn.classList.toggle('selected', btn.dataset.mode === newMode);
    });
}

// Undo last move and redraw
export function undoMove() {
    const last = boardConfig.moveHistory.pop();
    if (last) {
        boardConfig.stones[last.y][last.x] = null;
        redrawBoard();
    }
}

// Handle canvas clicks for placing stones
export function bindCanvasClick(canvasElem) {
    canvasElem.addEventListener('click', e => {
        const rect = canvasElem.getBoundingClientRect();
        const x = Math.round((e.clientX - rect.left) / boardConfig.cellSize - 1);
        const y = Math.round((e.clientY - rect.top) / boardConfig.cellSize - 1);
        if (x < 0 || x >= boardConfig.boardSize || y < 0 || y >= boardConfig.boardSize) return;

        if (boardConfig.mode === 'remove') {
            if (!boardConfig.stones[y][x]) return;
            boardConfig.stones[y][x] = null;
            boardConfig.moveHistory.push({
                x,
                y,
                mode: boardConfig.mode,
                action: 'remove'
            });
            redrawBoard();
            return;
        }

        if (boardConfig.stones[y][x]) return;

        const color = (boardConfig.mode === 'alt')
            ? (boardConfig.lastStone === 'black' ? 'white' : 'black')
            : boardConfig.mode;

        boardConfig.stones[y][x] = color;
        boardConfig.moveHistory.push({
            x,
            y,
            mode: boardConfig.mode,
            color,
            action: boardConfig.mode === "remove" ? "remove" : "place"
        });
        boardConfig.lastStone = color;
        redrawBoard();
    });
}

// Clear and redraw grid, stars, and stones
export function redrawBoard() {
    drawGrid();
    drawStars();
    drawAllStones();
    boardConfig.lastStone = findLastStone();
}