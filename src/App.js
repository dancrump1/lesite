import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch, } from 'react-router-dom';
import Landing from "./pages/Landing";
import P1 from "./pages/P1";
import PB from "./pages/PB";
import CodingP from "./pages/Coding";
import Admin from "./pages/Admin";
import NoMatch from "./pages/NoMatch";

class App extends Component {


  render() {

    return (
<Router>
  <Switch>

    <Route 
      exact path="/"
      component={Landing} />}
    />

    <Route
      exact path="/YTTW"
      component={P1} />}
    />
    
    <Route 
      exact path="/paintball" 
      component={PB}
    />

<Route 
      exact path="/code" 
      component={CodingP}
    />

    <Route 
      exact path="/admin" 
      component={Admin}
    />

    <Route
      component={NoMatch}
    />

  </Switch>
</Router>
    )
  }
}

export default App;
