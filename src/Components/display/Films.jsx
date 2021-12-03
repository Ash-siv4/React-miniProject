
const Films = ({films}) => {

    return (
        <>
            <h4>Films</h4>
            <ul>
                {films.map((film, i) => (
                    <li key={i}>
                        {film}
                    </li>
                ))}
            </ul>
        </>
    );
}

export default Films;