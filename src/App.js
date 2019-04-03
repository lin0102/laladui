import React, { Component } from 'react';
import {
    Router,
    Route
} from 'react-router-dom';
import {createHashHistory} from 'history';

import Home from './pages/Home'
import Detail from './pages/Detail'

const history = createHashHistory();

class App extends Component {
    render() {
        return (
            <Router history={history}>
                <Route exact path="/" component={Home} />
                <Route path="/detail" component={Detail} />
            </Router>

        );
    }
}

export default App;
