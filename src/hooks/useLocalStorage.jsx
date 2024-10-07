import { useEffect } from "react";
import { useState } from "react"

const useLocalStorage = (key, defaultValue) => {

    const [value, setValue] = useState(JSON.parse(localStorage.getItem(key)) || (defaultValue).toString());

    useEffect(() => {
        localStorage.setItem(key, JSON.stringify(value));
    }, [key, value])

    return [value, setValue]
}

export default useLocalStorage