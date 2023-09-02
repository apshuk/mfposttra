import React from "react";
import { Link } from "react-router-dom";
import Button from "@mui/material/Button";
import styles from "../styles/Header.css";

const Header = () => {
  return (
    <nav>
      <ul className={styles.navList}>
        <li>
          <Button variant="contained">
            <Link className={styles.navLink} to="/">Home</Link>
          </Button>
        </li>
        <li>
          <Button variant="contained">
            <Link className={styles.navLink} to="/pricing">Pricing</Link>
          </Button>
        </li>
      </ul>
    </nav>
  );
};

export default Header;
