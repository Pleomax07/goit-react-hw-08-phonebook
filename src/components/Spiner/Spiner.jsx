import css from './Spiner.module.css';
export const Spiner = () => {
  return (
    <div className={css.spinnerContainer}>
      <div className={css.spinner}>
        <div className={css.spinner__item}>
          <div className={css.spinner__circle}></div>
        </div>
        <div className={css.spinner__item}>
          <div className={css.spinner__circle}></div>
        </div>
      </div>
    </div>
  );
};
