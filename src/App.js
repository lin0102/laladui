import React, { Component } from 'react';
import {
    BrowserRouter as Router,
    Route
} from 'react-router-dom';

import Home from './pages/Home'
import Detail from './pages/Detail'


class App extends Component {
    render() {
        return (
            <Router>
                <Route exact path="/" component={Home} />
                <Route path="/detail" component={Detail} />
            </Router>

        );
    }
}

export default App;
