import React from 'react';
import styles from './Information.module.scss';

class Information extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className={styles.Information}>
                Information Component
            </div>
        );
    }
}

export default Information;
