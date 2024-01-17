import { View, Text, SafeAreaView, FlatList, TouchableOpacity, Image, Touchable } from "react-native"
import { theme } from "../constants/themes"
import { useState } from "react"
import { sizes } from "../constants/sizes"
import Icon from "react-native-vector-icons/MaterialIcons"


function Home(){
    const featuresData = [
        {
            id : 1,
            color:theme.purple,
            icon:"cloud-download",
            description:"Top Up",
            backgroundColor:theme.lightPurple
        },
        {
            id : 2,
            color:theme.yellow,
            icon:"voicemail",
            description:"Transfere",
            backgroundColor:theme.lightYellow
        },
        {
            id : 3,
            color:theme.primary,
            icon:"cloud",
            description:"Internet",
            backgroundColor:theme.lightGreen
        },
        {
            id : 4,
            color:theme.red,
            icon:"wallet-travel",
            description:"Wallet",
            backgroundColor:theme.lightRed
        },
        {
            id : 5,
            color:theme.yellow,
            icon:"payments",
            description:"Bill",
            backgroundColor:theme.lightYellow
        },
        {
            id : 6,
            color:theme.purple,
            icon:"file-download",
            description:"Top Up",
            backgroundColor:theme.lightPurple
        },
        {
            id : 7,
            color:theme.primary,
            icon:"videogame-asset",
            description:"Games",
            backgroundColor:theme.lightGreen
        },
        {
            id : 8,
            color:theme.purple,
            icon:"read-more",
            description:"More",
            backgroundColor:theme.lightPurple
        },
    ]
    const specialPromosData = [
        {
            id : 1,
            img : "../assets/images/promoBanner.jpeg",
            title:"Bonus CashBack1",
            description : "Dont miss it. Grab it Now" 
        },
        {
            id : 2,
            img : "../assets/images/promoBanner.jpeg",
            title:"Bonus CashBack2",
            description : "Dont miss it. Grab it Now" 
        },
        {
            id : 3,
            img : "../assets/images/promoBanner.jpeg",
            title:"Bonus CashBack3",
            description : "Dont miss it. Grab it Now" 
        },
        {
            id : 4,
            img : "../assets/images/promoBanner.jpeg",
            title:"Bonus CashBack4",
            description : "Dont miss it. Grab it Now" 
        },
    ]
    const [features, setFeatures] = useState(featuresData)
    const [specialPromos, setSpecialPromos] = useState(specialPromosData)
    function renderHeader(){
        return(
            <View style={{flexDirection:"row", marginVertical:sizes.padding*2, paddingTop:20}}>
                <View style={{flex:1}}>
                    <Text style={{fontSize:20, fontWeight:"bold"}}>Hello!</Text>
                    <Text style={{fontSize:18, fontWeight:"500", color:theme.gray}}>By Douglas</Text>
                </View>
                <View style={{justifyContent:"center", alignItems:"center"}}>
                    <TouchableOpacity style={{height:40, width:40, backgroundColor:theme.lightGray, justifyContent:"center", alignItems:"center"}}>
                        <Icon name="notifications-none" size={20} color={theme.secondary} />
                        <View style={{position:"absolute", top:-5, right:-5, height:10, width:10,borderRadius:5, backgroundColor:theme.red}}>

                        </View>
                    </TouchableOpacity>
                </View>
            </View>
        )
    }
    function renderBanner(){
        return(
            <View style={{height:120, borderRadius:20}}>
                <Image source={require("../assets/images/promo.jpeg")} resizeMode="contain" style={{borderRadius:20, 
                    width:"100%", height:"100%"
                }} />
            </View>
        )
    }
    function renderFeatures(){
        const Header = () => {
            return(
                <View style={{marginBottom:sizes.padding*2}}>
                    <Text style={{fontSize:20, fontWeight:"bold"}}>Features</Text>
                </View>
            )
        }
        const renderItem = ({item}) => {
            return(
                <TouchableOpacity style={{alignItems:"center", width:60, marginBottom:sizes.padding*2}}>
                    <View style={{height:50, width:50, backgroundColor:item.backgroundColor, 
                        alignItems:"center", justifyContent:"center", borderRadius:20, marginBottom:5
                    }}>
                        <Icon name={item.icon} size={20} color={item.color} />
                    </View>
                    <Text style={{textAlign:"center", flexWrap:"wrap", fontSize:14, fontWeight:"500"}}> {item.description} </Text>
                </TouchableOpacity>
            )
        } 
        return(
            <FlatList 
                ListHeaderComponent={Header}
                data={features}
                numColumns={4}
                keyExtractor={item => `${item.id}`}
                renderItem={renderItem}
                style={{marginTop:sizes.padding*2}}
                columnWrapperStyle={{justifyContent:"space-between"}}
            />
        )
    }
    function renderPromos(){

        const HeaderComponent = () => {
            return(
                <View>
                    {renderHeader()}
                    {renderBanner()}
                    {renderFeatures()}
                    {renderPromoHead()}
                </View>
            )
        }
        const  renderPromoHead = () => {
            return(
                <View style={{flexDirection:"row", marginBottom:sizes.padding}}>
                    <View style={{flex:1}}>
                        <Text style={{ fontSize:18, fontWeight:"bold"}}>Special Promos</Text>
                    </View>
                    <TouchableOpacity>
                        <Text style={{color:theme.gray, fontSize:14, fontWeight:"500"}}>View All</Text>
                    </TouchableOpacity>
                </View>
            )
        }

        const renderItem = ({item}) => {
            return(
                <TouchableOpacity style={{marginVertical:sizes.base, width:sizes.width/2.5}}>
                    <View style={{height:80, backgroundColor:theme.primary, borderTopLeftRadius:20, borderTopRightRadius:20 }}>
                        <Image source={require("../assets/images/bonus.jpeg")} resizeMode="contain" 
                            style={{width:"100%", height:"100%", borderTopLeftRadius:20,
                            borderTopRightRadius:20
                        }}
                        />
                    </View>
                    <View style={{padding:sizes.padding, backgroundColor:theme.lightGray,
                        borderBottomRightRadius:20, borderBottomLeftRadius:10
                    }}>
                        <Text style={{  fontSize:18, fontWeight:"bold"}}> {item.title} </Text>
                        <Text style={{  fontSize:16}}> {item.description} </Text>
                    </View>
                </TouchableOpacity>
            )
        }
        return(
            <FlatList 
                ListHeaderComponent={HeaderComponent}
                numColumns={2}
                data={specialPromos}
                keyExtractor={item => `${item.id}`}
                renderItem={renderItem}
                showsVerticalScrollIndicator={false}
                columnWrapperStyle={{justifyContent:"space-between"}}
                contentContainerStyle={{paddingHorizontal:sizes.padding*3}}
                ListFooterComponent={
                    <View style={{marginBottom:80}}>

                    </View>
                }
            />
        )
    }
    return(
        <SafeAreaView style={{flex:1, backgroundColor:theme.white}}>
            {renderPromos()}
        </SafeAreaView>
    )
}
export default Home

