import styles from './Loader.module.scss';

function Loader() {
  return (
    <div className={styles['loader-container']}>
      <div className={styles['loader-spinner-eclipse']}>
        <div className={styles['loader-inner']}>
          <div></div>
        </div>
      </div>
    </div>
  );
}

export default Loader;