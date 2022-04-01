import { Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./components/Home";
import AllBeers from "./components/AllBeers";
import RandomBeer from "./components/RandomBeer";
import NewBeer from "./components/NewBeer";
import OneBeer from "./components/OneBeer";
import NavBar from "./components/NavBar";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route element={<NavBar />}>
          <Route path="/beers">
            <Route index element={<AllBeers />} />
            <Route path="random" element={<RandomBeer />} />
            <Route path="new" element={<NewBeer />} />
            <Route path=":beerId" element={<OneBeer />} />
          </Route>
        </Route>
      </Routes>
    </div>
  );
}

export default App;
