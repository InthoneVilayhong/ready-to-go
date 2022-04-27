import Board from "./Board";
import "./App.css";

function App() {
    return (
        <div>
            <div className="header">
                <i class="fa-solid fa-rocket rocket"></i>
                <h1>React Counter</h1>
            </div>

            <div className="container">
                <Board />
            </div>
        </div>
    );
}

export default App;
