import { Routes, Route } from "react-router-dom";
import Excuses from "./components/Excuses";
import Lost from "./components/Lost";
import './App.css';
import PageNotFound from "./components/PageNotFound";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Routes>
          <Route path="/" element={<Excuses />} />
          <Route path="/Lost" element={<Lost />} />
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </header>
    </div>
  );
}

export default App;
