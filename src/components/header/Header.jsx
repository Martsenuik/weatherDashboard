import "../header/header.css";
import logo from "../../images/svg/logo.svg";
import user from "../../images/svg/user.svg";
import { NavListData } from "./navListData";
import { Modal } from "./modal/Modal";

export const Header = () => {
  return (
    <section className="header">
      <img className="logo-svg" src={logo} alt="logo" />

      <nav className="header-navigation">
        <ul className="nav-list">
          {NavListData.map(({ id, text, link }) => {
            return (
              <li className="nav-item" key={id}>
                <a href={link}>{text}</a>
              </li>
            );
          })}
        </ul>
      </nav>

      <div className="header-right-box">
        <Modal />

        <img className="user-svg" src={user} alt="user" />
      </div>
    </section>
  );
};
