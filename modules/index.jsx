import React from 'react';
import { Provider } from 'react-redux'

import { Application } from './sample';
import { store } from './store';

export default function() {
    return <Provider store={store}><Application /></Provider>;
}