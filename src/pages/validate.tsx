import Image from 'next/image'
import { Layout } from '@/components/Layout';
import DogValidate from '@/assets/dog-validate.jpg';
import styles from '@/styles/Validate.module.scss';


export default function Validate() {
  return (
    <Layout>
      <main className={styles.validate}>
        <h2>Registration Verification</h2>
        <h4>Verify Animal Registration</h4>
        <div className={styles.container}>
          <div className={styles.information}>
            <Image
              src={DogValidate}
              alt="Picture of the author"
              width={300}
              height={200}
            />
            <p>
              Services Dog School is the nation's largest Support Animal registry.
              Enter your registration number (found on your animal's ID, begins with either ES- or SA-)
              below to verify your animal's registration information.
              Please click on the next tab to verify your ESA Letter.
              Any questions? Email us at <a href="mailto:support@servicesdogschool.com">support@servicesdogschool.com</a>
            </p>
          </div>
          <div className={styles.inputContainer}>
            <span>Verify Registration</span>
            <input type="text" placeholder='Enter your ID' />
            <button>Verify</button>
          </div>
        </div>
      </main>
    </Layout>
  )
}
