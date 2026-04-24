import { useState } from "react";
import "../modal/modal.css";

export const Modal = () => {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <>
      <button
        className="header-button "
        onClick={() => {
          setModalOpen(true);
        }}
      >
        Sign Up
      </button>
      {modalOpen && (
        <div id="myModal" className="modal">
          <div className="modal-content">
            <p className="modal-title">Sign up</p>
            <label className="modal-input-wrapper">
              Username
              <input
                className="modal-input"
                type="text"
                placeholder="Username"
              />
            </label>
            <label className="modal-input-wrapper">
              E-mail
              <input className="modal-input" type="text" placeholder="E-mail" />
            </label>
            <label className="modal-input-wrapper">
              Password
              <input
                className="modal-input"
                type="text"
                placeholder="Password"
              />
            </label>

            <button
              className=" modal-btn"
              onClick={() => {
                setModalOpen(false);
              }}
            >
              Sign Up
            </button>
            <p className="modal-bottom-text">
              Already have an account?{" "}
              <a className="modal-link-in-text" href="#">
                Log In
              </a>
            </p>
          </div>
        </div>
      )}
    </>
  );
};
