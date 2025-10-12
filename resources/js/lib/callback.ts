import useState from "react"

const Callback = ({ getColor }) => {
    const [activecolor, setActiveColor] = useState();

    const handleChange = (e) => {
        const { value } = e.target;
        setActiveColor(value);
        getColor(value);
    };

    return (
        <input type="text" id="input" aria-label="input" onChange={handleChange} value={activeColor} />
    );
};

export default callback;