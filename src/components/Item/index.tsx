import Image from 'next/image';
import DogListen from '@/assets/dog-listen.jpg';
import styles from './Item.module.scss';

export const Item = ({ data }: any) => {
  return (
    <div className={styles.ItemContainer}>
      <Image
        src={data.image}
        alt="Picture of the author"
        width={200}
        height={150}
      />
      <h4>{data.name}</h4>
      <div className={styles.Details}>
        <p>{data.description}</p>
        {data.inPromotion
          ? (
            <div className={styles.WithPromotion}>
              <p>$ {data.price} USD</p>
              <span>$ {data.newPrice} USD</span>
            </div>
          )
          : (
            <div className={styles.WithoutPromotion}>
              <span>$ {data.price} USD</span>
            </div>
          )}
      </div>
    </div>
  )
}