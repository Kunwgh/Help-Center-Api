import React from 'react';
import SearchBar from './SearchBar';

const Header = ({ searchTerm, setSearchTerm }) => {
    return (
        <header>
            <h1>How can we help?</h1>
            <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
        </header>
    );
};

export default Header;
