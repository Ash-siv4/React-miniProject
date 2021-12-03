const VideoGames = ({ games }) => {
    return (
        <>
            <h4>Video Games</h4>
            <ul>
                {games.map((game, i) => (
                    <li key={i}>
                        {game}
                    </li>
                ))}
            </ul>
        </>
    );
}

export default VideoGames;