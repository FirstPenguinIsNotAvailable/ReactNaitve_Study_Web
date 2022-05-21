/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import ReactDOM from 'react-dom/client';

AppRegistry.registerComponent('App', () => App);

const root = ReactDOM.createRoot(document.getElementById('app'));
root.render(<App/>);

