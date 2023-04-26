import Link from 'next/link';
import Image from 'next/image';
import amricanexpress from '@/assets/amricanexpress.png';
import comodolock from '@/assets/comodolock.png';
import iso from '@/assets/iso27001.png';
import mastercard from '@/assets/mastercard.png';
import paypal from '@/assets/paypal.webp';
import trustwave from '@/assets/trustwave.png';
import visa from '@/assets/visa.svg';
import styles from './Footer.module.scss';

export const Footer = () => {
  return (
    <div className={styles.Footer}>
      <div className={styles.Logos}>
        {/* Secure Payments */}
        <div className={styles.Item}>
          <h4>Secure payments</h4>
          <div className={styles.ImageContainer}>
            <Image
              src={trustwave}
              alt={'Services Dog School - Visa payment method'}
              width={80}
              height={38}
            />
            <Image
              src={comodolock}
              alt={'Services Dog School - Visa payment method'}
              width={100}
              height={58}
            />
            <Image
              src={iso}
              alt={'Services Dog School - Visa payment method'}
              width={100}
              height={58}
            />
          </div>
        </div>
        {/* We accept */}
        <div className={styles.Item}>
          <h4>We accept</h4>
          <div className={styles.ImageContainer}>
            <Image
              src={visa}
              alt={'Services Dog School - Visa payment method'}
              width={50}
              height={38}
            />
            <Image
              src={paypal}
              alt={'Services Dog School - Paypal payment method'}
              width={100}
              height={40}
            />
            <Image
              src={mastercard}
              alt={'Services Dog School - Mastercard payment method'}
              width={60}
              height={40}
            />
            <Image
              src={amricanexpress}
              alt={'Services Dog School - American Express payment method'}
              width={60}
              height={40}
            />
          </div>
        </div>
        {/* FAQS */}
        <div className={styles.Item}>
          <h4>Utils Links</h4>
          <div className={styles.ImageContainer}>
            <ul>
              <li>Shop</li>
              <li>FAQS</li>
              <li>Contact</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Contact and Terms */}
      <div className={styles.TermsAndConditions}>
        {/* Contact */}
        <h4>
          About us
        </h4>
        <p>
          © 2023 Services Dog School.
          <br />
          All Rights Reserved
          <br />
          <br />
          For more information please contact:
          <br />
          <a href="tel:+17862921416">+1 (786) 292 1416</a>
          <br />
          <br />
          <Link href="">Terms & conditions</Link> | <Link href="">Privacy policy</Link>
        </p>
      </div>
    </div>
  );
};