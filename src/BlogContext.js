import React,{useState, useReducer} from 'react'
import CreateDataContext from './CreatateDataContext'


const blogReducer =(state, action)=> {
    switch(action.type){
        case 'add_blogpost':
            return [...state,
                {
                id: Math.floor(Math.random()*99),
                title: action.payload.title,
                content : action.payload.content
            }]
        case 'delete_blogpost':
            return state.filter(blo => blo.id !== action.payload)
        default:
            return state
    }
}

    const addBlogPost =(dispatch)=>{
        return (title, content, callback)=> {
            dispatch({type:'add_blogpost', payload: {title: title, content: content}})
            callback()
        }
    }

    const deleteBlogPost =(dispatch)=>{
        return id=> {
            dispatch({type:'delete_blogpost', payload:id})
        }
    }

export const {Context, Provider} = CreateDataContext(blogReducer, {addBlogPost,deleteBlogPost}, [])