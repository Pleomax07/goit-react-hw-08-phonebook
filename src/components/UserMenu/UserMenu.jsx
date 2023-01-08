import { useDispatch, useSelector } from 'react-redux';
import  authSelectors from '../../redux/Auth/authSelectors';
import authOperations from '../../redux/Auth/authOperations'
import defaultAvatar from './avatar/default-avatar.png';
import logOut from './logOut/log_out_icon.svg'
// import { css } from 'styled-components';
import css from './UserMenu.module.css'
const styles = {
  container: {
    display: 'flex',
    alignItems: 'center',
  },
  avatar: {
    marginRight: 4,
  },
  name: {
    fontWeight: 700,
    marginRight: 12,
    marginLeft: 12,
    color:' #424242',
  },
};

export default function UserMenu() {
  const dispatch = useDispatch();
  const name = useSelector(authSelectors.getUserName);
  const avatar = defaultAvatar;

  return (
    <div style={styles.container}>
      <img src={avatar} alt="" width="28" style={styles.avatar} />
      <span style={styles.name}>Welcome, {name}</span>
      <button  hidden id="mybutton" type="button" onClick={() => dispatch(authOperations.logOut())}>
        Log out
      </button>
      <label for="mybutton">
    <img className={css.logOut__icon} src={logOut} width='24px' alt="lodOut"/>
</label>
    </div>
  );
}

