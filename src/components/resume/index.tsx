import { Pressable, Text, View } from "react-native";

import { MaterialCommunityIcons } from '@expo/vector-icons';
type ResumeProps={
    p:string,
    handlerModal:()=>void
}
export function Abstract({p,handlerModal}:ResumeProps){
    return (
    <View style={{
        flexDirection:"row",
        alignItems:"center",
        justifyContent:"space-between",
        width:"100%"

    }}>
        <View style={{
            width:"80%",
            justifyContent:"center",
            alignItems:"flex-start"
        }}>
            <Text numberOfLines={3}>{p}</Text>
        </View>
        <View style={{
            width:"20%",
            justifyContent:"center",
            alignItems:"center"
        }}>
            <Pressable onPress={handlerModal} style={{
            borderRadius:8,
            borderColor:"gray",
            borderWidth:1,
            width:42,
            height:42,
            justifyContent:"center",
            alignItems:"center"
        }}>
            <MaterialCommunityIcons name="pyramid" size={32} color="green" />
        </Pressable>
        </View>
        
        
    </View>)
}