import React from "react";
import "./searchbar.css";

export const Searchbar = (props) => {

    return ( 
    <div className="searchbar-container">
        <div className="search-bar">
            <input type="text" className="search-bar-input" placeholder="Search for..."></input>
            <button className="searchBtn">
                <span class="material-symbols-outlined">search</span>
            </button>
        </div>
    </div>
    )
}
