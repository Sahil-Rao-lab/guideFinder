import styles from '@/styles/TripLeaderBox.module.css';
import Link from 'next/link';

export default function TripLeaderBox(props) {



    return (
        <>
            <div className={styles.tripLeaderBoxContainer}>
                <span className={styles.line}></span>
                {
                    true ?
                        <i class="fa-regular fa-heart"></i>
                        : <i class="fa-solid fa-heart"></i>
                }
                <div className={styles.image}></div>
                <div className={styles.review}>
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star-half"></i>
                </div>
                <div className={styles.name}>Sahil rao | India</div>
                <div className={styles.actions}>
                    <Link href={""}>
                        <i class="fa-regular fa-message"></i>
                        <span>Message</span>
                    </Link>
                    <Link href={""}>
                        <i class="fa-regular fa-eye-slash"></i>
                        <span>View</span>
                    </Link>
                </div>
            </div>
        </>
    )
}