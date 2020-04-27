import React,{ useContext, useState} from 'react'
import {View, Text,TextInput,Button, StyleSheet} from 'react-native'
import {Context} from '../BlogContext'
import BlogPostForm from '../components/BlogPostForm'


const CreateScreen =({navigation}) => {
    const {addBlogPost} = useContext(Context)
    return <BlogPostForm 
    onSubmit={(title, content)=>{
        addBlogPost(title,content,()=> navigation.navigate('Index'))
    }}/>
}


export default CreateScreen