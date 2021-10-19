import "./App.css";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Counter from "./components/counter/Counter";
import MainNavbar from "./components/navbar/Navbar";
import Shop from  './components/shop/products/Shop'
import Home from "./components/home/Home";
import ProductDeatils from "./components/shop/productDetails/ProductDeatils";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <MainNavbar />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route  path="/counter">
            <Counter />
          </Route>
          <Route exact path="/shop">
            <Shop />
          </Route>

          <Route exact path="/shop/:id">
            <ProductDeatils />
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
