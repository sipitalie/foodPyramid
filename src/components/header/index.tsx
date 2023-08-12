import { ReactNode } from "react";
import { View ,Dimensions } from "react-native";
const {width,height} =Dimensions.get("window")
export function Header({children}:{children:ReactNode}){
    //height/2.5===height/100*40)
    return <View style={{
        backgroundColor:"#F2F5FF",
        maxHeight:height/2.5,
        paddingVertical:12,
        paddingTop:220,
        width:width,
        paddingHorizontal:16,
        borderBottomColor:"#F2F5FF",
        borderBottomWidth:1
        }}>
        {children}
    </View>
} 