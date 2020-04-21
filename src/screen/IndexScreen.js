import React, {useContext, useState} from 'react'
import {View, Text, StyleSheet, FlatList, Button, TouchableOpacity} from 'react-native'
import {Context} from '../BlogContext'


const IndexScreen = () =>{
    const {state,addBlogPost,deleteBlogPost} = useContext(Context)
    return (
    <>
        <Text>Index Screen</Text>
        <Button title ="Add Post" onPress={addBlogPost}/>
        <FlatList data={state} 
        keyExtractor={(blogPost) => blogPost.title}
        renderItem = {
            ({item}) => {
            return <View style = {styles.row}>
            <Text>{item.title}</Text>
            <TouchableOpacity
            onPress = {()=> deleteBlogPost(item.id)}
            >
                <Text>Trash</Text>
            </TouchableOpacity>
            </View>
            }
        }
        />
    </>
    )
}
const styles = StyleSheet.create({
    row:{
        flexDirection:'row',
        justifyContent:'space-between',
        borderTopWidth:1,
        borderColor:'gray',
        paddingVertical:10,
        paddingHorizontal:20
    },
    title:{
        fontSize:18
    },
    icon:{
        fontSize:16,
        color:'red'
    }
})

export default IndexScreen