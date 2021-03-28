import React from 'react';
import ReactDOM from 'react-dom';
import { App } from './App';

// ReactDOM.render(<App />, document.getElementById('app'));
ReactDOM.render(
    <React.StrictMode>
        {/*<Router>*/}
        {/*    <Provider store={store}>*/}
                <App/>
            {/*</Provider>*/}
        {/*</Router>*/}
    </React.StrictMode>,
    document.getElementById('app')
);
