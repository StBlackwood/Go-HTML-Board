# Go Board

A lightweight, responsive Go board for modern browsers. Built with plain HTML, CSS and JavaScript (ES modules), it supports:

- **19×19 grid** with crisp, high-DPI rendering  
- **Black / White / Alt** placement modes  
- **Undo** last move  
- **Move numbering** overlay  
- **9-star hoshi points** for orientation  
- **Save & Load** configurations via `localStorage` or JSON import/export  

---

## 🚀 Getting Started

1. **Clone or download** this repository.  
2. Choose your entry point:
    - **Desktop browsers**: open [`index.html`](index.html)  
      (modular ES-modules, best served via HTTP or local web server)
    - **Mobile & tablet browsers**: open [`single_file_mobile.html`](single_file_mobile.html)  
      (all-in-one, no module imports—works over `file://`)
---

## ⚙️ Usage

1. **Mode Selection**  
   - **Black** — place a black stone  
   - **White** — place a white stone  
   - **Alt** — alternate automatically  
2. **Click** on board intersections to place stones.  
3. **Undo** removes the most recent stone.  
4. **Save** — enter a name to store the current board in browser storage.  
5. **Load** — pick a saved configuration to restore.  
6. **Delete** — remove a named configuration.  
7. **Export/Import** — use the hidden file picker to download or load a JSON file of the board state.

---

## 🛠️ Development

- **Drawing & Canvas**: `js/board.js`  
- **UI Logic & Events**: `js/ui.js`  
- **Persistence**: `js/storage.js`  
- **Initialization**: `js/main.js`  
- **Styles**: `css/styles.css`

**Customization Tips**  
- Change the `boardSize` constant in `js/board.js` for different dimensions (e.g., 13×13).  
- Implement SGF export in `js/storage.js`.  
- Add pinch-zoom or drag gestures in `js/ui.js`.  

---

## 🤝 Contributing

1. Fork the repository.  
2. Create a feature branch:
   ```
   git checkout -b feature/your-feature

3. Commit your changes:

   ```bash
   git commit -m "Add awesome feature"
   ```
4. Push and open a Pull Request.

*Please keep code modular and well-documented.*

---

## 📄 License

This project is licensed under the MIT License. See [Licence.md](Licence.md) for details.

```
```
