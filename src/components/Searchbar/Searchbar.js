import React from 'react';
import './Searchbar.css';
import { useDispatch, useSelector } from 'react-redux';
import { setSearchTerm, setSortBy, selectSearchTerm, selectSortBy } from '../../features/search/searchSlice';

function Searchbar({}) {
    const dispatch = useDispatch();
    const searchTerm = useSelector(selectSearchTerm);
    const sortBy = useSelector(selectSortBy);

    const handleSearchChange = (e) => {
        dispatch(setSearchTerm(e.target.value));
    };

    const handleSortChange = (e) => {
        dispatch(setSortBy(e.target.value));
    };

    return (
        <form className="searchbar">
            <input
                type="text"
                placeholder="Search"
                onChange={handleSearchChange}
            />
            {/* <button type="submit">Search</button> */}
        </form>
    );
}

export default Searchbar;
