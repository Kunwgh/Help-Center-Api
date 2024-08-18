import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Header from './components/Header';
import CardList from './components/CardList';

const App = () => {
    const [cards, setCards] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');

    useEffect(() => {
        const fetchCards = async () => {
            try {
                const response = await axios.get('/cards');
                setCards(response.data);
            } catch (error) {
                console.error('Error fetching cards:', error);
            }
        };

        fetchCards();
    }, []);

    const filteredCards = cards.filter(card =>
        card.title.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <div className="app">
            <Header searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
            <CardList cards={filteredCards} />
        </div>
    );
};

export default App;

