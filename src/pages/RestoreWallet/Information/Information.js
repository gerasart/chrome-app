import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Information.module.scss';

class Information extends React.Component {
    // eslint-disable-next-line no-useless-constructor
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
