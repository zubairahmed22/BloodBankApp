import React,{useState} from "react"
import {Image,View,StyleSheet,SafeAreaView,TextInput,TouchableOpacity,ScrollView} from "react-native"
import {Text,
   
    H1,
    H3,
   
    Form,
    Content,
    Item,
    List,
    Container

    
} from "native-base"
import propTypes from "prop-types"
import {signUp} from "../actions/Auth"
import {connect}from "react-redux"
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';

const SignUp = ({signUp}) => {

    const [email,setEmail]= useState('')
    const [password,setPassword]= useState('')

  const doSignUp = async () => {
      signUp({email,password})
      console.log("CHECKING DATA",email,password)
  }
 
    return(
        <SafeAreaView style={styles.body}>
        {/* <View style={styles.container}>
          
        <Image style={styles.logo} source={require("../assets/Logo.png")}/>
      
            <View style={styles.Box}></View>
            <Image style={styles.icon} source={require("../assets/icon.png")}/>
        </View> */}
         <ScrollView>
       
      
         <View style={styles.textContainer}>
       <View style={styles.FieldContainer}>
       
       
      
       <H1 style={styles.heading}>Sign Up</H1>
       <TextInput
       style={styles.inputFiled}
        placeholder="Email"
        value={email}
        onChangeText={(text) => setEmail(text)}
       />

<TextInput
       style={styles.inputFiled}
        placeholder="Password"
        value={password}
        onChangeText={(text)=> setPassword(text)}
       />
       <TouchableOpacity 
       style={styles.signInButton}
        onPress={doSignUp}
       >
           <Text style={styles.buttonText}>SignUp</Text>
       </TouchableOpacity>
      
       
       </View>
       </View>
       </ScrollView>
       <View style={styles.BoxRight}><Image style={styles.iconRight}
        source={require("../assets/icon.png")}/></View>
           
        </SafeAreaView>
        
    )
}


const styles = StyleSheet.create({
logo:{
    width:"1%",
    height: '1%',
    marginLeft:'2%',
    marginTop: '2%'
},
container:{
    display:"flex",
    flexDirection: "row",
    justifyContent:"space-between",
    width:"100%",
    backgroundColor:"#EBFAFF"
    
},
body:{
    backgroundColor:"#EBFAFF",
    height: '100%'
},

Box:{
    width: hp('80'),
    height:hp('80'),
    backgroundColor:"#BF2726",
    borderBottomStartRadius: 50
},
icon:{
    width:40,
    height:40,
    position:"absolute",
    zIndex: 100,
    left:250,
    marginLeft:55,
    marginTop: 10
    
    
},
heading:{
    fontWeight:"bold",
    color:"#EC2227",
    fontSize: hp("4.4%"),
    letterSpacing: 2,
    marginBottom: hp("5%"),
    
    
    
},
textContainer:{
    marginTop:hp("8%"),
    alignItems:"center",
    paddingBottom:hp("10%")
    
   
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
justifyContent:"center",
alignItems:"center",
marginTop:hp("15%")
},
signInButton:{

    marginLeft:130,
    marginRight:130,
    width:120,
    height:37,
    borderRadius:22,
   marginTop:10,
    borderWidth:1,
    borderColor:"#BF2726",
    backgroundColor:"#BF2726",
   
},
buttonText:{
    textAlign:"center",
    marginTop:5,
     color:"#EBFAFF",
     letterSpacing:1.5,
     fontWeight:"bold"
},
BoxRight:{
    width: 70,
    height: 60,
     backgroundColor:"#BF2726",
    bottom:0,
    borderTopRightRadius:50
    
},
iconRight:{
    width:30,
        height:30,
        marginLeft:15,
        marginTop:15
}
})

const mapDispatchToProps = {
    signUp: (data) => signUp(data)
}
SignUp.propTypes ={
    signUp: propTypes.func.isRequired
}

export default connect(null,mapDispatchToProps)(SignUp)