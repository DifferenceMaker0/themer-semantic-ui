import useState from "react"
import "../../css/main.css"
import Callback from "../lib/callback"


//Parent
export default function Bunghole() {
  const [UIcolor, setUIColor] = useState(null);
  //Callback
  const getColor = (color) => {
    setUIColor(color);
  };

  return (
    <div className="Bunghole">
      <div
        className="Bunghole_color_container"
        style={{ background: `${UIcolor}` }}
      ></div>
      <Callback getColor={getColor} />
    </div>
  );
}