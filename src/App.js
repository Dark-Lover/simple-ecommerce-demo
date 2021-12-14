import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import GlobalStyle from "./GlobalStyles";
import Cart from "./Pages/Cart/Cart";
import HomePage from "./Pages/Homepage/HomePage";

function App() {
  return (
    <Router>
      <GlobalStyle />
      <Switch>
        <Route path="/" exact component={HomePage} />
        <Route path="/cart" exact component={Cart} />
      </Switch>
    </Router>
  );
}

export default App;
