import { forwardRef, ElementType } from 'react';
import clsx from 'clsx';

import styles from './index.module.sass';

type TInputProps = {
   id?: string;
   as?: ElementType;
   name?: string;
   placeholder?: string;
   value?: string | number;
   type?: string;
   autoFocus?: boolean;
   className?: string;
   onChange: (value: string | number) => void;
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
      const handleFocus = () => {
         if (!value) {
            onChange('');
         }
      };

      const handleBlur = (
         event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
      ) => {
         if (!value && event.target.type === 'number') {
            onChange(0);
         }
      };

      const handleChange = (
         event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
      ) => {
         onChange(event.target.value);
      };

      return (
         <Tag
            id={id}
            name={name}
            ref={ref}
            autoFocus={autoFocus}
            type={type}
            value={value}
            placeholder={placeholder}
            onChange={handleChange}
            onFocus={handleFocus}
            onBlur={handleBlur}
            className={clsx(className, styles.input)}
         />
      );
   }
);
