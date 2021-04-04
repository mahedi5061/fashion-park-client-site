import Header from "./Header/Header";
import Home from "./Home/Home";
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import NotFound from "./NotFound/NotFound";
import Deals from "./Deals/Deals";
import { createContext, useState } from "react";
import PrivateRoute from "./PrivateRoute/PrivateRoute";
import Login from "./Login/Login";
import Checkout from "./Checkout/Checkout";
import Admin from "./Admin/Admin";
import Orders from "./Orders/Orders";
export const userContext = createContext();

function App() {
  const [login, setLogin] = useState({});
  return (
    <userContext.Provider value={[login, setLogin]}>

      <div className="App">
        <Router>
          <Header></Header>

          <Switch>
            <Route path="/home" >
              <Home></Home>
            </Route>

            <Route path="/admin">
              <Admin></Admin>
            </Route>
            <Route path="/login">
              <Login></Login>
            </Route>
            <PrivateRoute path="/checkout/:id">
            <Checkout></Checkout>
            </PrivateRoute>

            <PrivateRoute path="/checkout">
            <Checkout></Checkout>
            </PrivateRoute>

            <PrivateRoute path="/orders">
            <Orders></Orders>
            </PrivateRoute>
            
            <Route path="/deals">
              <Deals></Deals>
            </Route>

            <Route exact path="/">
              <Home></Home>
            </Route>

            <Route path="*">
              <NotFound></NotFound>
            </Route>

          </Switch>
        </Router>
      </div>
    </userContext.Provider>
  );
}

export default App;
