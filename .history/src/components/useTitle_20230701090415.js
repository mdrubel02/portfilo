import { useEffect } from "react"

export const useTitle=(title)=>{
    useEffect(()=>{
        document.title=`Md Ibrahim || ${title}`
    },[title])
}