import { FlatList, Modal, SafeAreaView,StyleSheet,Text,View} from "react-native"
import {foodPyramid} from "../../server"
import { useCallback, useEffect, useState } from "react"
import type {PropsWithChildren} from 'react';
import { Food } from "../../components/food";
import { InputSerach } from "../../components/search";
import { useKeyboardHeight } from "../../hooks/useKeyboard";
import { Header } from "../../components/header";
import { Abstract } from "../../components/resume";
import { PyramidFoodModal } from "../../components/PyramidFoodModal";
import { FoodGroup } from "../../components/foodGroups";

type ItemProps={
    key: string;
    groups: number[];
    keys: string[][];
    foods: string[][];
    description: string[][]
}
export function Home(){
    const [searchfood,setSearchFood]=useState('')
    const [foods_pyramid,setFoods]=useState(foodPyramid())
    const [modalIsOpen,setModalIsOpen]=useState(false)
    const foods=foodPyramid().pyramid
    const paddingBottom=useKeyboardHeight()
   

    const renderItem=useCallback(({index,item}:{index:number,item:ItemProps})=>{
        let listfoods:any[]=[]
        for(let indexFood in  item.foods){
            listfoods=[...item.foods[indexFood]]
        }
        return(<>
            <FoodGroup props={{index,item}}>
                {listfoods&&listfoods.map((food,i)=><Food key={i} id={`${food}-${i}`} food={food} />)}
            </FoodGroup>
            </>)
    },[])

    function handlerModal(){
        if(modalIsOpen){
            setModalIsOpen(false)
        }else{
            setModalIsOpen(true)
        }
    }

    return (
        <SafeAreaView style={styles.container} >
                <Header>
                <Abstract  handlerModal={handlerModal}  p={foods_pyramid.resume}/>
                <InputSerach inputHandler={setSearchFood} inputState={ searchfood}/>
                </Header>
                <View style={{
                    width:"100%",
                    justifyContent:"center",
                    paddingHorizontal:16
                    }}>
                    <FlatList
                    contentContainerStyle={{
                        paddingTop:20,
                        paddingBottom:130+paddingBottom,
                    }}
                        data={foods}
                        keyExtractor={(item)=>item.key}
                        showsVerticalScrollIndicator={false}
                        renderItem={renderItem}
                    />
                </View>
                <PyramidFoodModal close={handlerModal} content={foods_pyramid} open={modalIsOpen}/>
        </SafeAreaView>
    )


}
const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
    
      justifyContent: 'center',
    },
  });
  