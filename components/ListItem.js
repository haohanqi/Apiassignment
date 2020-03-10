import React from 'react'
import {Flex} from '@ant-design/react-native'
import {Image,Text,StyleSheet,View} from 'react-native'

const ListItem =({item,navigation})=>{
  console.log(item) 

    return (
    
      <Flex direction='row' justify='start' align='center' style={{ borderTopWidth:'1px', borderBottomWidth:'0.5px', borderColor:'#E5E5E5', borderRadius:'10px',}}>
          <Flex.Item flex={3} style={style.item} onPress={()=>{navigation.navigate('Animation',{ data:{item} })}}>
             {
               item.bannerImage ? <Image style={style.image}    
               resizeMode="cover"
               source={ {uri: `${item.bannerImage}`}}/> : <Image style={style.image} resizeMode="cover"  source={ { uri: `https://images.unsplash.com/photo-1548827752-6301e20b3be0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80`} }/>
             }
          </Flex.Item>
          
          <Flex.Item flex={5} style={style.infoWapper}>
             <Flex direction='column' justify='start' align='stretch' >
               <Text style={style.title}>{item.title.romaji}({item.startDate.year})</Text>
               <Text style={style.info}><Text style={style.subTitle}>Score:</Text> {item.averageScore}</Text>
               <Text style={style.info}><Text style={style.subTitle}>Episodes:</Text> {item.episodes}</Text>
               <Text style={style.info}><Text style={style.subTitle}>Tags:</Text> {item.tags.map(item=><Text key={item.name}>{''+item.name+' /'}</Text>)}</Text>
             </Flex>
          </Flex.Item>
      </Flex>
     
    )
}

const style = StyleSheet.create({
    item:{
       marginTop:'5%',
       marginBottom:'5%',
       marginLeft:'5%',
    },
    image:{
        height:180,
        
    },
    infoWapper:{
        marginLeft:'10%',
    },

    title:{
       color:'black',
       fontSize:20,
       fontWeight:"bold",
       marginTop:'5%',
       marginBottom:'5%',
       marginRight:'1%',

    },

    subTitle:{
      color:'black',
    },

    info:{
      fontSize:15,
      fontWeight:"bold",
      marginBottom:'5%',
      marginRight:'5%',
      textAlign:'left',
      letterSpacing:1.2,
      lineHeight:25,
      color:'#818181',
    }

    
})

export default ListItem