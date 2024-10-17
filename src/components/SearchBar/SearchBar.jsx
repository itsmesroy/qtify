import React from "react";

import SearchIcon from  "../../assets/SearchIcon.png"
import styles from "./SearchBar.module.css";

const SearchBar = ({search}) => {

    return (
        <form className={styles.wrapper}>
            <input
                name="search"
                className={styles.search}
                placeholder={search}
            />
            <button className={styles.searchButton} type="submit">
                <img src={SearchIcon} alt="Search" />
            </button>
            </form>
    );
}

export default SearchBar;