import React from 'react';
import './App.css';
import HomePage from './pages/homepage/homepage.component'
import Wishlist from './pages/wishlist/wishlist.component'
import Cart from './pages/cart/cart.component'
import { Route } from 'react-router-dom';
import {Header} from './components/header/header.component'
import AboutUs from './pages/AboutUs/aboutus.component';
import Signup from './components/signup/signup.component'
import {Footer} from './components/footer/footer.components'
import CategoryPage from './pages/category-page/category-page.component'
import FloatingActionButtonZoom from './pages/profile/profile.components'
import Login from './components/login/login.component'
function App() {
  return (
    <div>
      <Header/>
        <Route exact path='/' component={HomePage}/>
        <Route exact path='/cart' component={Cart}/>
        <Route exact path='/aboutus' component={AboutUs}/>
        <Route  path='/profile' component={FloatingActionButtonZoom}/>
        <Route exact path='/wishlist' component={Wishlist}/>
        <Route  path='/signup' component={Signup }/>
        <Route  path='/login' component={Login}/>
        <Route path='/footwear' component={CategoryPage}/>
        <Route path='/women clothing' component={CategoryPage}/>
        <Route path='/men clothing' component={CategoryPage}/>
        <Route path='/grocery' component={CategoryPage}/>
        <Route path='/book' component={CategoryPage}/>
        <Route path='/home and living' component={CategoryPage}/>  
        <Footer/> 
    </div>
  );
}

export default App;