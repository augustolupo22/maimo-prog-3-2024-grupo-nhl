'use client'
import { useState, useEffect } from 'react';
import axios from 'axios';
import Image from 'next/image';
import styles from './CardsGrid.module.css';

const CardsGrid = () => {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        setLoading(true);
        const getData = async () => {
            try {
                const response = await axios.get(
                    'https://www.themealdb.com/api/json/v1/1/filter.php?c=Lamb'
                );
                setData(response.data.meals);
                setLoading(false);
            } catch (error) {
                console.error("Error fetching data: ", error);
                setLoading(false);
            }
        };
        getData();
    }, []);

    return (
        <div>
            <h1 className={styles.welcome}>Bienvenido a Ver las Comidas</h1>
            {loading && <p>Loading ...</p>}
            {!loading && (
                <div className={styles.grid}>
                    {data.map((item, index) => (
                        <div key={item.idMeal} className={`${styles.card} ${index < 3 ? styles.featured : ''}`}>
                            <Image
                                src={item.strMealThumb}
                                width={400} 
                                height={400} 
                                alt={item.strMeal}
                                className={styles.image}
                            />
                            <h2>{item.strMeal}</h2>
                            <button className={styles.button}>Ver más</button>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
};

export default CardsGrid;