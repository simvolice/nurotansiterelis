import App from './ui/App.jsx';


import React from 'react';
import ReactRouter from 'react-router';
import ReactDOM from 'react-dom';
import { TAPi18n } from 'meteor/tap:i18n';

const {Router, Route, IndexRoute, browserHistory} = ReactRouter;




Meteor.startup(function() {



    TAPi18n.setLanguage('ru')
        .done(function () {
            console.log('demo');
        })
        .fail(function (error_message) {
            // Handle the situation
            console.log(error_message);
        });

   
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
