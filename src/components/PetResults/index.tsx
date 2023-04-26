import Image from 'next/image';
import { useRouter } from 'next/router';
import styles from './PetResults.module.scss';

export const PetResults = ({ pet }: any) => {
  const router = useRouter();

  return (
    <div className={styles.PetResultsContainer}>
      <h1>Registered Animal details</h1>
      <div className={styles.infoContainer}>
        <p>Services Dogs School Registry</p>
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

          </table>
        </div>
        <button type="button" onClick={() => router.back()}>
          Go back
        </button>
      </div>
    </div>
  )
}