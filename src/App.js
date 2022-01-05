import { useEffect } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import GlobalStyle from "./GlobalStyles";
import Cartpage from "./Pages/Cartpage/Cartpage";
import HomePage from "./Pages/Homepage/HomePage";
import Category from "./Pages/Category/Category";
import axios from "axios";
import { fetchProducts } from "./Redux";

const fecthData = async () => {
  try {
    const { data } = await axios.get("data.json");
    return data;
  } catch (error) {
    console.log(`error catched: ${error.message}, code: ${error.status}`);
  }
};
function App() {
  const myData = useSelector((state) => state.allProducts);
  const dispatch = useDispatch();
  useEffect(() => {
    // console.log(myData);
    //check redux state before fetching to avoid multiple fetching after moving from link to other
    if (myData.length === 0) {
      const data = fecthData();
      data
        .then((data) => {
          dispatch(fetchProducts(data.products));
        })
        .catch((err) => console.log("useeffect error: " + err));
    }
  }, []);
  return (
    <Router basename="/simple-ecommerce-demo">
      <GlobalStyle />
      <Switch>
        <Route path="/" exact component={HomePage} />
        <Route path="/cart" exact component={Cartpage} />
        <Route path="/monitors" exact component={Category} />
        <Route path="/headphones" exact component={Category} />
        <Route path="/keyboards" exact component={Category} />
      </Switch>
    </Router>
  );
}

export default App;
