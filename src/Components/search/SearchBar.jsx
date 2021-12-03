
const SearchBar = ({ query, queryHandler }) => {

    return (
        <>
            <label id="search">Search</label>
            <input
                type = "text"
                value = {query}
                onChange = {queryHandler}
            />
        </>
    );
}

export default SearchBar;