import { TextInput, View} from "react-native";
type InputSerachProps={
    inputState:string,
    inputHandler:(value:string)=>void
}
export function InputSerach({
    inputHandler,
    inputState
}:InputSerachProps){
    return (
        <View style={{
            width:"100%",
            justifyContent:"center",
            alignItems:"center",
            paddingVertical:6,
            height:62,
        }}>
            <TextInput
                style={{
                    width:"100%",
                    height:"100%",
                    borderRadius:8,
                    borderWidth:1,
                    paddingHorizontal:6,
                    borderColor:"gray",
                    backgroundColor:"white"

                }}
                placeholder="Pesquisar"
                value={inputState}
                onChangeText={inputHandler}
            />
        </View>
    )
}