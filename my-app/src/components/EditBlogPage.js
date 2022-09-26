import React from 'react'
import FormPage from './FormPage'
import {connect} from 'react-redux';
import {updateBlog,removeBlog} from '../Redux/actions'

//formpage den gelen inputa aktarılan bilgileri bu sefer edirBlog ve removeBlog actiionlarına yönlendireceğiz
const EditBlogPage = (props) => {
   
  return (
    <div>
       <h6 className='text-center mt-3'>Edit Blog</h6>
        <FormPage blog={props.blog}
        
        onSubmit={(blog)=>{
            props.dispatch(updateBlog(props.blog.id,blog));
            props.history.push('/blogs');  
        }}
        ></FormPage>
        <div className='container mt-3'>
        <button type='button' className='btn btn-danger'   onClick={()=>{
            props.dispatch(removeBlog({id:props.blog.id}));
            props.history.push('/blogs');  
        }}>delete</button>
        </div>
    </div>
  )
}


const mapStateToProps=(state,props)=>{
    return{
        blog:state.blogs.find(blog=>{
            return blog.id===props.match.params.id
        })
    }
}
export default connect(mapStateToProps)(EditBlogPage)
