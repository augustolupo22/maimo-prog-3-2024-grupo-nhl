'use client';
import { useState, useEffect } from 'react';
import axios from 'axios';
import Image from 'next/image';
import styles from './CardsGrid.module.css';
import Link from 'next/link';
import Filter from './Filter'; // Asegúrate de que esta ruta es correcta

const API_URL = 'https://www.themealdb.com/api/json/v1/1/filter.php?';

const CardsGrid = () => {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [category, setCategory] = useState('');

    useEffect(() => {
        setLoading(true);
        const getData = async () => {
            try {
                const url = category 
                    ? `${API_URL}c=${category}`
                    : `${API_URL}i=sugar`;
                const response = await axios.get(url);
                setData(response.data.meals);
                setLoading(false);
            } catch (error) {
                console.error("Error fetching data: ", error);
                setLoading(false);
            }
        };
        getData();
    }, [category]);

    return (
        <div>
            <h1 className={styles.welcome}>Bienvenido a Ver las Comidas</h1>
            <Filter setCategory={setCategory} />
            {loading && <p>Loading ...</p>}
            {!loading && (
                <div className={styles.grid}>
                    {data.map((item, index) => (
                        <div key={item.idMeal} className={`${styles.card} ${index < 3 ? styles.featured : ''}`}>
                            <Link href={`/meal/${item.idMeal}`} legacyBehavior>
                            <a>
                                <Image
                                    src={item.strMealThumb}
                                    width={400} 
                                    height={400} 
                                    alt={item.strMeal}
                                    className={styles.image}
                                />
                                <h2>{item.strMeal}</h2>
                            </a>
                            </Link>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
};

export default CardsGrid;
