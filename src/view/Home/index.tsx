import { FC } from 'react';
import { Link } from 'react-router-dom';
import img from '../../assets/HeaderHome.jpg';
import styles from './home.module.scss';

const Home: FC = () => {
	return (
		<>
			<header className={styles.homeHeader}>
				<picture className={styles.homePicure}>
					<img src={img} alt="" className={styles.homePictureImage} />
					<Link to="/producst" className={styles.homePictureBtn}>
						buy now
					</Link>
				</picture>
			</header>
			<footer className={styles.homeFooter}>
				<h1 className={styles.footerTitle}>DavShop</h1>
				<p className={styles.footerText}>
					Lorem ipsum dolor sit amet consectetur adipisicing elit.
				</p>
				<button className={styles.footerBtn}>ir a Productos</button>
			</footer>
		</>
	);
};

export default Home;
