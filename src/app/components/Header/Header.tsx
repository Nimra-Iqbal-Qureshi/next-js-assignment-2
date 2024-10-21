import React from 'react'
import cssStyle from "./header.module.css"

function Header() {
  return (
    <>
    <header className={cssStyle.header}>
      <nav className={cssStyle.nav}>
    <div>
        <a href="#">Next-Js</a>
        </div>

        <div>
        <a href="#" className={cssStyle.a}>Home</a>

        <a href="#" className={cssStyle.a}>About</a>

        <a href="#" className={cssStyle.a}>Contact</a>

        <a href="#" className={cssStyle.a}>Service</a>
        
  
        
    </div>
</nav>
</header>
    </>
  )
}

export default Header