

//reducer bizden state ve action bekler 
import React from 'react'

//store üzerinden dispatch ederek action'ı (yani addBlogu) buraya göndereceğiz
const reducer = (state=[],action) => {
    switch(action.type){
        case"add_blog":return[
            //obje dizisi
                ...state,
                action.blog
            ]

        case "update_blog" : 
                return state.map(blog=>{
                    if(blog.id===action.id){
                        return{
                            ...blog,
                            ...action.updates
                        }
                    }
                    else{
                        return blog
                    }
                })

        case "remove_blog":return state.filter(({id})=>{
            return id !==action.id})
            
        default:return state
    }
}

export default reducer
