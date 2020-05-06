import React,{useContext, useEffect} from 'react'
import {View, Text, StyleSheet, Button} from 'react-native'
import {Context} from '../BlogContext'


const ShowScreen =({route,navigation}) => {
    
    const {state,getBlogPosts} = useContext(Context)
    const {id} = route.params

    const blogPost = state.find((blogPost)=> blogPost.id === id)

    console.log(
        JSON.stringify(state)
    )
    useEffect(()=>{
        const listener = navigation.addListener('focus',()=> {
            getBlogPosts()
        })
    }
    )
    

React.useLayoutEffect(() => {
    navigation.setOptions({
        headerRight: () => (
            <Button onPress={() => navigation.navigate('Edit',{id: id })} title="Edit" />
        ),
    })
})


return ( <View>
    <Text> {blogPost.title}</Text>
</View>)

}
const styles = StyleSheet.create({})
export default ShowScreen