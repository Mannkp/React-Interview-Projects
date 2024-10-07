import "./style.css";

function LightDarkMode({ mode, setMode }) {

    const handleThemeToggle = () => {
        mode.toLowerCase() === 'light' ? setMode("dark") : setMode("light");
    }

    return (
        <section className="LightAndDarkMode">
            <h2>Light and Dark Mode - {mode}</h2>
            <button onClick={handleThemeToggle}>Toggle theme</button>
        </section>
    )
}

export default LightDarkMode