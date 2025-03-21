import { Link } from 'react-router-dom';
import clsx from 'clsx';

import styles from '../index.module.sass';

import { loginUser } from '../../../App/store/slices/userAuth';
import { useDispatch, useSelector } from '../../../App/store';
import { initalLoginInput, validateLogin } from '../authsUtils';
import { useAuthForm } from '../hooks/useAuthForm';

import { Input } from '../../../shared/ui/Input';
import { Button, ButtonVariant } from '../../../shared/ui/Button';
import { Text } from '../../../shared/ui/Text';
import { capitalLetter } from '../../../shared/utils/utils.ts';
import { RoutesCatalog } from '../../../shared/types';

const loginFormValues = ['login', 'password'] as const;

export const LoginForm = () => {
   const dispatch = useDispatch();
   const { error } = useSelector((state) => state.user);

   const { validateForm, handleChange, isChanged, errors, values } =
      useAuthForm({
         initalInput: initalLoginInput,
         validate: validateLogin,
      });

   const onSubmit = (event: React.FormEvent) => {
      event.preventDefault();

      if (!validateForm()) {
         return;
      }

      dispatch(loginUser(values)).catch((error) => console.error(error));
   };

   return (
      <section className={clsx(styles.container)}>
         <form
            className={clsx(
               styles.form,
               errors.login || errors.password || error
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
            {loginFormValues.map((item, index) => {
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
               Войти
            </Button>
         </form>
         <Button
            variant={ButtonVariant.OUTLINED}
            className={clsx(styles.button, styles.button_to)}
            as={Link}
            pathTo={RoutesCatalog.REGISTRATION}
         >
            Зарегистрироваться
         </Button>
      </section>
   );
};
