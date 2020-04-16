import React,{useState, useReducer} from 'react'
import CreateDataContext from './CreatateDataContext'

const BlogContext = React.createContext()

const blogReducer =(state, action)=> {
    switch(action.type){
        case 'add_blogpost':
            return [...state,{title: `Bog Post ${state.length + 1}`}]
        default:
            return state
    }
}


export const BlogProvider = ({children}) => {
 
 //   const [blogPosts, setBlogPosts] = useState([])
    const [blogPosts, dispatch] = useReducer(blogReducer,[])

    const addBlogPost =()=>{
        dispatch({type:'add_blogpost'})
    }
    // const addBlogPost = () => {
    //     setBlogPosts([...blogPosts,{title:`My blogpost #${blogPosts.length + 1}`}])
    // }


    // return <BlogContext.Provider value ={{data: blogPosts, addBlogPost: addBlogPost}} >
    //     {children}
    // </BlogContext.Provider>
    return (
        <BlogContext.Provider value = {{data: blogPosts, addBlogPost: addBlogPost}}>
            {children}
        </BlogContext.Provider>
    )
}
export default BlogContext