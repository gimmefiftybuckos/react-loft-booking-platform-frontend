import { ElementType, ReactNode } from 'react';
import { clsx } from 'clsx';

import styles from './index.module.sass';

import { FontFamiliesClasses } from '../../types/constants.ts';

type TextProps = {
   children: ReactNode;
   as?: ElementType;
   dynamic?: boolean;
   size?: '14' | '16' | '18' | '20' | '24' | '28' | '32' | '36' | '40' | '50';
   weight?: 300 | 400 | 500 | 600 | 700 | 800 | 900;
   fontStyle?: 'italic' | 'normal';
   uppercase?: boolean;
   align?: 'center' | 'left';
   color?: 'black' | 'white' | 'gray';
   family?: FontFamiliesClasses;
   htmlFor?: string;
   className?: string;
};

export const Text = ({
   children,
   as: Tag = 'p',
   size = '16',
   dynamic = false,
   weight = 400,
   fontStyle = 'normal',
   uppercase = false,
   align = 'left',
   family = 'inter',
   color = 'black',
   htmlFor,
   className,
}: TextProps) => {
   const cl = clsx(
      styles.text,
      styles[`size${size}`],
      { [styles.dynamic]: dynamic },
      styles[`weight${weight}`],
      styles[`${fontStyle}`],
      { [styles.uppercase]: uppercase },
      styles[`${align}`],
      styles[`${family}`],
      styles[`${color}`],
      styles.margin
   );
   return (
      <Tag htmlFor={htmlFor} className={clsx(cl, className)}>
         {children}
      </Tag>
   );
};
