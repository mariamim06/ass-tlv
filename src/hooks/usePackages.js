import { useEffect } from "react";
import { useState } from "react"

const usePackages = () => {
    const [packages, setPackages] = useState([]);
    useEffect(() =>{
        fetch(('http://localhost:5000/products'))
        .then(res => res.json())
        .then(data => setPackages(data))
    } ,[]);

    return [packages, setPackages];
}

export default usePackages;