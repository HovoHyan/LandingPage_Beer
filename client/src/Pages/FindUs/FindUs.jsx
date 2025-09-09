import React from "react";
import "./findUs.scss";

const FindUs = () => {
  return (
    <section className="findus">
      <h2 className="findus__title">Հետադարձ կապ</h2>
      <div className="findus__cards">
        <div className="findus__card findus__card--black">
          <h3 className="findus__card-title">Վաճառքների բաժին</h3>
          <p>Հեռ․: <a href="tel:+37433379000">+374 333 79000</a></p>
          <p>
            Էլ․հասցե:{" "}
            <a href="mailto:marketing@379beer.am">marketing@379beer.am</a>
          </p>
        </div>
        <div className="findus__card findus__card--yellow">
          <h3 className="findus__card-title">Մարքեթինգի համագործակցություն</h3>
          <p>Հեռ․: <a href="tel:+374 33 379003">+374 33 379003</a></p>
          <p>
            Էլ․հասցե:{" "}
            <a href="mailto:marketing@379beer.am">marketing@379beer.am</a>
          </p>
        </div>
        <div className="findus__card findus__card--red">
          <h3 className="findus__card-title">Աշխատանքի դիմելու համար</h3>
          <p>Հեռ․: <a href="tel:+374 99 397892">+374 99 397892</a></p>
          <p>
            Էլ․հասցե: <a href="mailto:marketing@379beer.am">marketing@379beer.am</a>
          </p>
        </div>
      </div>
    </section>
  );
};

export default FindUs;
