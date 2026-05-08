import "../modalMobileVersion/modalMobileVersion.css";
import user from "../../../images/svg/user.svg";
import { useState } from "react";
import { NavListData } from "../navListData";

export const ModalMobileVersion = ({
  mobileModalOpen,
  setMobileModalOpen,
  setMobileModalSignOpen,
}) => {
  if (!mobileModalOpen) return null;
  return (
    <>
      <div id="myModal" className="mobile-modal">
        <div className="mobile-modal-content">
          <nav>
            <ul className="modal-mobile-nav-list">
              {NavListData.map(({ id, text, link }) => {
                return (
                  <li className="modal-nav-text" key={id}>
                    <a href={link}>{text}</a>
                  </li>
                );
              })}
            </ul>
          </nav>

          <div className="header-mobile-right-box">
            <button
              className="mobile-modal-btn"
              onClick={() => {
                setMobileModalSignOpen(true);
              }}
            >
              Sign Up
            </button>
            <img className="mobile-modal-user-svg" src={user} alt="user" />
          </div>
        </div>
      </div>
    </>
  );
};
