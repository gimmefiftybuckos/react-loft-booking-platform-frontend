import clsx from 'clsx';

import styles from './index.module.sass';

import { Text } from '../ui/Text';
import { Input } from '../../components/Input';
import { useRef } from 'react';
import { useDispatch, useSelector } from '../../store';
import { updateLoftData } from '../../store/slices/newLoft';
import useAutosizeTextArea from '../../hooks/useAutosizeTextArea';
import { CheckboxFieldset } from '../CheckboxFieldset';

// enum InputNames {
//    ORIGINAL_NAME = 'original-name',
//    SERVICE_NAME = 'service-name',
//    DESCRIPTION = 'description',
// }

// const test1 = [
//    {
//       name: InputNames.ORIGINAL_NAME,
//       text: 'Оригинальное название площадки',
//    },
//    {
//       name: InputNames.SERVICE_NAME,
//       text: 'Название площадки для LoftRadar',
//    },
//    {
//       name: InputNames.DESCRIPTION,
//       text: 'Описание площадки',
//    },
// ];

export const AddLoftForm = () => {
   const dispatch = useDispatch();
   const newLoft = useSelector((state) => state.newLoft);
   const textAreaRef = useRef<HTMLTextAreaElement>(null);
   useAutosizeTextArea(textAreaRef.current, newLoft.description);

   return (
      <form className={clsx(styles.form)}>
         <fieldset className={clsx(styles.fieldset)}>
            <Text
               className={clsx(styles.title)}
               weight={600}
               size='24'
               as='legend'
            >
               Общее о площадке
            </Text>
            <div>
               <Text
                  as='label'
                  color='gray'
                  htmlFor='orgignal-name'
                  className={clsx(styles.label)}
               >
                  Оригинальное название площадки
               </Text>
               <Input
                  value={newLoft.originalName}
                  onChange={(event) =>
                     dispatch(
                        updateLoftData({ originalName: event.target.value })
                     )
                  }
                  name='orgignal-name'
                  id='orgignal-name'
               />
            </div>
            <div>
               <Text
                  as='label'
                  color='gray'
                  htmlFor='service-name'
                  className={clsx(styles.label)}
               >
                  Название площадки для LoftRadar
               </Text>
               <Input id='service-name' />
            </div>
            <div>
               <Text
                  as='label'
                  color='gray'
                  htmlFor='description'
                  className={clsx(styles.label)}
               >
                  Описание площадки
               </Text>
               <Input
                  value={newLoft.description}
                  onChange={(event) =>
                     dispatch(
                        updateLoftData({ description: event.target.value })
                     )
                  }
                  ref={textAreaRef}
                  as='textarea'
                  id='description'
               />
            </div>
            <CheckboxFieldset />
         </fieldset>
      </form>
   );
};
