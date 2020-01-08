import React, { useState } from 'react'
import Link from 'gatsby-link'
import styles from './sidebarMenu.module.css'
const cassidyImg = require('../Speakers/images/speaker-cassidy.png');
const reactathonNavLogo = require('./reactathon-nav-logo.svg');

let sidebar_items = [
    {
        "name": "Home",
        "page": "/"
    },
    {
        "name": "Speakers",
        "page": "/speakers"
    },
    {
        "name": "Schedule",
        "page": "/schedule"
    },
    {
        "name": "Workshops",
        "page": "/workshops"
    },
    {
        "name": "About",
        "page": "/about"
    },
    {
        "name": "Podcast",
        "page": "/podcast"
    },
    {
        "name": "Conduct",
        "page": "/conduct"
    }
]

function SidebarMenuItem(props){
    const navReactLogo = require('./nav-react-logo.svg');
    const [hovered, setHovered] = useState(false);
    const toggleHover = () => setHovered(!hovered);
    const {name, page} = props;

    return(
        <Link to={page}>
        <div className={styles.menuItemContainer} onMouseEnter={toggleHover} onMouseLeave={toggleHover}>
            <object type="image/svg+xml" data={navReactLogo} className={hovered ? styles.navReactLogoHovered : styles.navReactLogo }>
                <img src={cassidyImg} alt="" />
            </object>
            <p className={hovered ? styles.sidebarTextHovered : styles.sidebarText }>{name}</p>
        </div>
        <hr/>
        </Link>
    )
}


const SidebarMenu = () => (
    <nav className={styles.nav}>
      <object type="image/svg+xml" data={reactathonNavLogo}>
        <img src={cassidyImg} alt="" />
      </object>
      <div className={styles.menuItemsContainer}>
      {sidebar_items.map(
          ({ name, page }, i) => (
              <SidebarMenuItem
               name={name}
               page={page}/>
      ))}
      </div>
      <Link to="/buy-tickets" className={styles.buyTickets}><p className={styles.buyTicketsText}>Buy Tickets</p></Link>
    </nav>
);

export default SidebarMenu
