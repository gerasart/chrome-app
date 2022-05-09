import React from "react" ;
import styles from './Header.module.scss';
import {Link} from "react-router-dom";

export default function Header() {
    return (
        <div className={styles.Header} >
            <div className={styles.content1}>
                <Link to="/">Home</Link>
            </div>
        </div>
    )
}