import App from './ui/App.jsx';


import React from 'react';
import ReactRouter from 'react-router';
import ReactDOM from 'react-dom';
import { TAPi18n } from 'meteor/tap:i18n';

import NewsItem from './ui/NewsItem';
import News from './ui/News';
const {Router, Route, IndexRoute, browserHistory} = ReactRouter;




Meteor.startup(function() {

    UPLOADCARE_PUBLIC_KEY = 'f2ffd038e7774979768e';

    TAPi18n.setLanguage('ru');

   
  const root = document.createElement('div');
  root.setAttribute('id', 'root');
  document.body.appendChild(root);

  ReactDOM.render((




      <Router history={browserHistory}>
          <Route path="/" component={App}>
              <IndexRoute component={News}/>





                  <Route path="/:slug" component={NewsItem}/>





             
             
          </Route>

      </Router>



    

  ), root);
});
