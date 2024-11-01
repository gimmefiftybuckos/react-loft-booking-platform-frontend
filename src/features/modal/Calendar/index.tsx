import { DayPicker } from 'react-day-picker';
import { useState } from 'react';
import { useDispatch } from '../../../store';
import 'react-day-picker/dist/style.css';
import clsx from 'clsx';

import styles from './index.module.sass';

import { setDate } from '../../../store/slices/cardCatalog';

import { Button, ButtonVariant } from '../../../components/Button';

import { todayDate } from '../../../services/constants';
import { useModalControl } from '../../../hooks/useModalControl';

export const Calendar = () => {
   const { closeModal } = useModalControl();
   const dispatch = useDispatch();

   const [selected, setSelected] = useState<Date>();

   const onClick = () => {
      const date = `${selected?.getDate()}:${selected?.getMonth() ? selected?.getMonth() + 1 : null}:${selected?.getFullYear()}`;

      dispatch(setDate(date!));

      closeModal();
   };

   return (
      <>
         <DayPicker
            mode='single'
            selected={selected}
            captionLayout='dropdown'
            onSelect={setSelected}
            weekStartsOn={1}
            month={selected}
            startMonth={todayDate}
            endMonth={new Date(todayDate.getFullYear() + 1, 11)}
            disabled={{ before: todayDate }}
            className={clsx(styles.rdp)}
            modifiersClassNames={{
               selected: styles.rdp_selected,
               today: styles.rdp_today,
               selectedToday: styles.rdp_selected,
            }}
         />
         <Button variant={ButtonVariant.ACCENT} onClick={onClick}>
            Принять
         </Button>
      </>
   );
};
