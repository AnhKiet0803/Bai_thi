import { Routes, Route } from "react-router-dom";
import './index.css';
import Casio from "./Pages/Casio";

function App() {
  return (
      <div className="App">
        <main>
          <div className="container">
            <Routes>
              <Route path="/" element={<Casio/>} />
            </Routes>  
          </div>
        </main>
      </div>
  );
}

export default App;