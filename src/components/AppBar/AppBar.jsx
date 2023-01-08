import css from './AppBar.module.css';
import { useSelector } from 'react-redux';
import { Outlet } from 'react-router-dom';

import UserMenu from '../UserMenu/UserMenu';
import AuthNav from 'components/AuthNav/AuthNav';
import authSelectors from '../../redux/Auth/authSelectors';
import { Spiner } from '../Spiner/Spiner';
import { selectIsLoading } from '../../redux/Contacts/contactSelectors';
import logo from './logo/phonebook_logo.png';
const styles = {
  header: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderBottom: '1px solid #2A363B',
  },
};

export const AppBar = () => {
  const isLoading = useSelector(selectIsLoading);
  const isLoggedIn = useSelector(authSelectors.getIsLoggedIn);
  return (
    <>
      {isLoading && <Spiner />}
      <header style={styles.header}>
        <div className={css.header__logo}>
          <img className={css.header__icon} src={logo} alt="logo" />
          <h1 className={css.title}>Phonebook</h1>
        </div>

        {isLoggedIn ? <UserMenu /> : <AuthNav />}
      </header>
      {!isLoggedIn && <h2>Please login or register</h2>}

      <Outlet />
    </>
  );
};
