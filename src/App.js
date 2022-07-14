import Navbar from "./main/Navbar"
import Footer from "./main/Footer"
import "./styles.css"
import {
  //npm i react-router-dom@5.3.0
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom"
import Home from "./routes/Home"
import Introduce from "./routes/Introduce"
import Qna from "./routes/Qna"
import QnaNew from "./routes/QnaNew"


function App() {
  return (
    <div>
      <Router basename={process.env.PUBLIC_URL}>
        <Navbar />
        <div className="container">
          <Switch>
            <Route path="/qna/new">
              <QnaNew />
            </Route>
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
        </div>
          <Footer/>
      </Router>
    </div>
  );
}

export default App;
