import React from 'react'
import './view.js'

function View({title,calories,image,mealtype,description, dietLabels, dishType}) {
    const capitalize = (str)=>{
        return str.charAt(0).toUpperCase() + str.substring(1, str.length)
    }
    const roundUp = (value)=>{
        return Math.floor(value)
    }
    return (
        <div className = 'view'>
        <h2>Name: {capitalize(title)}</h2>
            <div className = 'main'>
                <img src = {image} alt = ""/>
                <div className = "info">
                <h2>Description: </h2>
                    <h4>Meal Type: {capitalize(mealtype)}</h4>
                    <h4>Diet Labels: {dietLabels}</h4>
                    <h4>Dish Type: {dishType}</h4>
                    <h4>Calories: {roundUp(calories)}</h4>
                </div>
            </div>
            <div className = "others">
            <h5>Ingredients: {description.map(des=>(
                <li>{des.text}</li>
            ))}</h5>
            </div>
        </div>
    )
}

export default View
