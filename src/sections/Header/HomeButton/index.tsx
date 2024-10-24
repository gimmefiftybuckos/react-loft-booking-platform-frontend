import { Link } from 'react-router-dom';
import clsx from 'clsx';

import styles from './index.module.sass';

export const HomeButton = () => (
   <Link to='/' className={clsx(styles.button)}></Link>
);
