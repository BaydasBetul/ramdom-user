import "./App.css";
import Header from "./components/header/Header";
import Card from "./components/cards/Cards";

function App() {
  return (
    <div className="App">
      <Header />
      <div className="main">
        <div className="card-container">
          <Card />
        </div>
      </div>
    </div>
  );
}

export default App;
