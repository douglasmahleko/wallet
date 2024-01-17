import { View, Text, TouchableOpacity } from "react-native"
import { theme } from "../constants/themes"
import Icon from "react-native-vector-icons/MaterialIcons"
import Ion from "react-native-vector-icons/MaterialCommunityIcons"
import { sizes } from "../constants/sizes"
import { RNCamera } from 'react-native-camera'

function Scan({navigation}){
    function renderHeader(){
        return(
            <View style={{flexDirection:"row", marginTop:sizes.padding*4, paddingHorizontal:sizes.padding*3}}>
                <TouchableOpacity 
                onPress={() => navigation.navigate("Home")}
                style={{width:45, alignItems:"center", justifyContent:"center"}}>
                    <Icon name="close" size={20} />
                </TouchableOpacity>
                <View style={{flex:1, alignItems:"center", justifyContent:"center"}}>
                    <Text style={{fontSize:16, fontWeight:"bold"}}>Scan For Payment</Text>
                </View>
                <TouchableOpacity style={{height:45, width:45, backgroundColor:theme.green, borderRadius:10,
                    alignItems:"center", justifyContent:"center"
                }}>
                    <Icon name="info-outline" size={25} />
                </TouchableOpacity>
            </View>
        )
    }
    function renderScanFocus(){
        return(
            <View style={{flex:1, justifyContent:"center"}}>
                <Icon name="center-focus-weak" size={500} style={{marginTop:"-55%"}} />
            </View>
        )
    }
    function renderPaymentMethods(){
        return(
            <View style={{position:"absolute", bottom:0, left:0, right:0, height:220, borderTopRightRadius:sizes.radius,
                    backgroundColor:theme.white, padding:sizes.padding*3, borderTopLeftRadius:sizes.radius
                }}>
                <Text style={{fontSize:16, fontWeight:"bold"}}>Another Payment Method</Text>
                <View style={{flex:1, flexDirection:"row", alignItems:"flex-start", marginTop:sizes.padding*2}}>
                    <TouchableOpacity style={{flexDirection:"row", alignItems:"center"}}>
                        <View style={{width:40,height:40,borderRadius:10, backgroundColor:theme.lightPurple,
                            alignItems:"center", justifyContent:"center"
                        }}>
                            <Icon name="phone-android" size={25} color={theme.purple} />
                            
                        </View>
                        <Text style={{marginLeft:sizes.padding, fontSize:16, fontWeight:"500"}}>Phone Number</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={{flexDirection:"row", alignItems:"center", marginLeft:sizes.padding}}>
                        <View style={{width:40,height:40,borderRadius:10, backgroundColor:theme.lightGreen,
                            alignItems:"center", justifyContent:"center"
                        }}>
                            <Ion name="barcode" size={25} color={theme.primary} />
                            
                        </View>
                        <Text style={{marginLeft:sizes.padding, fontSize:16, fontWeight:"500"}}>Barcode</Text>
                    </TouchableOpacity>
                </View>
            </View>
        )
    }

    return(
        <View style={{flex:1, backgroundColor:theme.transparent}}>
            {/* <RNCamera
                ref={ref => {
                    this.camera = ref
                }}
                style={{flex:1}}
                captureAudio={false}
                type={RNCamera.Constants.Type.back}
                flashMode={RNCamera.Constants.FlashMode.off}
                androidCameraPermissionOptions={{
                    title:"Permission to use camera",
                    messsage: "Camera is required for barcode scanning",
                    buttonPositive:"OK",
                    buttonNegative:"Cancel"
                }}
            >
                
            </RNCamera> */}
            <View style={{flex:1}}>
            {renderHeader()}
                {renderScanFocus()}
                {renderPaymentMethods()}
            </View>
        </View>
    )
}
export default Scan