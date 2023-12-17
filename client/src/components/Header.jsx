import styles from './Header.module.css';

export default function Header(props) {
    return (
        <div className={styles.header}>
            <h1>
                <p>
                    <span>
                        HEADER
                    </span>
                </p>
            </h1>
        </div>
    );
}