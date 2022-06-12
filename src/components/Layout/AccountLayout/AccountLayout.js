import styles from './AccountLayout.module.scss';

export default function AccountLayout({ children }) {
    return (
        <div className={styles.Layout}>
            <div className={children}>{children}</div>
        </div>
    );
}
