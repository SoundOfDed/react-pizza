import './scss/app.scss';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import NotFound from './pages/NotFound';
// import Cart from './pages/Cart'
import MainLayout from './layouts/MainLayout';
import { Suspense, lazy } from 'react';

const Cart = lazy(() => import(  /*webpackChunkName: 'Cart'*/ './pages/Cart'));
const FullPizza = lazy(() => import( /*webpackChunkName: 'FullPizza'*/ './pages/FullPizza'));

function App() {

  return (
    <Routes>
      <Route path='/' element={<MainLayout />}>
        <Route path='' element={<Home />} />
        <Route path='*' element={<NotFound />} />
        <Route path='cart' 
        element=
        {<Suspense fallback={<div>Загрузка...</div>}>
          <Cart />
        </Suspense>} />
        <Route path='pizza/:id' 
        element={
        <Suspense fallback={<div>Загрузка...</div>}>
          <FullPizza />
        </Suspense>} />
      </Route>
    </Routes>
  );
}

export default App;
