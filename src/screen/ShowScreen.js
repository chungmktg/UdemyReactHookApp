import React,{useContext} from 'react'
import {View, Text, StyleSheet, Button} from 'react-native'
import {Context} from '../BlogContext'


const ShowScreen =({route,navigation}) => {
    
    const {state} = useContext(Context)
    const {id} = route.params

    const blogPost = state.find((blogPost)=> blogPost.id === id)


    

React.useLayoutEffect(() => {
    navigation.setOptions({
        headerRight: () => (
            <Button onPress={() => navigation.navigate('Edit',{id: id })} title="Edit" />
        ),
    })
})


return <View>
        <Text> {blogPost.title}</Text>
    </View>

}
const styles = StyleSheet.create({})
export default ShowScreen