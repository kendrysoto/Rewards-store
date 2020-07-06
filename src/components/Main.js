import React from 'react';
import { Switch, Route } from "react-router-dom";
import ProductList from './ProductList';
import Points from './Points';
import '../style/Main.css';
import LowestPrice from './LowestPrice';
import HighestPrice from './HighestPrice';
import History from './History';



const Main = () => {
  return (
    <div className="main-box">
      <Switch>
        <Route exact path="/" component={ProductList} />
        <Route exact path="/rewards-store" component={ProductList} />
        <Route path="/Points" component={Points} />
        <Route path="/LowestPrice" component={LowestPrice} />
        <Route path="/HighestPrice" component={HighestPrice} />
        <Route path="/History" component={History} />
      </Switch>
    </div>
  );
};


export default Main;

