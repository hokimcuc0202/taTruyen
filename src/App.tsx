import React from 'react';
import Header from './components/Header'
import Home from './senses/Home'
import Detail from './senses/Detail'
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        <div className="containter">
          <Switch>
              <Route path="/" component={Home} exact />
              <Route path="/detail" component={Detail} />
              {/* <Route path="/shop" component={Shop} /> */}
          </Switch>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
