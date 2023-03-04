import { useEffect } from "react";

const useCustomHook = (count)=>{
    useEffect(()=>{
        document.title = `Count(${count})`
    },[count]);
}

export default useCustomHook;