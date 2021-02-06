import React,{useEffect}from "react"
import {Image,View,StyleSheet,SafeAreaView,FlatList,StatusBar,Linking} from "react-native"
import {Text,
   
    H1,
    H3,
   
    Form,
    Content,
    Item,
    List,
    Container,
    Icon

    
} from "native-base"
import {connect} from "react-redux";
import {getPosts}from "../actions/Post"
import propTypes from "prop-types"
import EmptyContainer from "../Component/EmptyContainer"
import { TouchableOpacity } from "react-native-gesture-handler";

import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';


const Home = ({getPosts,postState}) => {

    dialCall = (number) => {
        let phoneNumber = '';
        if (Platform.OS === 'android') { phoneNumber = `tel:${number}`; }
        else {phoneNumber = `telprompt:${number}`; }
        Linking.openURL(phoneNumber);
     };
    

    useEffect(() => {
      getPosts()
        
    }, [])

    if(postState.loading){
        return <EmptyContainer/>
    }
    return(
        
        <SafeAreaView style={styles.body}>
       
        {/* <View style={styles.BottemLine}></View> */}
       <View style={styles.textContainer}>
           <H1 style={styles.heading}>YOUR ONE DROP{"\n"}
            OF BLOOD</H1>
           <H3 style={styles.seconderyText}>CAN
           SAVE A LIFE
 </H3>

           
       </View>
       <FlatList
       data={postState.posts}
       keyExtractor ={(item) => item.id}
       renderItem={({item,index,separators}) =>(
        <View style={styles.FieldContainer}>
      
       
        <Image  style={styles.avatarImage}source={require('../assets/download.jpg')}/>
           
         <View style={styles.imageContainer}>
             <Text  style={{fontSize:24,color:"#4A4747"}}>{item.donner}</Text>
             <Text style={{fontSize:18,color:"#645F5F"}}>{item.phoneNo}</Text>
             <Text style={{color:"#756767",letterSpacing:1,fontSize:15,marginTop:3}}>{item.adress}</Text>
             </View>
             <View style={styles.iconContainer}>
             <Text style={styles.bloodGroup}>{item.selected}</Text>
             < Image style={styles.bloodIcon} source={require("../assets/BloodIcon.png")}/> 
             <TouchableOpacity
             style={styles.phoneButton}
             onPress={() => dialCall(item.phoneNo)}
             >
             <Icon name="call-outline" style={styles.icondesign}/>
             </TouchableOpacity>
             <TouchableOpacity
             style={styles.phoneButton}
             >

             <Icon name="md-location-outline" style={styles.icondesign}/> 
             </TouchableOpacity>
              
         </View>
                         
  
  
      
         
         </View>
       )}
    ListEmptyComponent={() =>(
        <Container style={styles.emptyContainer}>
            <H1>No Blood Groups Found</H1>
        </Container>
    )}
       />
        
       
       <View style={styles.FieldContainer}>
      
       
     
      
    


    
       
       </View>
      
       <View style={styles.footerContainer}>
          
       <View style={styles.BoxRight}>
           <Image style={styles.iconRight}
        source={require("../assets/icon.png")}/>
        </View>
        </View> 
        </SafeAreaView>
        
    )
}


const styles = StyleSheet.create({
logo:{
    width: "40%",
    height: 50,
    marginLeft:25,
    marginTop: 15
},
body:{
    backgroundColor:"#EBFAFF",
    height: "100%"
},
imageContainer:{
display:"flex",
},
iconContainer:{
display:"flex",

},

phoneButton:{
backgroundColor:"#BF2726",
borderRadius:3,
marginTop:5,
height:25
},
emptyContainer:{
    flex: 1,
    backgroundColor:"#EBFAFF",
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom:40
},
icondesign:{color:"white",
backgroundColor:"#BF2726",
fontSize:23,
borderRadius:3,
marginLeft:5,

},
bloodGroup:{
position:"absolute",
zIndex: 100,
fontSize:15,
color:"#FFFBFB",
fontWeight:"bold",
marginTop:8,
marginLeft:3,


},
bloodIcon:{
width:33,
height:25,
marginTop:5,
alignSelf: 'stretch',



},
container:{
    display:"flex",
    flexDirection: "row",
    justifyContent:"space-between",
    width:"100%"
    
},
avatarImage:{
width:70,
height:70,
borderRadius:100
},
Box:{
    width: 80,
    height: 80,
    backgroundColor:"#BF2726",
    borderBottomEndRadius: 50
},
icon:{
    width:40,
    height:40,
   
    // zIndex: 100,
    // left:250,
    marginLeft:15,
    marginTop: 10
    
    
},
BottemLine:{
    borderWidth:0.5,
    borderColor:"#E3C7C7",
    width:"100%",
    height:0.5,
    shadowOpacity:13
   


},
heading:{
    fontWeight:"bold",
    color:"#EC2227",
    fontSize: 25,
    letterSpacing: 2
    
},
textContainer:{
    marginLeft:25,
    marginTop: hp('10%')
},
seconderyText:{
    fontSize:20,
    fontFamily:"Helvetica World",
    lineHeight: 33,
    letterSpacing: 1.5,
    color:"#BF2726"

},
inputFiled:{
    width:313,
    borderWidth: 1,
    borderColor:"#BF2726",
    paddingHorizontal:20,
    marginBottom:10,
    marginTop:10,
    borderRadius:10
},
FieldContainer:{
display:"flex",
flexDirection:"row",
justifyContent:"space-around",
alignItems:"center",
marginTop:30,
borderBottomWidth:1,
borderColor:"#B1B1B1",
paddingBottom:5,

},

footerContainer:{
display:"flex",
flexDirection:"row",
justifyContent:"flex-start",
backgroundColor:"#EBFAFF",
bottom:0,
position:"absolute",
height:"100%"

},
BoxRight:{
    width: 70,
    height: 60,
    backgroundColor:"#BF2726",
    // marginTop: hp("30.1%"),

    borderTopRightRadius:50,
    position:"absolute",
    bottom:0
    
    
},
iconRight:{
    width:30,
    height:30,
    marginTop:15,
    marginLeft:15
}
})
const mapStateToProps = (state) => ({        

    postState: state.post,
   


})
const mapDispatchToProps ={
    getPosts
}


Home.propTypes = {
    getPosts: propTypes.func.isRequired,
    postState: propTypes.object.isRequired

}

export default connect(mapStateToProps,mapDispatchToProps) (Home);