import React from 'react';
import { Provider } from 'react-redux'; 
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom'; 
import store from './store/Store';
import ProductList from './components/ProductList/ProductList'; 
import CreateProduct from './components/CreateProduct/CreateProduct'; 
import ProductDetail from './components/ProductDetail/ProductDetail'; 
import Nav from './components/Nav';

const App: React.FC = () => {
  return (
    <Provider store={store}>
      <Router>
        <Nav/>
        <Routes>
          <Route path="/products" element={<ProductList />} />
          <Route path="/create-product" element={<CreateProduct />} />
          <Route path="/products/:id" element={<ProductDetail />} />
        </Routes>
      </Router>
    </Provider>
  );
};

export default App; 
