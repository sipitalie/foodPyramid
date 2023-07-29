import { Image, Modal, Text, TouchableOpacity, View, useWindowDimensions } from "react-native";
import { Ionicons } from '@expo/vector-icons';
import foodPyramidImg from "../../assets/foodPyramid.png";
type PyramidFoodModal={
    open:boolean,
    close:()=>void
    content:any
} 
export function PyramidFoodModal({open,close, content}:PyramidFoodModal){
    const {width,height}=useWindowDimensions()
    return<Modal visible={open}
    transparent
    animationType="slide"
    onRequestClose={close}

    style={{
        flex:1,
        paddingHorizontal:16,
        height,
        width,
        justifyContent:"center",alignItems:"center"}}
    
    >
        <View style={{
            flex:1,
            paddingHorizontal:16,
            height,
            width,
            backgroundColor:"rgba(0,0,0,0.5)",
            justifyContent:"center",
            alignItems:"center"
            }}>
                <View style={{
            
            height:height/1.5,
            width:"100%",
            borderRadius:8,
            borderColor:"gray",
            borderWidth:1,
            backgroundColor:"white",
            padding:12,
            justifyContent:"space-between"
            }}>
            <View style={{
                flexDirection:"row",
            height:"5%",
            width:"100%",
            justifyContent:"flex-end",
            alignItems:"center"
            }}>
            <TouchableOpacity onPress={close}>
            <Ionicons name="close" size={24} color="red" />
            </TouchableOpacity>
            </View>
            <Text>{
            content.description}
            </Text>
            <View style={{
                height:"80%",
                
            }}>
                <Image  resizeMode="contain" style={{width:"100%", height:"100%"}}  source={foodPyramidImg}/>
            </View>
        </View>
        </View>
        
    </Modal>

}