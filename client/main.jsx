import App from './ui/App.jsx';


import React from 'react';
import ReactRouter from 'react-router';
import ReactDOM from 'react-dom';

const {Router, Route, IndexRoute, browserHistory} = ReactRouter;




Meteor.startup(function() {

   
   
  const root = document.createElement('div');
  root.setAttribute('id', 'root');
  document.body.appendChild(root);

  ReactDOM.render((

     
              <Router history={browserHistory}>
                  <Route path="/" component={App}>
                    
                   </Route>

              </Router>

         

  ), root);
});
