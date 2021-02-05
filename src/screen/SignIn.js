import React,{useState}from "react"
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
import {signIn} from "../actions/Auth"
import {connect}from "react-redux"

const SignIn = ({signIn,navigation}) =>{
    const [email,setEmail] = useState('')
    const [password,setPassword] = useState('')

    const doSignIn = async () => {
        signIn({email,password})
        console.log("SIGNIN Data",email,password)
    }

    return(
        <SafeAreaView style={styles.body}>
        <View style={styles.container}>
          
       
            
        </View>
        <ScrollView>
       <View style={styles.textContainer}>
           <H1 style={styles.heading}>Please Sign In</H1>
           <H3 style={styles.seconderyText}>for blood donation and {"\n"}
              saving a life </H3>

           
       </View>
     
       <View style={styles.FieldContainer}>
      
       <TextInput
       style={styles.inputFiled}
        placeholder="Email"
        value={email}
        onChangeText={(text)=> setEmail(text)}
       />

<TextInput
       style={styles.inputFiled}
        placeholder="Password"
        value={password}
        onChangeText={(text)=> setPassword(text)}
       />
       <TouchableOpacity style={styles.signInButton}
       onPress={doSignIn}
       >
           <Text style={styles.buttonText}>SignIn</Text>
       </TouchableOpacity>
       <TouchableOpacity
                onPress={() => navigation.navigate('SignUp')}
                style={{marginTop: 10}}>
                <Text style={{color: '#BF2726', textAlign: 'center'}}>
                  Do not have an account, SignUp here
                </Text>
              </TouchableOpacity>
       
       </View>
       </ScrollView>
       <View style={styles.BoxRight}><Image style={styles.iconRight}
        source={require("../assets/icon.png")}/></View>
           
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
    backgroundColor:"#EBFAFF"
},
container:{
    display:"flex",
    flexDirection: "row",
    justifyContent:"space-between",
    width:"100%"
    
},

Box:{
    width: 80,
    height: 80,
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
    fontSize: 30,
    letterSpacing: 2
    
},
textContainer:{
    marginLeft:25,
    marginTop: 70
},
seconderyText:{
    fontSize:16,
    fontFamily:"Helvetica World",
    lineHeight: 21,
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
justifyContent:"center",
alignItems:"center",
marginTop:50
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
    marginTop:84,
    borderTopRightRadius:50
    
},
iconRight:{
    width:30,
        height:30,
        marginLeft:10,
        marginTop:15
}
})
const mapDispatchToProps = {
    signIn: (data) => signIn(data)

}

SignIn.propTypes ={
    signIn: propTypes.func.isRequired
}
export default connect(null,mapDispatchToProps)(SignIn);