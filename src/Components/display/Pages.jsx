
const Pages = ({changePage}) => {
    return (
        <div className="pages">
            <button id="1" onClick={changePage}>1</button>
            <button id="2" onClick={changePage}>2</button>
            <button id="3" onClick={changePage}>3</button>
            <button id="4" onClick={changePage}>4</button>
            <button id="5" onClick={changePage}>5</button>
            <button id="6" onClick={changePage}>6</button>
            <button id="7" onClick={changePage}>7</button>
            <button id="8" onClick={changePage}>8</button>
            <button id="9" onClick={changePage}>9</button>
            <button id="10" onClick={changePage}>10</button>
        </div>
    );
}

export default Pages;