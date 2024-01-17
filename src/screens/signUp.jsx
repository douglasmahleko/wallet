import { View, Text, TouchableOpacity, TextInput } from "react-native"
import {LinearGradient} from 'expo-linear-gradient'
import { theme } from "../constants/themes"
import { ScrollView } from "react-native"
import Icon from "react-native-vector-icons/MaterialIcons"
import Feather from "react-native-vector-icons/Feather"
import { sizes } from "../constants/sizes"
import { Image } from "react-native"
import { useState } from "react"

function SignUp({navigation}){
    const [showPassword, setShowPassword] = useState(false)
    function renderHeader(){
        return(
            <TouchableOpacity style={{
                flexDirection:"row",
                alignItems:"center",
                marginTop: sizes.padding*6,
                paddingHorizontal:sizes.padding*2
            }} >
                <Icon name="arrow-back" size={20} color={theme.white} />
                <Text style={{color:theme.white, fontWeight:"bold", fontSize:20, marginLeft:sizes.padding*1.5}} > 
                Sign Up</Text>
            </TouchableOpacity>
        )
    }
    function renderLogo(){
        return(
            <View style={{height:100,alignItems:"center", justifyContent:"center", marginTop:sizes.padding*6}} >
                <Image source={require("../assets/images/logo.jpeg")} resizeMode="contain"
                    style={{width:"60%", borderRadius:40}}
                />
            </View>
        )
    }
    function renderForm(){
        return(
            <View style={{marginTop:sizes.padding*3, marginHorizontal:sizes.padding*3}}>
                <View style={{marginTop:sizes.padding*3}}>
                    <Text style={{fontSize:16,
                            fontWeight:"bold", color:theme.lightGreen}}>Full Name</Text>
                    <TextInput placeholder="Enter Full Name"
                        selectionColor={theme.white}
                        placeholderTextColor={theme.white}
                        style={{
                            marginVertical: sizes.padding,
                            borderBottomColor: theme.white,
                            borderBottomWidth :1,
                            height:40,
                            color:theme.white,
                            fontSize:14,
                            paddingLeft:3
                        }}
                     />
                </View>
                <View style={{marginTop:sizes.padding*3}}>
                    <Text style={{fontSize:16,
                            fontWeight:"bold", color:theme.lightGreen}}>Phone Number</Text>
                    <View style={{flexDirection:"row"}}>
                        <TouchableOpacity style={{width:120, height:50, flexDirection:"row", marginHorizontal:5,
                        borderBottomWidth:1, borderBottomColor:theme.white, fontSize:14
                    }}>
                            <View style={{justifyContent:"center"}}>
                                <Icon name="keyboard-arrow-down" size={15} color={theme.white} />
                            </View>
                            <View style={{justifyContent:"center", marginLeft:2}}>
                                <Image source={require("../assets/images/zim.jpeg")} style={{width:30, height:30}}
                                    resizeMode="contain"
                                />
                            </View>
                            <View style={{justifyContent:"center", marginLeft:5}}>
                                <Text style={{color:theme.white, fontSize:14}}>ZIM+263</Text>
                            </View>
                        </TouchableOpacity>
                        <TextInput placeholder="Enter Phone Number"
                        selectionColor={theme.white}
                        placeholderTextColor={theme.white}
                        keyboardType="numeric"
                        style={{
                            marginVertical: sizes.padding,
                            borderBottomColor: theme.white,
                            borderBottomWidth :1,
                            height:40,
                            color:theme.white,
                            fontSize:14,
                            paddingLeft:5,
                            flex:1
                        }}
                     />
                    </View>
                    
                </View>
                <View style={{marginTop:sizes.padding*3}}>
                    <Text style={{fontSize:16,
                            fontWeight:"bold", color:theme.lightGreen}}>Password</Text>
                    <TextInput placeholder="Enter Password"
                        selectionColor={theme.white}
                        placeholderTextColor={theme.white}
                        secureTextEntry={!showPassword}
                        style={{
                            marginVertical: sizes.padding,
                            borderBottomColor: theme.white,
                            borderBottomWidth :1,
                            height:40,
                            color:theme.white,
                            fontSize:14,
                            paddingLeft:3
                        }}
                     />
                     <TouchableOpacity onPress={() => setShowPassword(!showPassword)} style={{position:"absolute",
                             right:0, bottom:10, height:30, width:30}}>
                                <Feather name={showPassword ? "eye-off" : "eye"} size={20} color={theme.white} />
                        
                     </TouchableOpacity>
                </View>
            </View>
        )
    }
    function renderButton(){
        return(
            <View style={{margin:sizes.padding*3}}>
                <TouchableOpacity onPress={()=> navigation.navigate("Home")}
                 style={{height:60, backgroundColor:theme.black, alignItems:"center", 
                justifyContent:"center", borderRadius:sizes.radius*1.5
            }}>
                    <Text style={{color:theme.white,fontSize:20, fontWeight:"bold"}}>
                        Continue
                    </Text>
                </TouchableOpacity>
            </View>
        )
    }
    return(
        <View
            style={{flex:1}}
        >
            <LinearGradient
                style={{flex:1}}
                colors={[theme.lime, theme.emerald]}
            >
                <ScrollView>
                    {renderHeader()}
                    {renderLogo()}
                    {renderForm()}
                    {renderButton()}
                </ScrollView>
            </LinearGradient>
        </View>
    )
}
export default SignUp