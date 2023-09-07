//Nav

import styles from "./Nav.module.css"
import SearchBar from "../searchbar/SearchBar"
import { NavLink } from "react-router-dom";

export default function Nav({onSearch}) {

    const randomSearch = () => {
        const randomInt = Math.floor(Math.random() * 826) + 1;
        onSearch(randomInt);
    }

    return (
            <nav>
                <div className={styles.left}>
                <SearchBar onSearch={onSearch}/>
                <button onClick={randomSearch}>Random</button>
                </div>
                
                <div className={styles.center}>
                <NavLink to={"/about"}>
                <button>About</button>
                </NavLink>
                
                <NavLink to={"/home"}>
                <button>Home</button>
                </NavLink>
                </div>
            </nav>
    )
}