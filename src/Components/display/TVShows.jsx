const TVShows = ({tvshows}) => {
    return (
        <>
            <h4>TV Shows</h4>
            <ul>
                {tvshows.map((show, i) => (
                    <li key={i}>
                        {show}
                    </li>
                ))}
            </ul>
        </>
    );
}

export default TVShows;