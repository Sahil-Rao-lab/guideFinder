import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import RecentBlogs from "@/components/RecentBlogs";
import Trust from "@/components/Trust";
import styles from '@/styles/HowItsWork.module.css'
import Link from "next/link";


export default function HowItWorks() {


    return (
        <>
            <Navbar staticNav={true} />
            <div className={styles.container}>
                <div class={styles.dedicated_team}>
                    <p class={styles.small_txt}>GUIDEFINDER</p>
                    <h5 class={styles.bg_txt} id="agileTxt">HOW IT WORKS !</h5>
                    <p class={styles.dedicated_right_para}>You're only a few clicks away from your next unique adventure with like-minded travel buddies.</p>
                </div>
                <div class={styles.phases}>
                    <div class={styles.phase}>
                        <div>
                            <p class={styles.small_txt}>STEP 1</p>
                            <p class={styles.big_txt}>Explore Your Dream Trip!</p>
                            <p class={styles.phase_deliverables}>Choose from over 300 unique trips from all around the world.</p>
                        </div>
                        <span>1</span>
                    </div>
                    <div class={styles.phase} style={{flexDirection:"row-reverse"}}>
                        <div>
                            <p class={styles.small_txt}>STEP 2</p>
                            <p class={styles.big_txt}>Book your dream trip</p>
                            <p class={styles.phase_deliverables}>Reserve a spot on your dream trip by paying a 20% deposit and send a message to your TripLeader to introduce yourself.</p>
                        </div>
                        <span>2</span>
                    </div>
                    <div class={styles.phase}>
                        <div>
                            <p class={styles.small_txt}>STEP 3</p>
                            <p class={styles.big_txt}>Travel the world together</p>
                            <p class={styles.phase_deliverables}>The TripLeader can now accept you as a TripMate and will start your adventure together!</p>
                        </div>
                        <span>3</span>
                    </div>
                    <div class={styles.phase} style={{flexDirection:"row-reverse"}}>
                        <div>
                            <p class={styles.small_txt}>STEP 4</p>
                            <p class={styles.big_txt}>Still have any questions?</p>
                            <p class={styles.phase_deliverables}>Go to the <Link href={""}>Help & FAQ</Link> to get answer the common asked questions or <Link href={""}>Contact Us</Link></p>
                        </div>
                        <span>4</span>
                    </div>
                </div>
            </div>
            <hr />
            <RecentBlogs/>
            <hr />
            <Trust/>
            <hr />
            <Footer />
        </>
    )
}