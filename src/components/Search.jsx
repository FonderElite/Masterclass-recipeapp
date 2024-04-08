import { useEffect, useState } from "react"
import styles from "../modules/search.module.css"
export default function Search({foodData,setFoodData}){
    const [query,setQuery] = useState("pizza");
    const URL = "https://api.spoonacular.com/recipes/complexSearch";
    const API_KEY = "";
    useEffect(()=>{
       async function fetchFood(){
const res = await fetch(`${URL}?query=${query}&apiKey=${API_KEY}`);
const data = await res.json();
// console.log(data);
setFoodData(data.results);
       }
       fetchFood();
    },[query])

    return(
        <div className={styles.searchContainer}>
            <input className={styles.input} type="text" value={query} onChange={(e)=>setQuery(e.target.value)}/>
        </div>
    )
}
