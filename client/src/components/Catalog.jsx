import Details from './Details';
import styles from './Catalog.module.css';

export default function Catalog(props) {
    return (
        <div className={styles.catalog}>
            <h1>
                <p>
                    <span>
                        CATALOG
                    </span>
                </p>
            </h1>
            <Details></Details>
        </div>
    );
}