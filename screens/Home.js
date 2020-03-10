import React ,{useState}from 'react';
import {Flex,WingBlank} from '@ant-design/react-native'
import {FlatList,Text,View} from 'react-native'
import  ListItem from '../components/ListItem'
import {useQuery} from '@apollo/react-hooks'
import gql from 'graphql-tag';
const ANIMATIONLIST = gql`{
    Page(page: 1, perPage: 20){
      media{
        id
        
        episodes
        tags{
          name
        }
        title{
          romaji
          english
        }
        averageScore
      startDate{
          year
          month
          day
        }
        
        bannerImage
      }
    }
    }`

const Home =({navigation})=>{
   // const Mdata = ["a","b","c"]

    const [animationData, setAnimationData]=useState(null)
    const {data,loading,error} = useQuery(ANIMATIONLIST,{
      onCompleted:(data)=>{setAnimationData(data)}
    })
    
    const renderData = (data)=>{

      if(loading){
        return <Text>Loading....</Text>
      }

      if(error){
        return <Text>{error}</Text>
      }

      if(data){
        //console.log(data)
        return(
          <Flex direction='column' justify='center' align='stretch' >

              <FlatList data={ data.Page.media} 
                        renderItem={
                             ({item})=><ListItem item={item} navigation={navigation}/>}
                        keyExtractor={item => item.title.romaji}
              >
           
              </FlatList>
          
        
      
          </Flex>
        )
      }

    }
    

    return (
        <View>
          {
            renderData(animationData)
          }
        </View>
    )
}
export default Home