import React from 'react';
import { render } from 'react-dom';
import RootComponent from './components/RootComponent';

const rootInstance = render(<RootComponent />, document.getElementById('react-wrapper'));

if(module.hot) {
  require('react-hot-loader/Injection').RootInstanceProvider.injectProvider({
    getRootInstances: function () {
      // Help React Hot Loader figure out the root component instances on the page:
      return [rootInstance];
    }
  });
}
