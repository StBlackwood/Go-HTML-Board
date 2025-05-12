// js/main.js
import { initCanvas, resizeCanvas } from './board.js';
import { setMode, undoMove, bindCanvasClick } from './ui.js';
import { populateSelector, saveToLocal, loadFromLocal, deleteLocal, setupFileImport } from './storage.js';

window.addEventListener('DOMContentLoaded', () => {
    // Canvas init
    const canvas = document.getElementById('goBoard');
    initCanvas(canvas);
    bindCanvasClick(canvas);

    // Mode buttons
    document.querySelectorAll('.mode-controls button[data-mode]').forEach(btn => {
        btn.addEventListener('click', () => setMode(btn.dataset.mode));
    });
    setMode('alt');

    // Undo
    document.getElementById('undoBtn').addEventListener('click', undoMove);

    // Storage buttons and import
    populateSelector();
    document.getElementById('saveBtn').addEventListener('click', saveToLocal);
    document.getElementById('loadBtn').addEventListener('click', loadFromLocal);
    document.getElementById('deleteBtn').addEventListener('click', deleteLocal);
    setupFileImport();
});