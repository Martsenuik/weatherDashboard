import { useState } from "react";
import "../modal/modal.css";

export const Modal = () => {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <>
      <button
        className="button "
        onClick={() => {
          setModalOpen(true);
        }}
      >
        Sign Up
      </button>
      {modalOpen && (
        <div id="myModal" className="modal">
          <div className="modal-content">
            <p className="title">Sign up</p>
            <label className="input-wrapper">
              Username
              <input className="input" type="text" placeholder="Username" />
            </label>
            <label className="input-wrapper">
              E-mail
              <input className="input" type="text" placeholder="E-mail" />
            </label>
            <label className="input-wrapper">
              Password
              <input className="input" type="text" placeholder="Password" />
            </label>

            <button
              className=" modal-btn"
              onClick={() => {
                setModalOpen(false);
              }}
            >
              Sign Up
            </button>
            <p className="text">
              Already have an account?{" "}
              <a className="linkInText" href="#">
                Log In
              </a>
            </p>
          </div>
        </div>
      )}
    </>
  );
};
