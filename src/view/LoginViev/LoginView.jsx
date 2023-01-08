import { useState } from 'react';
import { useDispatch } from 'react-redux';
import authOperations from '../../redux/Auth/authOperations';
import css from './LoginView.module.css';

export default function LoginView() {
  const dispatch = useDispatch();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleChange = ({ target: { name, value } }) => {
    switch (name) {
      case 'email':
        return setEmail(value);
      case 'password':
        return setPassword(value);
      default:
        return;
    }
  };

  const handleSubmit = e => {
    e.preventDefault();
    dispatch(authOperations.logIn({ email, password }));
    setEmail('');
    setPassword('');
  };

  return (
    <div className={css.loginContainer}>
      <h1>Login page</h1>

      <form className={css.form} onSubmit={handleSubmit} autoComplete="off">
        <p>Email</p>
        <label className={css.label}>
          <input
            className={css.input}
            type="email"
            name="email"
            pattern="^[-\w.]+@([A-z0-9][-A-z0-9]+\.)+[A-z]{2,4}$"
            value={email}
            onChange={handleChange}
          />
        </label>
        <p>Password</p>
        <label className={css.label}>
          <input
            className={css.input}
            type="password"
            name="password"
            value={password}
            onChange={handleChange}
          />
        </label>
        <button className={css.button} type="submit">
          Log in
        </button>
      </form>
    </div>
  );
}
