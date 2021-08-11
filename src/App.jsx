import React, { Suspense } from "react";
import "./App.css";
import { Switch, Route } from "react-router-dom";
import NavBar from "./components/NavBar/Navbar";
import Loader from "./components/Loader/Loader";
import LiveScores from "./components/LiveScores/LiveScores";

const Slider = React.lazy(() => import("./components/Slider/Slider"));
function App() {
  return (
    <div className="App">
      <NavBar />
      <Switch>
        <Route path="/" exact>
          <Suspense fallback={<Loader />}>
            <Slider />
          </Suspense>
        </Route>
        <Route path="/live-scores" exact>
          <LiveScores />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
