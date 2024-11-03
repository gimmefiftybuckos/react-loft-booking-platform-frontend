import { forwardRef, ElementType } from 'react';
import clsx from 'clsx';

import styles from './index.module.sass';

type TInputProps = {
   id?: string;
   as?: ElementType;
   name?: string;
   placeholder?: string;
   value?: string;
   type?: string;
   autoFocus?: boolean;
   className?: string;
   onChange?: (
      event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
   ) => void;
};

export const Input = forwardRef<
   HTMLInputElement | HTMLTextAreaElement,
   TInputProps
>(
   (
      {
         id,
         as: Tag = 'input',
         name,
         placeholder,
         type = 'text',
         autoFocus,
         value,
         className,
         onChange,
      },
      ref
   ) => {
      return (
         <Tag
            id={id}
            name={name}
            ref={ref}
            autoFocus={autoFocus}
            type={type}
            value={value}
            placeholder={placeholder}
            onChange={onChange}
            className={clsx(className, styles.input)}
         />
      );
   }
);
