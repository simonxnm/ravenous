import React from 'react';
import ReactDOM from 'react-dom';

import App from './components/App/App';
import registerServiceWorker from './registerServiceWorker';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
