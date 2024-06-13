'use client'

import { useState, useEffect } from 'react'
import axios from 'axios'
import Image from 'next/image'

export default function Recipe({id}){
    const [receta, setReceta] = useState({})

    useEffect(() => {
        const getInfo = async () => {
            try {
                const response = await axios.get(
                    `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`
                )
                console.log(response.data.meals[0]);
                setReceta(response.data.meals[0]);
            } catch (error) {
                console.log(error);
            }
        }
        getInfo();
    }, [id])
    return(
        <div>
        <h1>{receta.strMeal}</h1>
        <p>{receta.strInstructions}</p>
        <Image 
            src={receta.strMealThumb}
            width={600}
            height={600}
            alt={receta.strMeal}
        />
        <p>Ingredientes (PREGUNTARLE AL PROFE)(Mezclar en una misma oracion Cantidad e Ingrediente)</p>
        </div>

    )
}