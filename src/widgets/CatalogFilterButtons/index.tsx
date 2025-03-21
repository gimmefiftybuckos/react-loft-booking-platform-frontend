import clsx from 'clsx';

import styles from './index.module.sass';

import { catalogFilters } from '../../shared/types/constants.ts';
import { getTitleByFilter } from '../../shared/utils/utils.ts';
import useModalControl from '../../shared/hooks/useModalControl';

import {
   SelectionButton,
   SelectionVariant,
} from '../../features/modal/SelectionButton';

export const CatalogFilterButtons = () => {
   const { toggleModal, controlIndex } = useModalControl();

   return (
      <section>
         <div
            className={clsx(
               styles.buttons,
               controlIndex !== -1 && styles.buttons_focus
            )}
         >
            {catalogFilters.map((item, index) => {
               return (
                  <SelectionButton
                     key={index}
                     title={item}
                     index={index}
                     onClick={toggleModal}
                     isActive={controlIndex === index}
                     currentValue={getTitleByFilter(item) || null}
                     variant={SelectionVariant.CATALOG}
                  />
               );
            })}
         </div>
      </section>
   );
};
