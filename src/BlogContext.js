import React,{useState, useReducer} from 'react'
import CreateDataContext from './CreatateDataContext'
import { act } from 'react-test-renderer'
import jsonServer from '../src/api/jsonServer'

const blogReducer =(state, action)=> {
    switch(action.type){
        case 'get_blogposts':
            return action.payload
        case 'add_blogpost':
            return [...state,
                {
                id: Math.floor(Math.random()*99),
                title: action.payload.title,
                content : action.payload.content
            }]
        case 'edit_blogpost':
            return state.map((blogPost)=>{
                return blogPost.id === action.payload.id
                    ? action.payload
                    : blogPost
            })
        case 'delete_blogpost':
            return state.filter(blo => blo.id !== action.payload)
        default:
            return state
    }
}
    const getBlogPosts = dispatch => {
        return async ()=> {
            const response = await jsonServer.get('/blogposts')
            // response.data === [{},{},{}]
            dispatch({type:'get_blogposts', payload: response.data})
        }
    }

    const addBlogPost =(dispatch)=>{
        return async (title, content, callback)=> {
            await jsonServer.post('/blogposts',{title:title,content:content})

            // dispatch({type:'add_blogpost', payload: {title: title, content: content}})
            if(callback){
                callback()
            }  


        }
    }

    const editBlogPost =(dispatch)=>{
        return (id,title, content, callback)=> {
            dispatch({type:'edit_blogpost', payload: {id: id, title: title, content: content}})
            if(callback){
                callback()
            }
        }
    }

    const deleteBlogPost =(dispatch)=>{
        return id=> {
            dispatch({type:'delete_blogpost', payload:id})
        }
    }

export const {Context, Provider} = CreateDataContext(blogReducer, {getBlogPosts,addBlogPost,editBlogPost,deleteBlogPost},
     [])