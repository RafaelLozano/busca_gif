import "./App.css";
import Home from "./components/Home/Home";
import { GifsContextProvider } from "./context/GifsContext";

function App() {
  return (
    <GifsContextProvider>
      <div className="app">
        <Home />
      </div>
    </GifsContextProvider>
  );
}

export default App;
