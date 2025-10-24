import "./App.css";
import Navbar from "./Navbar";
import backgroundImage from "./assets/home/large-plant-in-black.png";

function App() {
  return (
    <div
      className="App"
      style={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        minHeight: "100vh",
        minWidth: "100vw",
      }}
    >
      <Navbar />
    </div>
  );
}

export default App;
