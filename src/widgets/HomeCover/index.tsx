import clsx from 'clsx';

import styles from './index.module.sass';

import { getTitleByFilter } from '../../shared/utils/utils.ts';
import { selectionFilters } from '../../shared/types/constants.ts';
import useModalControl from '../../shared/hooks/useModalControl';

import { Button, ButtonVariant } from '../../shared/ui/Button';
import {
   SelectionButton,
   SelectionVariant,
} from '../../features/modal/SelectionButton';
import { CoverTitle } from './CoverTitle';
import { Link } from 'react-router-dom';
import { RoutesCatalog } from '../../shared/types';

export const HomeCover = () => {
   const { toggleModal, closeModal, controlIndex } = useModalControl();

   return (
      <>
         <section className={clsx(styles.cover)}>
            <CoverTitle />
            <div
               className={clsx(
                  styles.container,
                  controlIndex !== -1 &&
                     controlIndex < 200 &&
                     styles.container_focus
               )}
            >
               {selectionFilters.map((item, index) => (
                  <SelectionButton
                     key={index}
                     title={item}
                     index={index}
                     onClick={toggleModal}
                     isActive={controlIndex === index}
                     currentValue={getTitleByFilter(item) || null}
                     variant={SelectionVariant.MAIN}
                  />
               ))}

               <Button
                  as={Link}
                  pathTo={RoutesCatalog.CATALOG}
                  variant={ButtonVariant.ACCENT}
                  onClick={closeModal}
                  className={clsx(styles.button)}
               >
                  Найти
               </Button>
            </div>
         </section>
      </>
   );
};
