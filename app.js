import React from 'react';
import ReactDOM from 'react-dom';
import SeparateVideo from './app/SeparateVideo';
import VideosList from './app/VideosList';
import Main from './app/Main'
import MainPage from './app/MainPage';
import Favorites from './app/Favorites';
import { Router, Route, IndexRoute, Link, hashHistory } from 'react-router'


ReactDOM.render(
    <Router history={hashHistory}>
        <Route path="/" component={MainPage}>
            <IndexRoute component={Main} />
            <Route path="SeparateVideo/:id" component={SeparateVideo} />
            <Route path="VideosList" component={VideosList} />
            <Route path="Favorites" component={Favorites} />
        </Route>
    </Router>
    ,
    document.getElementById('root')
);