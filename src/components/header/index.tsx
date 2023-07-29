import { ReactNode } from "react";
import { View ,Dimensions } from "react-native";
const {width} =Dimensions.get("window")
export function Header({children}:{children:ReactNode}){
    return <View style={{
        backgroundColor:"#F2F5FF",
        maxHeight:240,
        paddingVertical:12,
        paddingTop:120,
        width:width,
        paddingHorizontal:16,
        borderBottomColor:"#F2F5FF",
        borderBottomWidth:1
        }}>
        {children}
    </View>
} 