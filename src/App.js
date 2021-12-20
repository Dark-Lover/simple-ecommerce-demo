import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Provider } from "react-redux";
import GlobalStyle from "./GlobalStyles";
import Cart from "./Pages/Cart/Cart";
import HomePage from "./Pages/Homepage/HomePage";
import store from "./Redux/store";
import Category from "./Pages/Category/Category";

function App() {
  return (
    <Router>
      <Provider store={store}>
        <GlobalStyle />
        <Switch>
          <Route path="/" exact component={HomePage} />
          <Route path="/cart" exact component={Cart} />
          <Route path="/monitors" exact component={Category} />
          <Route path="/headphones" exact component={Category} />
          <Route path="/keyboards" exact component={Category} />
        </Switch>
      </Provider>
    </Router>
  );
}

export default App;
