import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Provider } from 'mobx-react';
import fr_BE from 'antd/lib/locale-provider/fr_BE';

import 'antd/dist/antd.css';

import App from './components/App';
import RootStore from './store/RootStore';
import { LocaleProvider } from 'antd';

const store = RootStore.create({});

(window as any).RootStore = store;

ReactDOM.render(
  <Provider store={store}>
    <LocaleProvider locale={fr_BE}>
      <App />
    </LocaleProvider>
  </Provider>,
  document.getElementById('root'),
);
