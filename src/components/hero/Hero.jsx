import "./hero.css";
import search from "../../images/svg/search.svg";

export const Hero = () => {
  return (
    <section className="hero">
      <h1 className="hero-title">Weather dashboard</h1>
      <div className="hero-text-wrapper">
        <p className="hero-leftText">
          Create your personal list of <br /> favorite cities and always be{" "}
          <br /> aware of the weather.
        </p>
        <div className="hero-line"></div>
        <p className="hero-rightText">
          October 2023 <br /> Friday, 13th
        </p>
      </div>
      <label className="hero-input-wrapper">
        <input
          className="hero-input"
          type="text"
          placeholder="Search location..."
        />
        <button className="hero-search-btn">
          <img className="hero-search-img" src={search} alt="search" />
        </button>
      </label>
    </section>
  );
};
