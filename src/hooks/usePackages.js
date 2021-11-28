import { useEffect } from "react";
import { useState } from "react"

const usePackages = () => {
    const [packages, setPackages] = useState([]);
    useEffect(() =>{
        fetch(('https://sheltered-beach-22453.herokuapp.com/products'))
        .then(res => res.json())
        .then(data => setPackages(data))
    } ,[]);

    return [packages, setPackages];
}

export default usePackages;