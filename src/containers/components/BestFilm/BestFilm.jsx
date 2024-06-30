import React from "react";
import st from "./BestFilm.module.css";

const BestFilm = () => {
  return (
    <div className={st.bestFilm_container}>
      <div className={st.bestFilm_holder}>
        <h1>Самый популярный фильм на неделе</h1>
        <div className={st.wideCard}>
          <div className={st.image}></div>
          <button>Посмотреть</button>
        </div>
      </div>
    </div>
  );
};

export default BestFilm;
