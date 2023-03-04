import React, {useState, useEffect} from 'react'

const useDebounce = (value, delay) => {
    console.log("called")

    const [debounce, setDebounce] = useState(value);
   
    useEffect(()=>{
        const handle = setTimeout(() => {
        setDebounce(value);
        }, delay);
        return(clearTimeout(handle)) 
        console.log("use Debounce UseEffect called")
            
        
    }, [value, delay])

    return debounce
}

export default useDebounce
