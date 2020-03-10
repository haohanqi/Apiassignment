import React from 'react'
import {Text,View,StyleSheet,Image} from 'react-native'
import {Flex} from '@ant-design/react-native' 
const Character = ({uri,name})=>{
    //console.log(uri)
return(
    <Flex direction='column' justify='between' align='stretch' style={styles.wapper}>
        <Flex.Item flex={2}>
            <Image style={styles.image} resizeMode='cover' source={{uri: `${uri}`}}/>
        </Flex.Item> 
           
        <Flex.Item >
            <Text style={styles.name}>{name}</Text>
        </Flex.Item>
    </Flex>
   

)
}

const styles = StyleSheet.create({
wapper:{
    // backgroundColor: '#7C7C7C',
    // borderRadius:5,
    // borderWidth:1.5,
    // borderColor:'#7C7C7C',
    
    width:120,
    marginLeft:10,
    marginBottom:20,
    
},

image:{
    height:130,
    borderRadius:5,
},

name:{
    //marginTop:'%',
    textAlign:'center',
    color:'white',
    fontWeight:'bold',
    flexWrap:'nowrap',
}


})

export default Character