import React from 'react';
import { Switch, Route } from "react-router-dom";
import Buy from './Buy';
import Points from './Points';
import '../style/Main.css';
import LowestPrice from './LowestPrice';
import HighestPrice from './HighestPrice';
import RedeemedPoint from './RedeemedPoint';


const Main = () => {
  return (
    <div className="main-box">
      <Switch>
        <Route path="/Buy" component={Buy} />
        <Route path="/Points" component={Points} />
        <Route path="/LowestPrice" component={LowestPrice} />
        <Route path="/HighestPrice" component={HighestPrice} />
        <Route path="/RedeemedPoint" component={RedeemedPoint} />
      </Switch>
    </div>
  );
};


export default Main;

