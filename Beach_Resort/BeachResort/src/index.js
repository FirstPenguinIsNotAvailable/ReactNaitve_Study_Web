/**
 * @format
 */

import { AppRegistry } from 'react-native';

/**
* 
@topic
    SPA
@ref 
    https://www.huskyhoochu.com/what-is-spa/
    http://devstory.ibksplatform.com/2017/08/spasigle-page-applications.html
    https://m.mkexdev.net/374

@topic 
    react-router-dom
@ref 
    https://velog.io/@soryeongk/ReactRouterDomV6
    https://goddaehee.tistory.com/305
    https://velog.io/@velopert/react-router-v6-tutorial#7-%EC%A0%95%EB%A6%AC

@topic
    route vs link
@ref
    https://dirask.com/posts/React-route-and-link-difference-jMmRkj 
*/

import { BrowserRouter as Router } from 'react-router-dom';
import App from './App';
import ReactDOM from 'react-dom/client';
import { Provider as RoomProvider } from './context/RoomContext';

AppRegistry.registerComponent('App', () => App);

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
    <RoomProvider>
        <Router>
            <App />
        </Router>      
    </RoomProvider>
);
