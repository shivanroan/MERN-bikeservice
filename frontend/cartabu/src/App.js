import React from 'react';
import './App.css';
import Homei from '../src/pages/frontpage'
import ErrorPage from '../src/pages/error'
import Previous from '../src/pages/previousbook'
import {BrowserRouter as Router,Route,Link,Switch,Redirect} from 'react-router-dom'
import ServiceAvailable from '../src/pages/services';
import AdminFront from './pages/adminfront'
import Admin from './pages/form'

class App extends React.Component {
  //I used this file just for the routing purpose
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path='/service' component={ServiceAvailable}/>
          <Route exact path='/admin' component={Admin}/>
          <Route exact path='/adminlog' component={AdminFront}/>
          <Route exact path='/previousbooking' component={Previous}/>
          <Route exact path='/' component={Homei}/>
          <Route exact path='/404' component={ErrorPage}/>
          <Redirect to="/404"/>
        </Switch>
      </Router>
      
      
    );
  }
}

export default App;
