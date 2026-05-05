// 56f073ddf24d4529a3f368eb1417cd7e
// https://newsapi.org/v2/everything?q=pets&language=en&apiKey=56f073ddf24d4529a3f368eb1417cd7e
import { useState, useEffect } from "react";
import "./petsHighlights.css";

export const PetsHighlights = () => {
  const [news, setNews] = useState([]);
  const [visibleCount, setVisibleCount] = useState(4);
  useEffect(() => {
    fetch(
      `https://newsapi.org/v2/everything?q=pets&language=en&apiKey=56f073ddf24d4529a3f368eb1417cd7e`,
    )
      .then((res) => res.json())
      .then((result) => {
        const filtered = result.articles.filter(
          (item) => item.urlToImage && item.description,
        );
        setNews(filtered);
      });
  }, []);

  const clickBtnLoadMore = () => {
    setVisibleCount((prev) => prev + 4);
  };

  return (
    <section className="petsHighlights">
      <p className="petsHighlights-title">Interacting with our pets</p>
      <div className="petsHighlights-wrraper">
        {news
          .slice(0, visibleCount)
          .map(({ description, urlToImage }, index) => {
            return (
              <div key={index} className="petsHighlights-box">
                <img
                  className="petsHighlights-img"
                  src={urlToImage}
                  alt="image"
                />
                <p className="petsHighlights-text">{description}</p>
              </div>
            );
          })}
      </div>
      <button className="petsHighlights-btn" onClick={clickBtnLoadMore}>
        See more
      </button>
    </section>
  );
};
