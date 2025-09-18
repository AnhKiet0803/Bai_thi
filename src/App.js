import { Routes, Route } from "react-router-dom";
import './index.css';
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import ObjectPage from "./Components/Objectspage";
import SubjectsPage from "./Components/Subjectspage";
function App() {
  return (
    
      <div className="App">
        <Header/>
        <main className="main-content">
          <div className="container">
            <ObjectPage/>
            <SubjectsPage/>
          </div>
        </main>
        <Footer/> 
      </div>
  );
}

export default App;