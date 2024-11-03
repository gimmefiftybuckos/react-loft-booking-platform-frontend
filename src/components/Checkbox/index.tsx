import clsx from 'clsx';

import styles from './index.module.sass';

import { ChangeEventHandler } from 'react';

type CheckboxProps = {
   id: string;
   value: string;
   checked: boolean;
   name?: string;
   onChange: ChangeEventHandler<HTMLInputElement>;
};

export const Checkbox = ({
   id,
   value,
   checked,
   name,
   onChange,
}: CheckboxProps) => (
   <input
      id={id}
      type='checkbox'
      value={value}
      name={name}
      checked={checked}
      onChange={onChange}
      className={clsx(styles.checkbox)}
   />
);
