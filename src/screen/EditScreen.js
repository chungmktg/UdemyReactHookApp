import React,{useContext, useState} from 'react'
import {View, Text, StyleSheet, TextInput, Button} from 'react-native'
import {Context} from '../BlogContext'
import BlogPostForm from '../components/BlogPostForm'

const EditScreen = ({route,navigation}) => {
    const {state, editBlogPost} = useContext(Context)
    const {id} = route.params

    const blogPost = state.find(
        blogPost => blogPost.id === id
    )

    const [title, setTitle] = useState(blogPost.title)
    const [content, setContent] = useState(blogPost.content)



    return <BlogPostForm
    initialValue = {{title: blogPost.title, content: blogPost.content}}
    onSubmit={(title,content) => {
        editBlogPost(id,title,content,()=> navigation.pop())
    }}/>
}

const styles = StyleSheet.create({
    input:{
        fontSize: 18,
        borderColor:'black',
        borderWidth:1,
        marginBottom: 15,
        padding:5,
        margin:5,
        marginLeft:5
    },
    label:{
        fontSize:20,
        marginBottom:10,
        marginLeft:5
    }
})
export default EditScreen