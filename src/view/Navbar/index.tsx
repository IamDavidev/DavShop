import { FC } from 'react';
import { Link, NavLink } from 'react-router-dom';
import logo from '../../assets/logo.svg';
import styles from './navbar.module.scss';

const Navbar: FC = () => {
	return (
		<nav>
			<picture className={styles.navPicture}>
				<img src={logo} alt="itsdavidev" className={styles.navPictureImage} />
			</picture>
			<section className={styles.navLinks}>
				<div className={styles.navLinksPages}>
					<NavLink to="/" className={styles.navPagesLink}>
						davshop
					</NavLink>
					<NavLink to="/carro" className={styles.navPagesLink}>
						carro
					</NavLink>
					<NavLink to="/sobre" className={styles.navPagesLink}>
						sobre
					</NavLink>
					<NavLink to="/perfil" className={styles.navPagesLink}>
						perfil
					</NavLink>
				</div>
				<div className={styles.navSearch}>
					<Link to="/buscar">
						<input
							type="text"
							placeholder="Search"
							className={styles.navSearchInput}
						/>
					</Link>
				</div>
			</section>
		</nav>
	);
};

export default Navbar;
