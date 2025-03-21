import clsx from 'clsx';
import { Link } from 'react-router-dom';

import styles from '../index.module.sass';

import { useAuthForm } from '../hooks/useAuthForm';
import { useDispatch, useSelector } from '../../../App/store';
import { registerUser } from '../../../App/store/slices/userAuth';
import { initalRegistrInput, validateRegistr } from '../authsUtils';

import { Text } from '../../../shared/ui/Text';
import { Input } from '../../../shared/ui/Input';
import { Button, ButtonVariant } from '../../../shared/ui/Button';
import { capitalLetter } from '../../../shared/utils/utils.ts';
import { RoutesCatalog } from '../../../shared/types';

const registrFormValues = ['email', 'login', 'password'] as const;

export const RegistrationForm = () => {
   const dispatch = useDispatch();
   const { error } = useSelector((state) => state.user);

   const { validateForm, handleChange, isChanged, errors, values } =
      useAuthForm({
         initalInput: initalRegistrInput,
         validate: validateRegistr,
      });

   const onSubmit = (event: React.FormEvent) => {
      event.preventDefault();
      if (!validateForm()) {
         return;
      }
      dispatch(registerUser(values)).catch((error) => console.error(error));
   };

   return (
      <section className={clsx(styles.container)}>
         <form
            className={clsx(
               styles.form,
               errors.email || errors.login || errors.password || error
                  ? styles.form_error
                  : isChanged && styles.form_confirm
            )}
            onSubmit={onSubmit}
            action='submit'
         >
            <Text
               size='16'
               className={clsx(styles.error, styles.error__global)}
               as={'p'}
            >
               {error}
            </Text>
            {registrFormValues.map((item, index) => {
               const type = item === 'password' ? item : 'text';
               return (
                  <div key={item} className={clsx(styles.form__container)}>
                     <Input
                        type={type}
                        placeholder={capitalLetter(item)}
                        autoFocus={index === 0}
                        value={values[item]}
                        className={clsx(
                           (errors[item] || error) && styles.input_error
                        )}
                        onChange={(event) =>
                           handleChange(item, event.target.value)
                        }
                     />
                     <Text
                        size='14'
                        className={clsx(styles.error, styles.error__input)}
                        as={'p'}
                     >
                        {errors[item]}
                     </Text>
                  </div>
               );
            })}
            <Button
               className={clsx(styles.button)}
               variant={ButtonVariant.ACCENT}
               type='submit'
            >
               Зарегистрироваться
            </Button>
         </form>
         <Button
            variant={ButtonVariant.OUTLINED}
            className={clsx(styles.button, styles.button_to)}
            as={Link}
            pathTo={RoutesCatalog.LOGIN}
         >
            Войти
         </Button>
      </section>
   );
};
