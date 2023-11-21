import styles from '@/styles/TripBox.module.css';
import Link from 'next/link';

export default function TripBox(props) {



    return (
        <>
            <div className={styles.tripBoxContainer}>
                <div className={styles.days}>
                    <span style={{fontSize:"1.4rem", fontWeight:"bolder", color: "#111"}}>08</span>
                    <span className={styles.line}>Days</span>
                </div>
                <p className={styles.with}><span>with</span><Link href={""}>Sahil Rao</Link></p>
                <div className={styles.date}>
                    from <b>22 MAY 2023</b> to <b>26 MAY 2023</b>
                </div>
                <p className={styles.title}> A Very Theme Park Christmas! (And A New York New Year!): Universal Studios, Disne</p>
                <div className={styles.image}>
                </div>
                <Link href={""}>VIEW DETAILS</Link>
                {
                    true ?
                    <i class="fa-regular fa-heart"></i>
                    : <i class="fa-solid fa-heart"></i>
                }
            </div>
        </>
    )
}