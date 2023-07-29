import { ReactNode } from "react";
import { Text, View } from "react-native";

export function FoodGroup({props,children}:{props:any,children: ReactNode}){
    const {index, item} =props
    return (
        <View key={index}>
            <View style={{height:42, justifyContent:"center", alignItems:"flex-start"}}>
                <Text>{item.key.replaceAll("_"," ").toUpperCase()}</Text>
            </View>
            <View key={item.key} style={{
                flexDirection:"row",
                rowGap:10,
                columnGap:10,
                flex: 1,
                marginTop: 8,
                flexWrap: 'wrap',
                alignContent: 'flex-start',
                width:"100%",
                marginBottom:1,
            }}>
                {children}
            </View>
            </View>
    )
}