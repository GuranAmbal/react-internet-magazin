
import React from "react";
import axios from "axios"

import { Header } from "./components";
import { Route } from "react-router";
import { Home, Cart } from "./pages";
import { useDispatch } from 'react-redux';
import { setPizzas } from './redux/actions/pizzas'

function App() {
  const dispatch = useDispatch();

  React.useEffect(() => {
    axios.get("http://localhost:3001/pizzas").then(({ data }) => {
      dispatch(setPizzas(data))
      //setPizzas(data.pizzas)
    })

  }, [])
  return (
    <div className="wrapper">
      <Header />
      <div className="content">
        <Route exact path="/" component={Home} />
        <Route exact path="/cart" component={Cart} />
      </div>
    </div>
  );
}
export default App
