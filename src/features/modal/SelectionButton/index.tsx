import clsx from 'clsx';

import styles from './index.module.sass';

import { CatalogFiltersType, SelectionFiltersType } from '../../../shared/types';

import { Modal } from '../Modal';
import { ModalContent } from '../ModalContent';
import { Text } from '../../../shared/ui/Text';
import { Arrow } from '../../../shared/ui/Arrow';

type SelectionButtonType = {
   title: SelectionFiltersType | CatalogFiltersType;
   index: number;
   onClick: (key: number) => void;
   isActive: boolean;
   currentValue?: string | null;
   variant?: string;
};

export enum SelectionVariant {
   MAIN = 'main',
   CATALOG = 'catalog',
}

export const SelectionButton: React.FC<SelectionButtonType> = ({
   title,
   index,
   onClick,
   isActive,
   currentValue,
   variant,
}) => {
   const variantClassName = variant ? styles[`button__${variant}`] : null;

   return (
      <div
         onClick={() => onClick(index)}
         className={clsx(styles.button, variantClassName)}
      >
         <Text weight={500}>{currentValue || title}</Text>
         <Arrow num={isActive ? index : -1} index={index} />
         <Modal isOpen={isActive}>
            <ModalContent name={title} />
         </Modal>
      </div>
   );
};
