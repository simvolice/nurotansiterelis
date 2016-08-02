import App from './ui/App.jsx';


import React from 'react';
import ReactRouter from 'react-router';
import ReactDOM from 'react-dom';
import { TAPi18n } from 'meteor/tap:i18n';

import NewsItem from './ui/NewsItem';
import News from './ui/News';
import VideoItem from './ui/VideoItem';







const {Router, Route, IndexRoute, browserHistory} = ReactRouter;




Meteor.startup(function() {



    TAPi18n.setLanguage('ru');


    localStorage.setItem('lang', 'ru');

   
  const root = document.createElement('div');
  root.setAttribute('id', 'root');
  document.body.appendChild(root);

  ReactDOM.render((




      <Router history={browserHistory}>
          <Route path="/" component={App}>

              <IndexRoute component={News}/>


              <Route path="/news/:slug" component={NewsItem}/>
              <Route path="/videos" component={VideoItem}/>


          </Route>

      </Router>



    

  ), root);
});
