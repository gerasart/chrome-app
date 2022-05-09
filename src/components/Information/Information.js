import React from 'react';
import styles from './Information.module.scss';
import {Link} from "react-router-dom";

class Information extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className={styles.Information}>
                Information
                <Link to="/">Home</Link>
            </div>
        );
    }
}

export default Information;
