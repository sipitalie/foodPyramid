import { View, Text } from "react-native"


type PropsFood={
    food:string,
    id: number|string

}
export function Food({food,id}:PropsFood){
    return (
    <View key={id} style={{
        width:120,                    
        height:120,
        borderColor:"gray",
        borderRadius:8,
        borderWidth:1,
        justifyContent:"center",
        alignContent:"center",
        
        backgroundColor:"white"
    }}>
        <Text style={{textAlign:"center"}}>{`${food}`.toUpperCase()}</Text>
        </View>
    )
}