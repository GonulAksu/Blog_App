import React from 'react';
import ReactDOM from 'react-dom/client';
import {Provider} from 'react-redux';
import './App.css';
import store from './Redux/store.js'
import { addBlog,updateBlog,removeBlog } from './Redux/actions';
import Router from './Router/Router';
import reportWebVitals from './reportWebVitals';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
 <Provider store={store}>
   <Router/>
 </Provider>
);


//şimdi componentleri oluşturacağız ve ordan state üzerine ekleme güncelleme yapacağız redux yapısı ile

// store.subscribe(()=>console.log(store.getState()));
// const blog1=store.dispatch(addBlog({title:"Astronomi",desc:"blabla",dateAdded:Date.now()}));
// const blog2=store.dispatch(addBlog({title:"İlişkiler",desc:"blabla",dateAdded:Date.now()}));
// const blog3=store.dispatch(addBlog({title:"Date",desc:"blabla",dateAdded:Date.now()}));
// store.dispatch(updateBlog(blog1.blog.id,{title:"bogaburcu",desc:"blabla",dateAdded:Date.now()}));
// store.dispatch(removeBlog({id:blog2.blog.id}));
//uygulamada kullanacak olduğumuz state bilgilerini tek bir yerden yönetmek için
//redux kütüphanesini kurmalıyız
//bir state yapısı olacak ancak ona data ekleme silme güncelleme işlemlerini redux üzerinden gerçekleştireceğiz
//şimdi redux'ı componentlerle bağlamak için yani store 'a componentlerde ulşaması için 
//Provider 'ı kullanıcaz

reportWebVitals();
