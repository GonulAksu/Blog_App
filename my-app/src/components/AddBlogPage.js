//artık store'a dispatch etmektense propsa dispatch edicez 
//state manegemant için redux yapsını oluşturmuştuk

import React from 'react';
import {connect} from 'react-redux';
import { addBlog } from '../Redux/actions';
import FormPage from './FormPage';

const AddBlogPage = (props) => {
    console.log(props);//blogu props'a dispatch etmeden önce propsda blogs bilgisi yok
 
    //dispatch edilecek bu props bilgisinide formpage sayfasında inputlardan aldığımız ve 
    //obje olrak state 'e aktardığımız blog bilgileri 

    return (
    <div>
      <h6 className='text-center mt-3'>Add Blog</h6>
      <FormPage onSubmit={(blog)=>{
            props.dispatch(addBlog(blog));
            props.history.push('/blogs');
      }}></FormPage>
    </div>
  )
}


export default connect()(AddBlogPage)
