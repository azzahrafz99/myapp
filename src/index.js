import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import ProductList from './components/ProductList';
import registerServiceWorker from './registerServiceWorker';

// ReactDOM.render(<App />, document.getElementById('root'));
ReactDOM.render(
  <ProductList />,
  document.getElementById('content')
);
registerServiceWorker();
