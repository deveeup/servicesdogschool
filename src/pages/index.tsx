import Image from 'next/image';
import logo from '@/assets/logo.png';
import { Layout } from '@/components/Layout';
import styles from '@/styles/Home.module.scss';

export default function Home({ db }: any) {
  return (
    <Layout>
      <main className={styles.main}>
        <div className={styles.ImageContainer}>
          <Image
            src={logo}
            alt={'Services Dog School'}
            width={200}
            height={200}
          />
          <h1>Services Dog School</h1>
        </div>
        <p>
          Register Your Service Animal, Emotional Support Animal, or Apply for a Letter from a Licensed Mental Health Professional for Housing.
        </p>
        <div className={styles.Container}>
          <div className={styles.ListContainer}>
            <h4>Registration Benefits</h4>
            <ul>
              <li>All orders have an option of digital copies of your certificate of registration and photo ID so you can print them out for immediate use.</li>
              <br/>
              <li>
                Registration is valid for the lifetime of your animal.
              </li>
              <br/>
              <li>
                Your service animal or emotional support animal will be placed in the official Services Dog School Database.
              </li>
              <br/>
              <li>
                Our staff attorneys will get involved and help if your rights are being violated. Registration gives you access to our legal team.
              </li>
            </ul>
          </div>
          <div className={styles.ListContainer}>
            <h4>Easy enroll in our course</h4>
            <ul>
              <li><b>Step #1:</b> Contact with your trainer. Her should give information for you for the next enrolls.</li>
              <br/>
              <li><b>Step #2:</b> Take the required course. In the process you find others courses and extra material, this isn't mandatory (mandatorys is only the course)</li>
              <br/>
              <li><b>Step #3:</b> Your animal will be registered as an Emotional Support Animal (ESA) or Service Animal and placed in the Services Dog School Database.</li>
              <br/>
              <li><b>Step #4:</b> Receive your Certificate & ID In The Mail Fast!
                You will receive your ESA or Service Animal Registration Certificate and Photo ID by mail and in digital format (optional) to download for immediate use.
              </li>
            </ul>
          </div>
        </div>
        <div className={styles.ContactContainer}>
          <p>If you wanna enroll the next course the Services Animal please click here.</p>
          <a href="mailto:support@servicesdogschool.com">support@servicesdogschool.com</a>
        </div>
      </main>
    </Layout>
  )
}
