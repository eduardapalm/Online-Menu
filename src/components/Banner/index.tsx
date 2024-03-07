import "./styles.scss";
import BurgerPic from "./assets/BurgerPic.png";

export default function Banner(): JSX.Element {
  return (
    <div className="bannerHolder">
      <div className="imageBg">
        <img src={BurgerPic} alt="" />
      </div>
      <div className="textBg">
        <h1>
          CHEFÃO
        </h1>
        <h2>LANCHES</h2>
        <h3>Delivery</h3>
      </div>
    </div>
  );
}
