import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Home from "./routes/Home";
import Detail from "./routes/Detail";



function App() { //line 12: the id will be the variable for Details Page
  return(
    <Router>
      <Switch>
        <Route path ="/movie/:id">
          <Detail/>
        </Route>
        <Route path="/">
          <Home/>
        </Route>
      </Switch>
  </Router>
  );
} //important to have : in :id
export default App; 