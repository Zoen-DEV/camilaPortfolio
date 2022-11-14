import Link from "next/link";
import React from "react";

const about = () => {
  return (
      <div className="about_container">
        <article>
          <img
            src="https://dvyvvujm9h0uq.cloudfront.net/com/articles/1515135672-shutterstock_284581649.jpg"
            alt="Personal pic from a"
          />
          <div className="main_info">
            <h1>Camila Lemos</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Laudantium dolore repellendus alias omnis dolorem voluptas
              accusamus expedita, reiciendis maiores error necessitatibus
              quisquam fugit iste blanditiis itaque dicta tenetur deserunt.
              Quas?
            </p>
            <Link className="link" href="/contact">
              Contact me <i className="bi bi-arrow-bar-right"></i>
            </Link>
          </div>
        </article>
      </div>
  );
};

export default about;
