import { Link } from 'react-router-dom';
import clsx from 'clsx';

import styles from './index.module.sass';
import { RoutesCatalog } from '../../../shared/types';

export const HomeButton = () => (
   <Link to={RoutesCatalog.HOME} className={clsx(styles.button)}></Link>
);
