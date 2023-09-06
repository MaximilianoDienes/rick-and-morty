//Nav

import SearchBar from "./SearchBar";

export default function Nav(props) {

    const randomSearch = () => {
        const randomInt = Math.floor(Math.random() * 826) + 1;
        console.log(randomInt);
        props.onSearch(randomInt);
    }

    return (
            <nav>
                <SearchBar onSearch={props.onSearch}/>
                <button onClick={randomSearch}>Random</button>
            </nav>
    )
}