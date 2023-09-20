//Nav

import styles from "./Nav.module.css"
import SearchBar from "../searchbar/SearchBar"
import { NavLink, useNavigate } from "react-router-dom";

export default function Nav({onSearch, logOut}) {

    const navigate = useNavigate();

    const randomSearch = () => {
        const randomInt = Math.floor(Math.random() * 826) + 1;
        onSearch(randomInt);
    }

    const handleLogOut = () => {
        navigate("/");
        logOut();
    }

    return (
            <nav>
                <div className={styles.left}>
                <SearchBar onSearch={onSearch}/>
                <button onClick={randomSearch}>Random</button>
                <button onClick={() => navigate("/favorites")}>Favorites</button>
                </div>
                
                <div className={styles.center}>
                <NavLink to={"/about"}>
                <button>About</button>
                </NavLink>
                
                <NavLink to={"/home"}>
                <button>Home</button>
                </NavLink>

                <NavLink to={"/"}>
                    <button onClick={handleLogOut}>Log Out</button>
                </NavLink>
                </div>
            </nav>
    )
}