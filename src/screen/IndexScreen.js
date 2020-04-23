import React, {useContext, useState} from 'react'
import {View, Text, StyleSheet, FlatList, Button, TouchableOpacity} from 'react-native'
import {Context} from '../BlogContext'


const IndexScreen = ({navigation}) =>{
    const {state,addBlogPost,deleteBlogPost} = useContext(Context)
    return (
    <>
        <Button title = "Create Post" onPress = {()=> navigation.navigate('Create')}/>
        <FlatList data={state} 
        keyExtractor={(blogPost) => blogPost.title}
        renderItem = {
            ({item}) => {
            return (
                <TouchableOpacity onPress={()=> navigation.navigate('Show',{id: item.id})}>
            <View style = {styles.row}>
            <Text>{item.title}-{item.id}</Text>
                <TouchableOpacity
                onPress = {()=> deleteBlogPost(item.id)}
                >
                    <Text>Trash</Text>
                </TouchableOpacity>
                </View>
                </TouchableOpacity>
                )
            }
        }
        />
    </>
    )
}

IndexScreen.navigationOptions = ({navigation}) => {
    return {
        headerRight: (<TouchableOpacity >
            <Text>Add</Text>
        </TouchableOpacity>)
    }
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