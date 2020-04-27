import React,{ useContext, useState} from 'react'
import {View, Text,TextInput,Button, StyleSheet} from 'react-native'
import {Context} from '../BlogContext'

const BlogPostForm = ({onSubmit, initialValue}) => {

    const [title,setTitle] = useState(initialValue.title)
    const [content, setContent] = useState(initialValue.content)


    return(
        <View>
        <Text style={styles.label}>Enter Title:</Text>
        <TextInput style={styles.input} value = {title} onChangeText={(text)=> setTitle(text)}/>
        <Text style={styles.label}>Enter Content:</Text>
        <TextInput style={styles.input} value = {content} onChangeText={(content) => setContent(content) }/>
        <Button 
        title = "Save Blog Post"
        onPress = { ()=> onSubmit(title,content)}
        />
    </View>
    )
}

BlogPostForm.defaultProps = {
    initialValue:{
        title:'',
        content:''
    }
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

export default BlogPostForm