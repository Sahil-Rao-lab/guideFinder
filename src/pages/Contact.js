import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import styles from '@/styles/Contact.module.css'


export default function Contact() {


    return (
        <>
            <Navbar staticNav={true} />
            <div className={styles.container}>
                <div class={styles.contactHeading}>
                    <p class={styles.small_txt}>GUIDEFINDER</p>
                    <h5 class={styles.mainTitle} id="agileTxt">CONTACT US!</h5>
                </div>
                <div className={styles.containerContent}>
                    <div className={styles.typo}>
                        <div className={styles.typoTop}>
                            <div className={styles.img1}></div>
                            <div className={styles.img2}></div>
                            <div className={styles.img3}></div>
                            <div className={styles.img4}></div>
                        </div>
                        <div className={styles.typoBottom}>
                            <div>
                                <i class="fa-solid fa-location-dot"></i>
                                <span><span>Office No. 333-A,</span> <span>Aadrash Nagar</span><span>Hisar/Haryana/India</span></span>
                            </div>
                            <div>
                                <i class="fa-solid fa-phone"></i>
                                <span>+91-9999999999</span>
                            </div>
                            <div>
                                <i class="fa-solid fa-envelope"></i>
                                <span>contact@guidefinder.com</span>
                            </div>
                        </div>
                    </div>
                    <form className={styles.form}>
                        <label htmlFor="fullName">Full Name</label>
                        <input type="text" name="fullName" id="fullName" placeholder="Type here" />
                        <label htmlFor="email">Email ID</label>
                        <input type="email" name="email" id="email" placeholder="yourname@email.com" />
                        <label htmlFor="title">Title</label>
                        <input type="text" name="title" id="title" placeholder="e.g. Collaboration" />
                        <label htmlFor="details">Brief Details</label>
                        <textarea name="details" id="details" cols="30" rows="10" placeholder="Message...">
                        </textarea>
                        <button>SUBMIT</button>
                    </form>
                </div>
            </div>
            <hr />
            <Footer />
        </>
    )
}