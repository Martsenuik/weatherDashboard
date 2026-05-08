import "../header/header.css";
import logo from "../../images/svg/logo.svg";
import user from "../../images/svg/user.svg";
import menuArrow from "../../images/svg/menuArrow.svg";
import { NavListData } from "../header/navListData";
import { Modal } from "./modal/Modal";
import { useState } from "react";
import { ModalMobileVersion } from "./modalMobileVersion/ModalMobileVersion";

export const Header = () => {
  const [mobileModalOpen, setMobileModalOpen] = useState(false);
  const onClickModal = () => {
    setMobileModalOpen((prev) => !prev);
  };
  return (
    <>
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
        <p className="header-mobile-menu" onClick={onClickModal}>
          Menu <img className="header-arrow" src={menuArrow} alt="menuArrow" />
        </p>

        <div className="header-right-box">
          <Modal />

          <img className="user-svg" src={user} alt="user" />
        </div>
      </section>
      <ModalMobileVersion
        mobileModalOpen={mobileModalOpen}
        setMobileModalOpen={setMobileModalOpen}
      />
    </>
  );
};
