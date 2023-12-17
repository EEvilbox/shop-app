import styles from './Details.module.css';

export default function Details(props) {
    return (
        <div className={styles.details}>
            <h1>Name</h1>
            <h2>Type</h2>
            <p>Color</p>
            <p>Level</p>
        </div>
    );
}
