import { useEffect, useState } from "react"
import { Keyboard } from "react-native"

export function useKeyboardHeight(){
    const [height, setHeigth]=useState(0)
    useEffect(()=>{
        const keyboardIsVisibleListerner=Keyboard.addListener("keyboardDidShow",(keyboardEvent)=>{
            setHeigth(keyboardEvent.endCoordinates.height)
        })
        const keyboardIsHideListerner=Keyboard.addListener("keyboardDidHide",(keyboardEvent)=>{
            setHeigth(0)
        })
        return()=>{
            keyboardIsHideListerner.remove()
            keyboardIsVisibleListerner.remove()
        }
    },[])
    return height
}