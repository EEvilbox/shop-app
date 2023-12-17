import styles from './NavBar.module.css';

export default function NavBar(props) {
    return (
        <div className={styles.nav}>
            <ul>
                <li><a href="">Home</a></li>
                <li><a href="">About</a></li>
                <li><a href="">Login</a></li>
                <li><a href="">Register</a></li>
                <li><a href="">Logout</a></li>
            </ul>
        </div>
    );
}