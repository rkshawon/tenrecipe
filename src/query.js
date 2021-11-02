import React,{useState, useEffect} from 'react'
import './style.css'
import View from './view'
const apiCall = {
    key: "245436d403388a027cb0fca5095c5d7b",
    url: "https://api.edamam.com/",
    id: "9bfd8464"
}
function Query() {
    const [data, setData] = useState([])
    const[valited, setValitation] = useState([])
    const [search, setSearch] = useState('')
    const [query, setQuery] = useState("apple")
    const [load, setLoader] = useState(true)

    useEffect(()=>{
        api()
    },[query])

    const api =()=> {
        fetch(`${apiCall.url}search?q=${query}&app_id=${apiCall.id}&app_key=${apiCall.key}`)
        .then(res=>res.json())
        .then(data=>{
            setData(data.hits)
            setValitation(data)
            setLoader(false)
            console.log(data)
        })
    }
    const searchItem = (e)=>{
        if(e.key === "Enter"){
            setLoader(true)
            setQuery(search)
            setSearch('')
        }
    }
    const inputV = e=>{
        setSearch(e.target.value)
        console.log(e.target.value)
    }
    const submitV = ()=>{
        setLoader(true)
        setQuery(search)
        setSearch('')   
    }
    const loading = ()=>{
        console.log(load)  
    }
    return (
        (!load)?(
        <div className = "container">
                <div className = "search">
                    <input type = "text" value = {search} onChange = {inputV} onKeyPress = {searchItem} placeholder ="Search here..."/>
                    <button onClick = {submitV}>Search</button>
                </div>
                {(valited.more)?
                (<div className = "result">
                {console.log("load", load)}
                    {data.map(recipe=>(
                        <View key={recipe.recipe.label} title = {recipe.recipe.label} calories = {recipe.recipe.calories} image = {recipe.recipe.image} mealtype = {recipe.recipe.mealType[0]} description = {recipe.recipe.ingredients} dishType = {recipe.recipe.dishType} dietLabels = {recipe.recipe.dietLabels}/>
                    ))}
                </div>)
                :(<div><h3>Try different keywords</h3></div>)}
        </div>)
        :(<div className = "loader">Loading.{loading()}</div>)
    )
}

export default Query
