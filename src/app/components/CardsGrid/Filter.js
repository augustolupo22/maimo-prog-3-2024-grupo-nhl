'use client';

import { useState, useEffect } from 'react';
import axios from 'axios';
import styles from './Filter.module.css';

const Filter = ({ setCategory }) => {
    const [categories, setCategories] = useState([]);

    useEffect(() => {
        const fetchCategories = async () => {
            try {
                const response = await axios.get('https://www.themealdb.com/api/json/v1/1/list.php?c=list');
                setCategories(response.data.meals);
            } catch (error) {
                console.error('Error fetching categories: ', error);
            }
        };

        fetchCategories();
    }, []);

    const handleCategoryChange = (event) => {
        setCategory(event.target.value);
    };

    return (
        <div className={styles.filterContainer}>
            <label className={styles.label} htmlFor="category">Elige una categoría:</label>
            <select className={styles.select} id="category" onChange={handleCategoryChange}>
                <option value="">Todas</option>
                {categories.map((category) => (
                    <option key={category.strCategory} value={category.strCategory}>
                        {category.strCategory}
                    </option>
                ))}
            </select>
        </div>
    );
};

export default Filter;
