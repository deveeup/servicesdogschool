import Image from 'next/image';
import Link from 'next/link';
import { URL } from '../../constants';
import DogListen from '@/assets/dog-listen.jpg';
import styles from './NotFound.module.scss';

export const NotFound = () => {
  return (
    <div className={styles.NotFoundContainer}>
      <span className={styles.popUp}>
        Sorry, but we can't find the information!
      </span>
      <Image
        src={DogListen}
        alt="Picture of the author"
        width={300}
        height={200}
      />
      <div className={styles.infoContainer}>
        <h4>Unable To Find That Registration</h4>
        <p>Please check the number and try again.</p>
      </div>

      <Link href={URL.validate}>Check again</Link>
    </div>
  )
}