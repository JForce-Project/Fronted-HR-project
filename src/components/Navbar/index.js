import React from 'react'
import { Button } from 'elementz';
import { Link } from "react-router-dom";
import styles from "./styles.module.css"
//import { Button, ButtonGroup } from '@chakra-ui/react'
function Navbar() {
    return (

        <nav className={styles.nav}>
            <div className={styles.left}>
                <div className="logo">
                    <Link to="/" >HR YÖNETİM SİSTEMİ</Link>  {/* LOGOYU BURAYA KOY */}
                </div>

                <ul className={styles.menu}>
                    <li>
                        <Link to="/">Envanterler</Link> {/* PRODUCTS  */}
                    </li>
                </ul>
            </div>


            <div className={styles.right}>

                <Link to="/signin" >
                    <Button primary effect="float" rainbow gradient > Login</Button>
                </Link>

                <Link to="/signup">
                    <Button primary effect="float" secondary gradient > Register</Button>
                </Link>

                <Link to="/logout">
                    <Button primary effect="float" danger gradient>Logout</Button>
                </Link>

            </div>
        </nav>


    )
}

export default Navbar
