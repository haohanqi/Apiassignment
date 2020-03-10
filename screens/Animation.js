import React from 'react'
import {Flex} from '@ant-design/react-native' 
import {Image,StyleSheet,View,Text,FlatList,ScrollView} from 'react-native'
import {useQuery} from '@apollo/react-hooks'
import gql from 'graphql-tag';
import Character from '../components/Character'

const CHARACTERS = gql`
query Media($id:Int){
    Media(id:$id){
    id
    characters{
      nodes{
        id
        name {
          first
          last
          full
          native
        }
        image {
          large
          medium
        }
      }
    }
  }
}
`
const Animation =({route})=>{
   const {item} = route.params.data
   const Tdata=["aa","bb","vcc"]
   console.log(item.id)
   const {data,loading,error} = useQuery(CHARACTERS,{variables:{id:item.id}})
   console.log(data?data.Media.characters.nodes:'')
   return (
       <ScrollView style={{height:'100%'}}>
        <Flex style={{height:'100%',backgroundColor:'black'}} direction='column' align='stretch' >
               <Flex.Item >
                    { 
                    item.bannerImage ? <Image style={styles.coverImage} resizeMode="cover" source={{uri: `${item.bannerImage}`}}/>:
                    <Image style={styles.coverImage} resizeMode="cover" source={{uri: 'https://images.unsplash.com/photo-1548827752-6301e20b3be0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80'}}/>   
                    }
               </Flex.Item> 

               <Flex.Item flex={2} style={styles.descirption}>
                    <Flex direction='column' justify='start' align='stretch'>
                      <Text style={styles.title}>{item.title.romaji}({item.startDate.year})</Text>
                      
                      <Text style={styles.subtitle}>Introduction</Text>   
                      <Text style={styles.info}>dhs shsak shsh shskakk shs shieo djdd ssjj shsad daaddd dadas ewddffsaawdffww ffeeq sa</Text> 

                      <Text style={styles.subtitle}>Episodes: <Text style={styles.info}>{item.episodes}</Text></Text>
                                 
                      
                      <Text style={styles.subtitle}>Characters</Text>
                      <FlatList data={data?data.Media.characters.nodes:[]} 
                                horizontal={true} 
                                renderItem={({item})=><Character uri={item.image.medium} name={item.name.full}></Character>}
                                keyExtractor={ item=>item.id }
                                > 
                      </FlatList>

                      
                    </Flex>


               </Flex.Item>    
        </Flex>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
coverImage:{
    height:230, 
},
descirption:{
 marginLeft:'5%',
 marginRight:'5%'
},
title:{
    fontSize:30,
    fontWeight:'bold',
    marginBottom:'5%',
    marginTop:'5%',
    color:'white'
},
subtitle:{
    fontSize:20,
    fontWeight:'bold',
    marginBottom:'5%',
    color:'white'
},

info:{
    fontSize:15,
    fontWeight:'bold',
    marginBottom:'5%',
    marginLeft:'10%',
    color:'white',
    letterSpacing:1.2,
    lineHeight:25,
},




})
// { 
//     item.bannerImage ? <Image style={styles.coverImage} resizeMode="cover" source={{uri: `${item.bannerImage}`}}/>:
//     <Image style={styles.coverImage} resizeMode="cover" source={{uri: 'https://images.unsplash.com/photo-1548827752-6301e20b3be0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80'}}/>   
//   }
export default Animation


