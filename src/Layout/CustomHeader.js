import React,{useState,useEffect} from "react"
import { StyleSheet,Image,TouchableOpacity ,View,Text, statusBar}from "react-native"
import {

    Icon,
    Header,
    
    
   
}from "native-base"

import {connect}from "react-redux"
import propTypes from 'prop-types'
import {signOut} from "../actions/Auth"

import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';



const CustomHeader =({signOut,authState,navigation}) =>{

    const [color,setColor] = useState('white')


    return(
      <View
      style={Styles.statusBar}
      >

     <Image style={Styles.logo}source={require('../assets/Logo.png')}/>
     {/* <Text style={Styles.textDesign}>BloodBankApp</Text> */}
     <View style={Styles.Box}>
     <Image style={Styles.icon} source={require("../assets/icon.png")}/>
     </View>
           {authState.isAuthenticated && (
               <>
               {/* <Text style={[Styles.textDesign,{color:color,fontSize:10}]}>BloodBankApp</Text> */}
                <TouchableOpacity style={Styles.signInButton}
                onPress={() => navigation.navigate("Donation")}
                >
           <Text style={Styles.buttonText}
           >Donate</Text>
       </TouchableOpacity>

       
                <TouchableOpacity style={Styles.LogOutButton}
                onPress={() => signOut()}
                >
             <Icon name="log-out-outline" style={{color:"red",marginLeft:10}}/>
           
            </TouchableOpacity>

               </>
           
           )}
      </View>
    )
}

const mapStateToProps = (state) =>({
    authState:state.auth
})

const mapDispatchToProps = {
    signOut
}

CustomHeader.propTypes ={
    signOut: propTypes.func.isRequired,
    authState:propTypes.object.isRequired,
}

const Styles =  StyleSheet.create({
    statusBar:{
        backgroundColor:"white",
        display:"flex",
        flexDirection:"row",
        // flexWrap:"wrap",
        justifyContent:"space-between",
        
        
        
    },

    logo:{
        width: hp("12.3%"),
        height: hp("4.2%"),
        marginLeft:15,
        marginTop:13
    },

    Box:{
        width: 70,
        height: 60,
        backgroundColor:"#BF2726",
        borderBottomStartRadius: 50,
        marginLeft:80
    },
    icon:{
        width:30,
        height:30,
        marginLeft:25,
        marginTop:5
        
        
    },
    textDesign:{
        marginTop:17,
        fontSize:17,
        marginLeft:20,
        fontWeight:"bold",
        color:"#EC2227",
        letterSpacing:1
        
    },

    signInButton:{
       
        width:90,
        height:36,
        borderRadius:22,
        position:"absolute",
        borderWidth:1,
        borderColor:"#BF2726",
        backgroundColor:"#BF2726",
        marginLeft:hp("17.5%"),
        marginTop:12

       
    },
    buttonText:{
        textAlign:"center",
        marginTop:5,
         color:"white",
         letterSpacing:1.5,
         fontWeight:"bold",
         fontSize:15,
         
    },
    LogOutButton:{
        position:"absolute",
       marginLeft:hp("32.5%"),
       width:50,
       height: 34,
       borderWidth:2,
       borderColor:"#BF2726",
       borderRadius:22,
       marginTop:13
        
    }
})

export default connect(mapStateToProps,mapDispatchToProps)(CustomHeader)