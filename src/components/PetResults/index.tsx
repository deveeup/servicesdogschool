import { useState } from 'react';
import Image from 'next/image';
import { useRouter } from 'next/router';
import styles from './PetResults.module.scss';

export const PetResults = ({ pet }: any) => {
  const router = useRouter();
  const [certificateAvailable, setCertificateAvailable] = useState(false);
  const [tryAgainCertificate, setTryAgainCertificate] = useState(false);
  const [certificateValue, setCertificateValue] = useState('');

  const [licenseAvailable, setLicenseAvailable] = useState(false);
  const [tryAgainLicense, setTryAgainLicense] = useState(false);
  const [licenseValue, setLicenseValue] = useState('');

  const handleValidateCertificate = () => {
    if(certificateValue === pet.password) {
      setCertificateAvailable(true);
    } else {
      setCertificateAvailable(false);
      setTryAgainCertificate(true);
    }
  }
  const handleValidateLicense = () => {
    if(licenseValue === pet.password) {
      setLicenseAvailable(true);
    } else {
      setLicenseAvailable(false);
      setTryAgainLicense(true);
    }
  }

  return (
    <div className={styles.PetResultsContainer}>
      <h1>Registered Animal details</h1>
      <div className={styles.infoContainer}>
        <p>Services Dog School Registry</p>
        <div className={styles.tableContainer}>
          <Image
            src={pet.image}
            alt={`Service Animal - ${pet.name}`}
            width={200}
            height={200}
          />
          <table>
            <tr>
              <td>Animal name: </td>
              <td>{pet.name}</td>
            </tr>
            <tr>
              <td>Microchip #: </td>
              <td>{pet.microchip}</td>
            </tr>
            <tr>
              <td>Animal type: </td>
              <td>{pet.animalType}</td>
            </tr>
            <tr>
              <td>Registration date: </td>
              <td>{pet.registerDate}</td>
            </tr>
            <tr>
              <td>Species: </td>
              <td>{pet.species}</td>
            </tr>
            <tr>
              <td>Breed: </td>
              <td>{pet.breed}</td>
            </tr>
            <tr>
              <td>Birthdate: </td>
              <td>{pet.birthdate}</td>
            </tr>
            <tr>
              <td>Weight: </td>
              <td>{pet.weight} lbs.</td>
            </tr>
            <tr>
              <td>Owner name: </td>
              <td>{pet.owner}</td>
            </tr>
            <tr>
              <td>Registration state: </td>
              <td>{pet.registerState}</td>
            </tr>
            <tr>
              <td>Registration number: </td>
              <td><b>{pet.id}</b></td>
            </tr>
            <tr>
              <td>Certificate: </td>
              <td>
                {!certificateAvailable ? (
                  <div className={styles.PasswordContainer}>
                    <div className={styles.InputContainer}>
                      <input
                        type="password"
                        id="certificate"
                        placeholder="Password"
                        onChange={(e) => setCertificateValue(e.target.value)}
                      />
                      <button onClick={handleValidateCertificate}>OK</button>
                    </div>
                    {tryAgainCertificate && (
                      <span className={styles.InvalidPassword}>Invalid password, try again.</span>
                    )}
                  </div>
                ) : (
                  <div className={styles.PdfContainer}>
                    <a
                      href={pet.certificate}
                      download={`${pet.id}-certificate`}
                      target="_blank"
                      type="application/octet-stream"
                    >
                      Download certificate
                    </a>
                  </div>
                )}
              </td>
            </tr>
            <tr>
              <td>License: </td>
              <td>
                {!licenseAvailable ? (
                  <div className={styles.PasswordContainer}>
                    <div className={styles.InputContainer}>
                      <input
                        type="password"
                        id="license"
                        placeholder="Password"
                        onChange={(e) => setLicenseValue(e.target.value)}
                      />
                      <button onClick={handleValidateLicense}>OK</button>
                    </div>
                    {tryAgainLicense && (
                      <span className={styles.InvalidPassword}>Invalid password, try again.</span>
                    )}
                  </div>
                ) : (
                  <div className={styles.PdfContainer}>
                    <a
                      href={pet.license}
                      download={`${pet.id}-license`}
                      target="_blank"
                      type="application/octet-stream"
                    >
                      Download license
                    </a>
                  </div>
                )}
              </td>
            </tr>
          </table>
        </div>
        <button type="button" onClick={() => router.push({pathname: '/validate'})}>
          Go back
        </button>
      </div>
    </div>
  )
}