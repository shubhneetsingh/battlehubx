import Image from 'next/image';
import Link from 'next/link';
import styles from '../styles/TournamentCard.module.css';

const TournamentCard = ({ tournament }) => {
  return (
    <div className={styles.card}>
      <div className={styles.imageContainer}>
        <Image 
          src={tournament.image} 
          alt={tournament.game} 
          fill
          className={styles.image}
        />
        <div className={styles.prizePool}>
          ${tournament.prizePool.toLocaleString()}
        </div>
      </div>
      <div className={styles.content}>
        <h3 className={styles.title}>{tournament.title}</h3>
        <div className={styles.details}>
          <span className={styles.game}>{tournament.game}</span>
          <span className={styles.date}>{tournament.date}</span>
        </div>
        <div className={styles.footer}>
          <span className={styles.participants}>
            {tournament.participants} participants
          </span>
          <Link href={`/tournaments/${tournament.id}`} className={styles.button}>
            View Details
          </Link>
        </div>
      </div>
    </div>
  );
};

export default TournamentCard;