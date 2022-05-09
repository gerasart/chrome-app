import React from "react";
import Header from "../Header/Header";
import styles from './Layout.module.scss';

export default function Layout({ children }) {
    return (
       <div className={styles.Layout}>
            <Header/>
           <div className={styles.container}>
               {children}
           </div>
       </div>
    )
}