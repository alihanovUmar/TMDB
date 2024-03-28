import React, { useState, useEffect } from "react";
import "./card.css";

export const Card = ({ item, trailer }) => {
  const [showModal, setShowModal] = useState(false);

  const openModal = () => {
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
  };

  const closeModalOnEsc = (event) => {
    if (event.keyCode === 27) {
      closeModal();
    }
  };

  useEffect(() => {
    if (showModal) {
      document.addEventListener("keydown", closeModalOnEsc);
    }

    return () => {
      document.removeEventListener("keydown", closeModalOnEsc);
    };
  }, [showModal]);

  useEffect(() => {
    const closeModalOnOutsideClick = (event) => {
      if (!event.target.closest(".modalContent")) {
        closeModal();
      }
    };

    const handleOutsideClick = (event) => {
      if (
        !event.target.closest(".modalContent") &&
        !event.target.closest(".moviCard")
      ) {
        closeModal();
      }
    };

    if (showModal) {
      document.addEventListener("click", handleOutsideClick);
    }

    return () => {
      document.removeEventListener("click", handleOutsideClick);
    };
  }, [showModal]);

  return (
    <>
      <li className="moviCard" onClick={openModal}>
        <center>
          <img
            className="moviImg"
            src={`https://image.tmdb.org/t/p/w400${item.poster_path}`}
            alt="moviImg"
          />
          <h2 className="moviTitle">{item.original_title}</h2>
          <p className="moviDate">{item.release_date}</p>
        </center>
      </li>

      {showModal && (
        <div className="modal drop-shadow-md">
          <div className="modalContent" onClick={(e) => e.stopPropagation()}>
            <button className="closeBtn" onClick={closeModal}>
              &times;
            </button>
            <img
              className="modalImg drop-shadow-md"
              src={`https://image.tmdb.org/t/p/w400${item.poster_path}`}
              alt=""
            />
            <h2 className="modalName">{item.original_title}</h2>
            <p className="modalInfo">Overview: {item.overview}</p>
            <p className="modalInfo">
              Original Language: {item.original_language}
            </p>
            <p className="modalInfo">Popularity: {item.popularity}</p>
            <button className="modalButton" onClick={() => window.open(trailer)}>Смотреть</button>
          </div>
        </div>
      )}
    </>
  );
};
