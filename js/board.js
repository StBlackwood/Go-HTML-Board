// js/board.js
export const boardConfig = {
    boardSize: 19,
    stones: Array.from({ length: 19 }, () => Array(19).fill(null)),
    moveHistory: [],
    mode: 'alt',
    lastStone: 'white',
    logicalSize: 0,
    cellSize: 0,
    ctx: null
};

// Initialize canvas context and resize handling
export function initCanvas(canvasElem) {
    boardConfig.ctx = canvasElem.getContext('2d');
    window.addEventListener('resize', resizeCanvas);
    resizeCanvas();
}

// Resize canvas for high-DPI and recalc cell size
export function resizeCanvas() {
    const cssSize = Math.min(window.innerWidth * 0.95, window.innerHeight * 0.8);
    const dpr = window.devicePixelRatio || 1;

    boardConfig.logicalSize = cssSize;
    const canvas = boardConfig.ctx.canvas;
    canvas.style.width  = `${cssSize}px`;
    canvas.style.height = `${cssSize}px`;
    canvas.width  = cssSize * dpr;
    canvas.height = cssSize * dpr;
    boardConfig.ctx.setTransform(dpr, 0, 0, dpr, 0, 0);

    boardConfig.cellSize = cssSize / (boardConfig.boardSize + 1);
    drawGrid();
    drawStars();
    drawAllStones();
}

// Draw the grid lines
export function drawGrid() {
    const { ctx, boardSize, cellSize, logicalSize } = boardConfig;
    ctx.clearRect(0, 0, logicalSize, logicalSize);
    ctx.strokeStyle = '#000';
    for (let i = 1; i <= boardSize; i++) {
        ctx.beginPath();
        ctx.moveTo(i * cellSize, cellSize);
        ctx.lineTo(i * cellSize, boardSize * cellSize);
        ctx.stroke();
        ctx.beginPath();
        ctx.moveTo(cellSize, i * cellSize);
        ctx.lineTo(boardSize * cellSize, i * cellSize);
        ctx.stroke();
    }
}

// Draw hoshi points (star points)
export function drawStars() {
    const { ctx, boardSize, cellSize } = boardConfig;
    const hoshi = boardSize === 19 ? [3, 9, 15] : [Math.floor(boardSize / 2)];
    ctx.fillStyle = '#000';
    hoshi.forEach(i => {
        hoshi.forEach(j => {
            ctx.beginPath();
            ctx.arc((i+1)*cellSize, (j+1)*cellSize, cellSize/10, 0, 2*Math.PI);
            ctx.fill();
        });
    });
}

// Draw a single stone
export function drawStone(x, y, color) {
    const { ctx, cellSize } = boardConfig;
    const cx = (x+1)*cellSize;
    const cy = (y+1)*cellSize;
    const r = cellSize / 2.5;

    ctx.beginPath();
    ctx.arc(cx, cy, r, 0, 2*Math.PI);
    ctx.fillStyle = color === 'black' ? '#000' : '#fff';
    ctx.strokeStyle = '#333';
    ctx.fill();
    ctx.stroke();
}

// Draw move number on stone
export function drawMoveNumber(x, y, num, color) {
    const { ctx, cellSize } = boardConfig;
    const cx = (x+1)*cellSize;
    const cy = (y+1)*cellSize;
    ctx.fillStyle = color === 'black' ? '#fff' : '#000';
    ctx.font = `${cellSize*0.5}px sans-serif`;
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';
    ctx.fillText(num, cx, cy);
}

// Redraw all stones and numbers
export function drawAllStones() {
    boardConfig.moveHistory.forEach((move, idx) => {
        const { x, y, mode } = move;
        const color = boardConfig.stones[y][x];
        drawStone(x, y, color);
        if (mode === 'alt') {
            drawMoveNumber(x, y, idx+1, color);
        }
    });
}