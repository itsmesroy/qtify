import React from "react";
import { Link } from "react-router-dom";
import Button from "../Button/Button";
import Logo from "../Logo/Logo";
import SearchBar from "../SearchBar/SearchBar";
import styles from "./NavBar.module.css";

function Navbar({ searchData }) {
  return (
    <nav className={styles.navbar}>
      <Link to="/">
        <Logo />
      </Link>
      <SearchBar
        placeholder="Search a song of your choice"
        searchData={searchData}
      />
      <Button children={"Give Feedback"}/>
    </nav>
  );
}

export default Navbar;
