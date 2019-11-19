import React from 'react';
import classes from './SearchComponent.css';

const SearchComponent = props => {
    return (
        <div className={classes.searchContainer}>
            <select style={{borderTopLeftRadius: '10px'}}>
                <option>New & Used</option>
            </select>
            <select>
                <option>All Makes</option>
            </select>
            <select style={{borderTopRightRadius: '10px'}}>
                <option>All Models</option>
            </select>
            <select style={{borderBottomLeftRadius: '10px'}}>
                <option>No Max Price</option>
            </select>
            <div className={classes.zip}>
                <select>
                    <option>10 miles from</option>
                </select>
                <input type="text" value="33130" />
            </div>
            <button style={{borderBottomRightRadius: '10px'}}>Search</button>            
        </div>
    )
}

export default SearchComponent