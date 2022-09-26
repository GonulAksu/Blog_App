import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import HomePage from '../components/HomePage';
import Header from '../components/Header';
import BlogList from '../components/BlogList';
import BlogDetails from '../components/BlogDetails';
import NotFound from '../components/NotFound';

import EditBlogPage from '../components/EditBlogPage';
import AddBlogPage from '../components/AddBlogPage';
const Router = () => {
  return (
    <BrowserRouter>
      <div>
        <Header></Header>
        <Switch>
                    <Route path="/" component={HomePage}exact></Route>
                    <Route path="/blogs" component={BlogList} exact></Route>
                    <Route path="/create" component={AddBlogPage}></Route>
                    <Route path="/edit/:id" component={EditBlogPage}></Route>
                    <Route path="/blogs/:id" component={BlogDetails}></Route>
                    
                    
                   
                    <Route  component={NotFound}></Route>
                </Switch>
      </div>
    </BrowserRouter>
  )
}

export default Router
