import Image from 'next/image';
import DogListen from '@/assets/dog-listen.jpg';
import styles from './Item.module.scss';

export const Item = () => {
  return (
    <div className={styles.ItemContainer}>
      <Image
        src={DogListen}
        alt="Picture of the author"
        width={200}
        height={150}
      />
      <h4>Item Title</h4>
      <div className={styles.Details}>
        <p>Example description text from product</p>
        {/* <div className={styles.WithoutPromotion}>
          <span>$ 25.00 USD</span>
        </div> */}
        <div className={styles.WithPromotion}>
          <p>$ 25.00 USD</p>
          <span>$ 20.00 USD</span>
        </div>
      </div>
    </div>
  )
}