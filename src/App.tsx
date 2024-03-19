const App = () => {
    const [x, y] = [10, 20];
    const names = ["Brad", "Mary", "Joe", "Sarah"];
    const loggedIn = true;
    const styles = {
color:'red', fontSize:24
    }
    return (
        <>
            <div className="text-5xl">App</div>
            <p style={styles}>Hello {names[0]}</p>
            <p>
                The sum of {x} and {y} is {x + y}
            </p>
            <ul>
                {names.map((name, index) => (
                    <li key={index}>{name}</li>
                ))}
            </ul>
            {loggedIn && <h1>Hello Member</h1>}
        </>
    );
};

export default App;
