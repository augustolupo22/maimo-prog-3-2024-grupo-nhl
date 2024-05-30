'use client'
import { useState, useEffect } from 'react';
import axios from 'axios';
import Image from 'next/image';
import styles from '@/app/components/CardsGrid/CardsGrid.module.css'

const CardsGrid = () => {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        setLoading(true);
        const getData = async () => {
            try {
                const response = await axios.get(
                    'https://www.themealdb.com/api/json/v1/1/search.php?s=Pizza'
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
        <div className={styles.prueba}>
            {loading && <p>Loading ...</p>}
            {!loading && data.length > 0 && (
                <> 
                    <Image
                        src={data[0].strMealThumb}
                        width={200}
                        height={200}
                        alt={data[0].strMeal}
                    />
                    <h2>{data[0].strMeal}</h2>
                </>
            )}
        </div>
    );
};

export default CardsGrid;