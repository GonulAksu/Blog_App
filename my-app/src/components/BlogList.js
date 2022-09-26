import React from 'react'
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
const BlogList = (props) => {

  
  
  return (
    <div className='container'>
         <h6 className='text-center mt-3'>Blog List</h6>
        <ul className='list-group list-group-flush'>
          {props.blogs.map(blog=>{
            return<li className='list-group-item ' key={blog.id}> {blog.title} &nbsp;
              <Link className='Bloga' to={`/blogs/${blog.id}`}>details</Link>  &nbsp;
              <Link className='Bloga' to={`/edit/${blog.id}`}>edit</Link>
            </li> 
          })}
        </ul>
    </div>
  )
}


//reducer'a oluşturduğumuz ve içerisini add formu şle doldurduğumuz state'timize componentlerden erişmek için
const mapStateToProps=(state)=>{
  return {
      blogs:state.blogs
  }
}


//böylece props içerisine blogs gelir
export default connect(mapStateToProps)(BlogList);
