import { useReducer } from 'react';
import { Button, ButtonVariant } from '../../../components/Button';
import { Input } from '../../../components/Input';
import { TLoginData } from '../../../services/api';
import { loginUser } from '../../../store/userAuthSlice';
import { useDispatch } from '../../../store';
import { authReducer, AuthsValues } from '../authsUtils';

export const LoginForm = () => {
   const dispatchRedux = useDispatch();

   const [loginState, dispatchReducer] = useReducer(authReducer<TLoginData>, {
      login: '',
      password: '',
   });

   const onSubmit = () => {
      event?.preventDefault();
      dispatchRedux(loginUser(loginState));
   };

   return (
      <form onSubmit={onSubmit} action='submit'>
         <Input
            type='text'
            placeholder='login'
            value={loginState.login}
            onChange={(event) =>
               dispatchReducer({
                  payload: event.target.value,
                  type: AuthsValues.LOGIN,
               })
            }
         />
         <Input
            type='password'
            placeholder='password'
            value={loginState.password}
            onChange={(event) =>
               dispatchReducer({
                  payload: event.target.value,
                  type: AuthsValues.PASSWORD,
               })
            }
         />
         <Button variant={ButtonVariant.ACCENT} type='submit'>
            Войти
         </Button>
      </form>
   );
};
