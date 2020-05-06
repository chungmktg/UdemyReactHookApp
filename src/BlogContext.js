import React,{useState, useReducer} from 'react'
import CreateDataContext from './CreatateDataContext'
import { act } from 'react-test-renderer'
import jsonServer from '../src/api/jsonServer'

const blogReducer =(state, action)=> {
    switch(action.type){
        case 'get_blogposts':
            return action.payload
        case 'delete_blogpost':
            return state.filter(blogPost => blogPost.id !== action.payload)
        default:
            return state
    }
}
    const getBlogPosts = dispatch => {
        return async ()=> {
            const response = await jsonServer.get(`/blogposts`)
            // response.data === [{},{},{}]
            dispatch({type:'get_blogposts', payload: response.data})
        }
    }

    const addBlogPost =(dispatch)=>{
        return async (title, content, callback)=> {
            await jsonServer.post(`/blogposts`,{title:title,content:content})
            if(callback){
                callback()
            }  
        }
    }

    const editBlogPost =(dispatch)=>{
        return async (id,title, content, callback)=> {
            await jsonServer.put(`blogposts/${id}`,{title,content})

            if(callback){
                callback()
            }
        }
    }

    const deleteBlogPost =(dispatch)=>{
        return async id => {
            await jsonServer.delete(`/blogposts/${id}`)
            dispatch({type:'delete_blogpost', payload:id})
        }
    }

export const {Context, Provider} = CreateDataContext(blogReducer, {getBlogPosts,addBlogPost,editBlogPost,deleteBlogPost},
     [])