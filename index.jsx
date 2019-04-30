import React from 'react';
import ReactDOM from 'react-dom';

import Application from './modules';

(function(window) {
    const container = window.document.getElementById('app');
    ReactDOM.render(<Application />, container);
})(window);