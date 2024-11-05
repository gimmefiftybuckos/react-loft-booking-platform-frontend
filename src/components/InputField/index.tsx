import clsx from 'clsx';

import styles from './index.module.sass';

import { Input } from '../Input';
import { Text } from '../ui/Text';
import useAutosizeTextArea from '../../hooks/useAutosizeTextArea';
import { useRef } from 'react';

export const InputField = ({
   id,
   type = 'text',
   as = 'input',
   value,
   label,
   className,
   dispatch,
}: {
   id: string;
   type?: 'text' | 'number' | 'checkbox' | 'email' | 'file' | 'tel';
   as?: 'input' | 'textarea';
   value: string | number;
   label: string;
   className?: string;
   dispatch: (value: string | number) => void;
}) => {
   const textAreaRef = useRef<HTMLTextAreaElement>(null);

   useAutosizeTextArea(textAreaRef?.current, value);

   const onChange = (value: string | number) => dispatch(value);

   return (
      <div>
         <Text
            as='label'
            size='14'
            color='gray'
            htmlFor={id}
            className={clsx(styles.label)}
         >
            {label}
         </Text>
         <Input
            type={type}
            ref={textAreaRef}
            value={value}
            onChange={onChange}
            name={id}
            id={id}
            as={as}
            className={className}
         />
      </div>
   );
};
