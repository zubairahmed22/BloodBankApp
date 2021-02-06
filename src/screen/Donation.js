import React,{useState}from "react"
import {Image,View,StyleSheet,SafeAreaView,TextInput,TouchableOpacity,ScrollView} from "react-native"
import {Text,
   
    H1,
    H3,
   
    Form,
    Content,
    Item,
    List,
    Container,
    Input

    
} from "native-base"
import Snackbar from "react-native-snackbar"
import database from "@react-native-firebase/database"
import {connect} from "react-redux"
import propTypes from "prop-types"
import shortId from "shortid"
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
const Donation = ({userState,navigation}) =>{

    

const allBloodGroups = {
    gropA: "A+",
    groupB: "B+",
    groupAB: "AB+",
    groupO:"O+",
    groupNegativeA:"A-",
    groupbNegative:"B-",
    ONegative:"O-",
    AbNegative:"AB-",
    

}
    const [donner,setDonner] = useState('')
    const [adress,setAdress] = useState('')
    const [phoneNo,setPhoneNo] = useState('')
   
    
    const [selected, setSelected] = useState(null);


    const addDonation = async () => {
        try {
            if(!donner || !adress || !phoneNo || !selected){
                return Snackbar.show({
                    text:"please fill all field",
                    textColor:"white",
                    backgroundColor:"#BF2726"
                })
            }
            const uid = shortId.generate()
            await database().ref(`/post/${uid}`).set({
                donner,
                adress,
                phoneNo,
                selected,
                id:uid
            })

        console.log("donation Added Success")
        navigation.navigate('Home')
        } catch (error) {
           console.log(error)
           Snackbar.show({
               text: "Given Donation Faild",
               textColor:"white",
               backgroundColor:"#BF2726",
           })
        }
    }

    return(
        <SafeAreaView style={styles.body}>
      
       
      
           
            
       
        
        <ScrollView>
       <View style={styles.FieldContainer}>
      
       <TextInput
       style={styles.inputFiled}
        placeholder="Donor-Name"
        value={donner}
        onChangeText={(text) =>setDonner(text)}
       />

<TextInput
       style={styles.inputFiled}
        placeholder="Address"
        value={adress}
        onChangeText={(text) =>setAdress(text)}
       />

<TextInput
       style={styles.inputFiled}
        placeholder="Mobile No"
        keyboardType="numeric"
        value={phoneNo}
        onChangeText={(text) =>setPhoneNo(text)}
       />
       <H3 style={styles.groupText}>Select Blood Groups</H3>
       <View style={styles.groupContainer}>
           {Object.values( allBloodGroups).map((blood,item)=>(
               
            <TouchableOpacity
           
            key={item} 
            onPress={()=>setSelected(blood)}
            
            style={[styles.groupBox, { backgroundColor: blood === selected ? '#EC2227' : '#DD9898' }]}
        >
            
            
           <Text style={styles.group}>{blood}</Text>
            </TouchableOpacity>
            
            
           
           ))}
           
           
       </View>
       <TouchableOpacity style={styles.signInButton}
       onPress={addDonation}
       >
           <Text style={styles.buttonText}>DonateNow</Text>
       </TouchableOpacity>
      
       
       </View>
       </ScrollView>

       
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



    groupContainer:{
    display:"flex",
    flexDirection:"row",
    justifyContent:"center",
    flexDirection:"row",
    flexWrap:"wrap",
    marginLeft:20,
    marginRight: 20,
    marginTop:20
    
 
    
    
    },
    groupText:{
     color:"#EC2227",
     fontWeight:"bold",
     marginTop:10
    },
container:{
    display:"flex",
    flexDirection: "row",
    justifyContent:"space-between",
    width:"100%",
    backgroundColor:"#EBFAFF"
},
group:{
fontSize:20,
fontWeight:"bold",
color:"#FFFEFE",

},
Box:{
    width: 80,
    height: 80,
    backgroundColor:"#BF2726",
    borderBottomEndRadius: 50
},
icon:{
    width:30,
    height:30,
   
    // zIndex: 100,
    // left:250,
    marginLeft:15,
    marginTop: 10
    
    
},
body:{
    backgroundColor:"#EBFAFF",
    width:"100%",
    height:"100%"
},
groupBox:{
width:50,
height:40,
backgroundColor:"#DD9898",
borderRadius:10,
justifyContent:"center",
alignItems:"center",
margin:5,

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
marginTop: hp("12%"),


justifyContent:"center",
alignItems:"center",


},
signInButton:{

    marginLeft:130,
    marginRight:130,
    width:120,
    height:37,
    borderRadius:22,
   marginTop:23,
    borderWidth:1,
    borderColor:"#BF2726",
    backgroundColor:"#BF2726",
   
},
buttonText:{
    textAlign:"center",
    marginTop:5,
     color:"#EBFAFF",
     letterSpacing:1.5,
     fontSize:15,
     fontWeight:"bold",
},
footerContainer:{
display:"flex",
flexDirection:"row",
justifyContent:"flex-start",
bottom:0,
backgroundColor:"#EBFAFF",
position:"absolute",
height:"100%",
},
BoxRight:{
    width: 70,
    height: 60,
    backgroundColor:"#BF2726",
    bottom:0,
    borderTopRightRadius:50,
    position:"absolute",
  
    
    
},
iconRight:{
    width:30,
    height:30,
    marginTop:10,
    marginLeft:10
}
})
export default Donation;