import { useEffect } from "react"

const useTitle = title =>{
    useEffect(()=>{
        document.title = `${title} - a1 photography`
    },[title])
}


export default useTitle