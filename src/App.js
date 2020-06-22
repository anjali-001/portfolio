import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import  ContextProvider from './context';
import Home from './pages/Home';
import {Route, Switch} from 'react-router-dom';
import Projects from './pages/Projects';
import Blog from './pages/Blog';

function App() {
  return (
    <div className="App">
      <ContextProvider>
      <Switch>
        <Route path="/" exact component={Home}/>
        <Route path="/projects" exact component={Projects}/>
        <Route path="/blog" exact component={Blog}/>
      </Switch>
      </ContextProvider>
    </div>
  );
}

export default App;
