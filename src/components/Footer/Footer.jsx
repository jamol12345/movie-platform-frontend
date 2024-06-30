import React from 'react'
import st from "./footer.module.css"
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className={st.footer_container}>
        <h1>Company name</h1>
        <ul className={st.footer_links}>
            <Link>Home</Link>
            <Link>Blog</Link>
            <Link>Contact</Link>
            <Link>Socials</Link>
        </ul>
        <ul className={st.footer_links}>
            <Link>Home</Link>
            <Link>Blog</Link>
            <Link>Contact</Link>
            <Link>Socials</Link>
        </ul>
    </div>
  )
}

export default Navbar