import css from './NotFound.module.css';
import { useNavigate } from 'react-router-dom';

const NotFound = () => {
  const navigate = useNavigate();
  const goBack = () => navigate(-1);
  return (
    <>
      <div className={css.container}>
        <h1>Page not found</h1>
        <p>This page is outdated, deleted or did not exist at all</p>
        <button onClick={goBack}>Go back</button>
      </div>
    </>
  );
};
export default NotFound;
