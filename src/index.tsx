import ReactDOM from 'react-dom';
import App from './components/App/App';
import StylesConfig from './config/StylesConfig';
import { Provider } from 'react-redux';
import store from './redux/store';


ReactDOM.render( 
  <Provider store={store}>
    <App />
    <StylesConfig />
  </Provider>,
  document.getElementById("root")
);