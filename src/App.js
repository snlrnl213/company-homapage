import Navbar from "./main/Navbar"
import "./styles.css"
import {
  //npm i react-router-dom@5.3.0
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom"
import Home from "./pages/Home"
import Introduce from "./pages/Introduce"
import Qna from "./pages/Qna"

function App() {
  return (
    <div>
      <Navbar />
      <div className="container">
        <Router>
          <Switch>
            <Route path="/qna">
              <Qna />
            </Route>
            <Route path="/introduce">
              <Introduce />
            </Route>
            <Route path="/">
              <Home />
            </Route>
          </Switch>
        </Router>
      </div>
    </div>
  );
}

export default App;
