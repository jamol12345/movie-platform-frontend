import React from "react";
import st from "./Home.module.css";
import TopContent from "../components/TopContent/TopContent";
import BestFilm from "../components/BestFilm/BestFilm";

const Home = () => {
  return (
    <div className={st.home_container}>
      <div className={st.home_holder}>
        <TopContent />
        <BestFilm />
      </div>
    </div>
  );
};

export default Home;
