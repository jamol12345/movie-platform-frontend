import React from 'react'
import st from "./nav.module.css"
import { Link } from 'react-router-dom'
import search from "../../assets/Icon.svg"
import user from "../../assets/User.svg"

const Navbar = () => {
  return (
    <div className={st.nav_container}>
        <Link to={"/home"}>Multi Cinema</Link>
        <ul className={st.nav_links}>
            <Link>Films</Link>
            <Link>Trands</Link>
            <Link>News</Link>
        </ul>
        <div className={st.nav_signup}>
            <Link><img src={search} alt="" /></Link>
            <Link to={"/signup"}><img src={user} alt="" /></Link>
        </div>
    </div>
  )
}

export default Navbar