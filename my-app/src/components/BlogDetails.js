import React from 'react';
import {connect} from 'react-redux';

const BlogDetails = (props) => {
 
  return (
    <div>
       <h6 className='text-center mt-3'>Blog Details</h6>
      <div className="card container"style={{width:'18rem'}} >
        <div className="card-body">
          <h5 className="card-title">{props.blogs.title}</h5>
         
          <h6 className="card-subtitle mb-2 text-muted">{props.blogs.dateAdded}</h6>
          <p className='card-text'>{props.blogs.desc}</p>
        </div>
      </div>

    </div>
  )
}

//bize linkden id geliyor ilgili bloğun
const mapStateToProps=(state,props)=>{
  return{
    blogs:state.blogs.find(blog=>{
      return blog.id ===props.match.params.id
    })
  }
}


export default connect(mapStateToProps)(BlogDetails)
