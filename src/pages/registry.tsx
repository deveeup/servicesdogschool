import { Layout } from '@/components/Layout'
import styles from '@/styles/Registry.module.scss'


export default function Registry() {
  return (
    <Layout>
      <main className={styles.RegistryContainer}>
        <h1>
          Register your Service Animal and receive all the benefits
        </h1>
        <div className={styles.infoContainer}>
          <div className={styles.loginContainer}>
            <h3>Trainers Login</h3>
            <div className={styles.item}>
              <label htmlFor="email">Email</label>
              <input type="text" name="email" id="email" placeholder='dogtrainer@email.com' />
            </div>
            <div className={styles.item}>
              <label htmlFor="password">Password</label>
              <input type="password" name="password" id="password" placeholder='Password' />
            </div>
            <button>Login</button>
            <p>This module is exclusive for Trainers.
              If you are Trainer from this school and having problems with login, or similar issues,
              please contact to <a href="mailto:support@servicesdogschool.com">support@servicesdogschool.com</a>
            </p>
          </div>
          <div className={styles.textsContainer}>
            <p>
              <b>BENEFITS OF REGISTERING YOUR PET</b>
              <br />
              <br />
              1. The ID card is great documentation, in addition to your vest, that you have a service animal and are covered under the ADA.
              <br />
              <br />
              2. A landlord or homeowner’s association must provide reasonable accommodation by waiving a no-pet rule or a pet deposit for ALL SERVICE ANIMALS under the ADA.
              <br />
              <br />
              3. Employers must allow service animals in the work place under the ADA.
              <br />
              <br />
              4. There are limited benefits to registering your service animal as they already have rights under the Americans With Disabilities Act (ADA). The registration does not give them any additional rights.
              <br />
              <br />
              <br />
              <b>KNOW YOUR RIGHTS</b>
              <br />
              <br />
              When you register with Services Dog School you will receive a card with an explanation of the law and your rights to present to anyone who inquires about your animal, as well as full access to our staff of legal professionals.
              <br />
              <br />
              <b>REGISTRATION INCLUDES</b>
              <br />
              <br />
              A Service Animal Registration Photo ID Card with the option to add a vest as well as digital copies of your photo ID for immediate download.
              <br />
              <br />
              A Service Animal Registration Certificate with the option to add a vest as well as digital copies of your certificate for immediate download.
              <br />
              <br />
              Your animal will be registered for the lifetime of the animal in the largest Service Animal and Emotional Support Animal database in the U.S.
              <span>
                All for Only $300 USD
              </span>
            </p>
          </div>
        </div>
      </main>
    </Layout>
  )
}
