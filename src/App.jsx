import React, { Suspense } from "react";
import "./App.css";
import { Switch, Route } from "react-router-dom";
import NavBar from "./components/NavBar/Navbar";
import Loader from "./components/Loader/Loader";
import LiveScores from "./components/LiveScores/LiveScores";
import Schedule from "./components/Schedule/Schedule";

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
        <Route path="/schedule" exact>
          <Schedule />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
