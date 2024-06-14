'use client';

import { useState, useEffect } from 'react';
import axios from 'axios';
import Image from 'next/image';
import Link from 'next/link'; // Importa Link de next/link
import styles from './Recipe.module.css';

export default function Recipe({ id }) {
    const [receta, setReceta] = useState({});

    useEffect(() => {
        const getInfo = async () => {
            try {
                const response = await axios.get(
                    `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`
                );
                
                console.log(response.data.meals[0]);
                setReceta(response.data.meals[0]);
            } catch (error) {
                console.error("Error fetching recipe: ", error);
            }
        };
        getInfo();
    }, [id]);

    const ingredients = [];
    for (let i = 1; i <= 20; i++) {
        if (receta[`strIngredient${i}`]) {
            ingredients.push(
                <li className={styles["ingredient-item"]} key={i}>
                    {receta[`strMeasure${i}`]} {receta[`strIngredient${i}`]}
                </li>
            );
        }
    }

    return (
        <main className={styles.main}>
        <div className={styles.container}>
                <h1 className={styles.title}>{receta.strMeal}</h1>
                <div className={styles.container_inferior}>
            <div className={styles["left-section"]}>
                <Image 
                    src={receta.strMealThumb}
                    width={500}
                    height={500}
                    alt={receta.strMeal}
                    className={styles.image}
                />
            </div>
            <div className={styles.details}>
                <h2>Receta</h2>
                <p className={styles.instructions}>{receta.strInstructions}</p>
                <h2>Ingredientes</h2>
                <ul className={styles.ingredients}>
                    {ingredients}
                </ul>
                
                <Link href="/" className={styles.button}>Volver</Link>
            </div>
                </div>
        </div>
        </main>
    );
}