// js/storage.js
import { boardConfig } from './board.js';
import { redrawBoard } from './ui.js';

const PREFIX = 'go_board_';

// Populate the load dropdown from localStorage
export function populateSelector() {
    const sel = document.getElementById('loadSelector');
    sel.innerHTML = '';
    Object.keys(localStorage).forEach(key => {
        if (key.startsWith(PREFIX)) {
            const name = key.slice(PREFIX.length);
            const opt = document.createElement('option');
            opt.value = key;
            opt.textContent = name;
            sel.append(opt);
        }
    });
}

// Save current board state under a name
export function saveToLocal() {
    const name = document.getElementById('saveName').value.trim();
    if (!name) return alert('Enter a name');
    const data = JSON.stringify({
        stones: boardConfig.stones,
        moveHistory: boardConfig.moveHistory,
        boardSize: boardConfig.boardSize
    });
    localStorage.setItem(PREFIX + name, data);
    populateSelector();
    alert('Saved: ' + name);
}

// Load board state from localStorage
export function loadFromLocal() {
    const sel = document.getElementById('loadSelector');
    const key = sel.value;
    if (!key) return;
    const raw = localStorage.getItem(key);
    if (!raw) return;
    try {
        const data = JSON.parse(raw);
        boardConfig.stones = data.stones;
        boardConfig.moveHistory = data.moveHistory;
        redrawBoard();
        alert('Loaded: ' + key.slice(PREFIX.length));
    } catch (e) {
        alert('Invalid data');
    }
}

// Delete a saved configuration
export function deleteLocal() {
    const sel = document.getElementById('loadSelector');
    const key = sel.value;
    if (!key) return;
    if (confirm('Delete ' + key.slice(PREFIX.length) + '?')) {
        localStorage.removeItem(key);
        populateSelector();
    }
}

// Setup import from JSON file via hidden input
export function setupFileImport() {
    const input = document.getElementById('fileInput');
    input.addEventListener('change', e => {
        const file = e.target.files[0];
        if (!file) return;
        const reader = new FileReader();
        reader.onload = () => {
            try {
                const data = JSON.parse(reader.result);
                boardConfig.stones = data.stones;
                boardConfig.moveHistory = data.moveHistory;
                redrawBoard();
            } catch {
                alert('Invalid file');
            }
        };
        reader.readAsText(file);
    });
}