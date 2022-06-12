import { Link } from 'react-router-dom';
import styles from './Header.module.scss';

export default function Header() {
    return (
        <div className={styles.Header}>
            <div className={styles.content1}>
                <Link to="/">Home</Link>
            </div>
        </div>
    );
}
