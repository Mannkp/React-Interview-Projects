import './style.css';
import { useState, useCallback } from "react";

const RandomColorGenerator = () => {
    const [hexColor, setHexColor] = useState("#f8f8f8");
    const [rgbColor, setRGBColor] = useState([248, 248, 248]);

    const generateRandomColor = useCallback(() => {
        const Hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 'A', "B", "C", "D", "E", "F"];

        let HexString = '';
        for (let i = 0; i < 6; i++) {
            HexString += Hex[Math.floor(Math.random() * Hex.length)];
        }
        setHexColor('#' + HexString);

        let rgbArr = [];
        for (let i = 0; i < HexString.length; i += 2) {
            rgbArr.push(HexString.slice(i, i + 2));
        }
        setRGBColor(rgbArr?.map((item) => (parseInt(item, 16))));
    }, [])

    return (
        <>
            <section className={`RandomColorGenerator `} style={{ background: hexColor }} aria-label='Random Color Generator' >
                <h2>Random Color Generator</h2>
                <button onClick={generateRandomColor}>Generate Random Color</button>
                <div className="color">
                    <p>Hex: {hexColor}</p>
                    <p>rgb({rgbColor?.map((item, index) => <span key={index}> {item}{index !== 2 && ', '} </span>)})</p>
                </div>
                <div className="logic">
                    <p>Random Color Picker logic:</p>
                    <p>we take array of 1-9 and A-E (total 16) to represent Hex (base16), use 'Math.floor()' with 'Math.random()*Hex.length' and using this random number as index of Hex array, we can iterate 6 times and create Hex string, now we can parse it to Integer using 'parseInt(string, 16)' and generate RGB values. And vice versa using 'toString(16)'.</p>
                </div>
            </section>
        </>
    )
}

export default RandomColorGenerator