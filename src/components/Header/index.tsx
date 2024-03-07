import { BiBell, BiInfoCircle } from "react-icons/bi";
import "./styles.scss";
import logo from "./assets/logo.png";

export default function Header(): JSX.Element {
  return (
    <header>
      <BiInfoCircle className='headerIcons'/>
      <img src={logo} alt="" />
      <BiBell className='headerIcons'/>
    </header>
  );
}
