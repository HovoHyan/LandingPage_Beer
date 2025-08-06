import React from "react";
import "./findUs.scss";

const FindUs = () => {
  return (
    <section className="findus">
      <h2 className="findus__title">Հետադարձ կապ</h2>
      <div className="findus__cards">
        <div className="findus__card findus__card--black">
          <h3 className="findus__card-title">Վաճառքների բաժին</h3>
          <p>Կիևյան փողոց 72, Երևան, Հայաստան</p>
          <p>Հեռ․: +374 96 870 870</p>
          <p>
            Էլ․հասցե:{" "}
            <a href="mailto:sales@targett.com">sales@targett.com</a>
          </p>
        </div>
        <div className="findus__card findus__card--yellow">
          <h3 className="findus__card-title">Մարքեթինգի համագործակցություն</h3>
          <p>Հայաստան, Երևան - Մանանդյան փողոց 10/5</p>
          <p>Հեռ․: +374 60 71 55 55</p>
          <p>
            Էլ․հասցե:{" "}
            <a href="mailto:marketing@targett.com">marketing@targett.com</a>
          </p>
        </div>
        <div className="findus__card findus__card--red">
          <h3 className="findus__card-title">Աշխատանքի դիմելու համար</h3>
          <p>Երևան, Հայաստան</p>
          <p>Հեռ․: +374 33 66 77 88</p>
          <p>
            Էլ․հասցե: <a href="mailto:hr@targett.com">hr@targett.com</a>
          </p>
        </div>
      </div>
    </section>
  );
};

export default FindUs;
