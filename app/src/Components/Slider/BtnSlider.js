import React from "react";
import "./Slider.css";
import leftArrow from "./icons/gauche.png";
import rightArrow from "./icons/droite.png";

export default function BtnSlider({ direction, moveSlide }) {
  return (
    <button
      onClick={moveSlide}
      className={direction === "next" ? "btn-slide next" : "btn-slide prev"}
    >
      <img src={direction === "next" ? rightArrow : leftArrow} />
    </button>
  );
// direction du slide avec les button
}