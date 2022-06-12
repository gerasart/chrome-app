import styles from './Layout.module.scss';

export default function Layout({ children }) {
    return (
        <div className={styles.Layout}>
            <div className={children}>{children}</div>
        </div>
    );
}
