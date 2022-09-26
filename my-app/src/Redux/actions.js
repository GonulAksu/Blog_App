
import {v4 as uuid} from 'uuid';
//var olan state'e üzerine blog eklemek için, eklenecek blog objesini döndrür
export const addBlog=({title="",desc="",dateAdded=0})=>(
     {
        type:"add_blog",
        blog:{
            id:uuid(),
            title:title,
            desc:desc,
            dateAdded:dateAdded
        }
    }

)

export const updateBlog=(id,updates)=>(
    {
        type:"update_blog",
        id,
        updates
    }
)

export const removeBlog=({id})=>(
    {
        type:"remove_blog",
        id,
    }
)