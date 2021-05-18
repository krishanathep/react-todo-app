import { HashRouter, Switch, Route } from "react-router-dom";
import NavBar from './components/NavBar'
import Home from "./pages/Home";
import About from "./pages/About";
import Courses from "./pages/Courses";
import Products from "./pages/Products";

const App = () => {
  return (
    <div>
      <HashRouter basename="/">
      <NavBar/>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/about"><About/></Route>
        <Route path="/courses">
          <Courses />
        </Route>
        <Route path="/products">
          <Products />
        </Route>
      </Switch>
    </HashRouter>
    </div>
  );
};

export default App;
