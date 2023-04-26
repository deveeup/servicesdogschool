import { BeatLoader } from 'react-spinners';
import styles from './Loader.module.scss';

export const Loader = () => {
  return (
    <div className={styles.loaderContainer}>
      <BeatLoader color="#3c0c24" />
      <span>Loading...</span>
    </div>
  )
}