import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Home from '../screens/home'
import Scan from '../screens/scan'
import Icon from "react-native-vector-icons/MaterialIcons";
import { View} from "react-native"
import { theme } from "../constants/themes";

const Tab = createBottomTabNavigator()

function BottomTab(){
    return(
        <Tab.Navigator screenOptions={{
            headerShown : false,
            tabBarShowLabel:false,
            style:{
                position: 'absolute',
                bottom:0,
                left:0,
                right:0,
                elevation:0,
                backgroundColor:"transparent"
            }
        }}>
            <Tab.Screen name="Home" component={Home}
                
                options={{
                    tabBarIcon : ({focused}) => (
                        <Icon name="read-more" size={25} color={ focused ? "coral" : "#0c381f" } />
                    )
                }}
            />
            <Tab.Screen name="Scan" component={Scan} 
                options={{
                    tabBarIcon : ({focused}) => (
                        <View style={{height:60,
                            width:60,
                            justifyContent:"center",
                            alignItems:"center",
                            backgroundColor:theme.lime,
                            borderColor:"coral",
                            borderWidth:2,
                            borderRadius:30,
                            top:-25,
                            elevation:5}}>
                            <Icon name="qr-code-scanner" size={25} color={ focused ? "coral" : "#0c381f" } />
                        </View>
                    )
                }}
            />
            <Tab.Screen name="User" component={Home} 
                options={{
                    tabBarIcon : ({focused}) => (
                        <Icon name="account-box" size={25} color={ focused ? "coral" : "#0c381f" } />
                    )
                }}
            />
        </Tab.Navigator>
    )
}

export default BottomTab