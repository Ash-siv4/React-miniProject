import axios from "axios";
import { useEffect, useState } from "react";
import Grid from "./display/Grid";
import Pages from "./display/Pages";
import SearchBar from "./search/SearchBar";

const Disney = () => {
    
    const [query, setQuery] = useState("");
    const [data, setData] = useState([]);
    const [isLoaded, setIsLoaded] = useState(false);
    const [page, setPage] = useState(1);

    useEffect(() => {
        axios.get(`http://api.disneyapi.dev/characters?page=${page}`)
        .then((res) => {
            setData(res.data.data);
            setIsLoaded(true); 
        }).catch((err) => {
            console.log(err.message);
            setIsLoaded(true);
        });
    }, [page]);

    const changePage = (e) => setPage(e.target.id);

    const queryHandler = (e) => setQuery(e.target.value);

    if (isLoaded) {
        return (
            <>
                <Grid data={data} query={query}/>
                <div className="container-fluid pages-container">
                    <Pages changePage={changePage}/>
                    <SearchBar query={query} queryHandler={queryHandler}/>
                </div>
            </>
        );
    } else {
        return (
            <h1> Loading... </h1>
        );
    }
        
}

export default Disney;