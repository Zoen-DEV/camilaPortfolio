'use client'
import React, { useState } from "react";
import { categories } from "../../../models/photographies";
import ShowPic from "../../../components/ShowPic";

const photography = () => {
  const [categoryTarget, setCategoryTarget] = useState(1);
  const [showPics, setShowPics] = useState({ display: "none" });
  const [pic, setPic] = useState(
    "https://www.ppa.com/assets/images/ppmag_articles/header-20184-stefanforster_selection-7.jpg"
  );
  return (
    <article className="photo_container">
      <div className="photo_head">
        <h1>Fotografías</h1>
        <ul>
          <li>
            <button
              className="arrow_btn bi bi-chevron-left"
              onClick={(e) => {
                if (categoryTarget !== 1) {
                  setCategoryTarget(categoryTarget - 1);
                } else {
                  setCategoryTarget(4);
                }
              }}
            ></button>
          </li>
          {categories.map((item) => {
            return (
              <li key={item.id}>
                <button
                  className="category_btn"
                  onClick={() => setCategoryTarget(item.id)}
                  style={{
                    background:
                      categoryTarget === item.id ? "#316f835c" : "none",
                    // color: categoryTarget === item.id ? "#fdfdfd" : "#232323",
                  }}
                >
                  {item.name}
                </button>
              </li>
            );
          })}
          <li>
            <button
              className="arrow_btn bi bi-chevron-right"
              onClick={(e) => {
                if (categoryTarget !== 4) {
                  setCategoryTarget(categoryTarget + 1);
                } else {
                  setCategoryTarget(1);
                }
              }}
            ></button>
          </li>
        </ul>
      </div>
      <div className="galery">
        {categories[categoryTarget - 1].pics?.map((item, index) => {
          return (
            <figure
              key={`${item}${index}`}
              className={`gallery__item gallery__item--${index + 1}`}
              onClick={() => {
                setPic(item);
                setShowPics({ display: "block" });
              }}
            >
              <img className="gallery__img" src={item} alt="hola" />
            </figure>
          );
        })}
      </div>
      <ShowPic style={showPics} pic={pic}></ShowPic>
    </article>
  );
};

export default photography;
