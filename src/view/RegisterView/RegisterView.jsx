import { useState } from 'react';
import { useDispatch } from 'react-redux';
import authOperations from '../../redux/Auth/authOperations';
import css from './RegisterView.module.css';

export default function RegisterView() {
  const dispatch = useDispatch();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleChange = ({ target: { name, value } }) => {
    switch (name) {
      case 'name':
        return setName(value);
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
    dispatch(authOperations.register({ name, email, password }));
    setName('');
    setEmail('');
    setPassword('');
  };

  return (
    <div className={css.loginContainer}>
      <h1>Registration Page</h1>

      <form className={css.form} onSubmit={handleSubmit} autoComplete="off">
        <p>Name</p>
        <label className={css.label}>
          <input
            className={css.input}
            type="text"
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            value={name}
            onChange={handleChange}
          />
        </label>
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
        <p> Password</p>
        <label className={css.label}>
          <input
            className={css.input}
            type="password"
            name="password"
            pattern="^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?!.*\s).*$"
            title="the password must contain lowercase and uppercase latin letters, numbers"
            value={password}
            onChange={handleChange}
          />
        </label>

        <button className={css.button} type="submit">
          Register
        </button>
      </form>
    </div>
  );
}
