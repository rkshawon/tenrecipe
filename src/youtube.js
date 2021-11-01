import React,{useState, useEffect} from 'react'
import './style.css'
import View from './view'
const apiCall = {
    key: "245436d403388a027cb0fca5095c5d7b",
    url: "https://api.edamam.com/",
    id: "9bfd8464"
}
function Youtube() {
    const [data, setData] = useState([])
    const [search, setSearch] = useState('')
    const [query, setQuery] = useState("")

    useEffect(()=>{
        api()
    },[query])

    const api =()=> {
        fetch(`${apiCall.url}search?q=${query}&app_id=${apiCall.id}&app_key=${apiCall.key}`)
        .then(res=>res.json())
        .then(data=>{
            setData(data.hits)
            console.log(data)
        })
    }
    const searchItem = (e)=>{
        if(e.key === "Enter"){
            setQuery(search)
            setSearch('')
        }
    }
    const inputV = e=>{
        setSearch(e.target.value)
        console.log(e.target.value)
    }
    const submitV = ()=>{
        setQuery(search)
        setSearch('')
    }
    return (
        <div className = "container">
                <div className = "search">
                    <input type = "text" value = {search} onChange = {inputV} onKeyPress = {searchItem}/>
                    <button onClick = {submitV}>Search</button>
                </div>
                <div className = "result">
                    {data.map(recipe=>(
                        <View key={recipe.recipe.label} title = {recipe.recipe.label} calories = {recipe.recipe.calories} image = {recipe.recipe.image} mealtype = {recipe.recipe.mealType[0]} description = {recipe.recipe.ingredients} dishType = {recipe.recipe.dishType} dietLabels = {recipe.recipe.dietLabels}/>
                    ))}
                </div>
        </div>
    )
}

export default Youtube
