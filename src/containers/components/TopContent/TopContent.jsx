import React from "react";
import st from "./TopContent.module.css";
import player from "../../../assets/player.svg"

const TopContent = () => {
  return (
    <div className={st.hero_container}>
      <div className={st.left_content}>
        <h1>Фильмы, сериалы, мультфильмы в одном месте!</h1>
        <p>
          Всегда хотели узнать где можно дешевле посмотреть то или иное
          произведение исскуства? Просто обсудить какой-то либо кинофраншизу? А
          может просто посмотреть последние новости в сфере кино? Тогда, данный
          сайт был сделан для вас!
        </p>
        <button>Посмотреть каталог фильмов</button>
      </div>
      <div className={st.right_content}>
        <div className={st.player}>
            <img src={player} alt="player" />
        </div>
      </div>
    </div>
  );
};

export default TopContent;
